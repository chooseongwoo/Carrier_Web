import { useEffect, useRef, useState } from 'react';
import * as s from './style.css';
import { BeforeIcon, NextIcon, PauseIcon, PlayIcon } from '../ui';
import { useQuery } from '@tanstack/react-query';
import { useGetAudio } from '../service/proceed.query';
import { DotLoader } from 'react-spinners';
import theme from 'shared/styles/theme.css';

interface WaveformVisualizerProps {
  audioSrc: string;
}

const WaveformVisualizer = ({ audioSrc }: WaveformVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [volumeData, setVolumeData] = useState<number[]>(
    new Array(100).fill(-Infinity)
  );
  const [playState, setPlayState] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [sourceNode, setSourceNode] = useState<AudioBufferSourceNode | null>(
    null
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [pauseOffset, setPauseOffset] = useState<number>(0);
  const [cachedAudioData, setCachedAudioData] = useState<ArrayBuffer | null>(
    null
  );

  const {
    data: audioData,
    isLoading,
    error,
  } = useQuery({
    ...useGetAudio.getAudio(audioSrc),
    enabled: !!audioSrc,
  });

  const minHeight = 5;
  const maxHeight = 100;

  useEffect(() => {
    return () => {
      if (sourceNode) {
        sourceNode.stop();
      }
    };
  }, [audioSrc, sourceNode]);

  useEffect(() => {
    if (!audioData) return;

    const processAudioData = async () => {
      try {
        const arrayBuffer = audioData.slice(0);
        const audioCtx = new AudioContext();
        const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);

        setAudioBuffer(decodedAudio);
        setAudioContext(audioCtx);

        const channelData = decodedAudio.getChannelData(0);
        const sampleCount = 200;
        const step = Math.floor(channelData.length / sampleCount);
        const newVolumeData: number[] = [];

        for (let i = 0; i < sampleCount; i++) {
          const slice = channelData.slice(i * step, (i + 1) * step);
          const rms = Math.sqrt(
            slice.reduce((sum, sample) => sum + sample * sample, 0) /
              slice.length
          );
          const dbValue = rms > 0 ? 20 * Math.log10(rms) : -Infinity;
          newVolumeData.push(dbValue);
        }

        setVolumeData(newVolumeData);
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error('오디오 처리 실패:', error);
      }
    };

    processAudioData();
  }, [audioData]);

  useEffect(() => {
    if (audioData && !cachedAudioData) {
      setCachedAudioData(audioData);
    }
  }, [audioData, cachedAudioData]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const drawWaveform = () => {
      const width = canvas.width;
      const height = canvas.height;
      const bars = volumeData.length;
      const barWidth = width / bars - 3;

      ctx.clearRect(0, 0, width, height);

      volumeData.forEach((dbValue, i) => {
        let normalizedHeight =
          ((dbValue + maxHeight) / maxHeight) * height * 0.8;
        normalizedHeight = Math.max(minHeight, normalizedHeight);

        const x = i * (barWidth + 3);
        const isCurrentProgress = (i / bars) * 100 < progress;

        ctx.fillStyle = isCurrentProgress ? 'blue' : 'gray';
        ctx.beginPath();
        ctx.roundRect(
          x,
          height / 2 - normalizedHeight / 2,
          barWidth,
          normalizedHeight,
          barWidth / 2
        );
        ctx.fill();
      });

      requestAnimationFrame(drawWaveform);
    };

    drawWaveform();
  }, [progress, volumeData]);

  useEffect(() => {
    let animationFrameId: number;

    if (playState && startTime !== null && audioContext && audioBuffer) {
      const updateProgress = () => {
        const elapsedTime = audioContext.currentTime - startTime;
        const currentProgress = (elapsedTime / audioBuffer.duration) * 100;
        setProgress(currentProgress);
        animationFrameId = requestAnimationFrame(updateProgress);
      };

      animationFrameId = requestAnimationFrame(updateProgress);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [playState, startTime, audioContext, audioBuffer]);

  const handlePlay = () => {
    if (!audioBuffer || !audioContext) return;

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);

    const offset =
      pauseOffset > 0 ? pauseOffset : (progress / 100) * audioBuffer.duration;
    setStartTime(audioContext.currentTime - offset);
    source.start(0, offset);

    setSourceNode(source);
    setPlayState(true);

    source.onended = () => {
      setPlayState(false);
      setProgress(0);
      setPauseOffset(0);
    };
  };

  const handlePause = () => {
    if (sourceNode && playState && audioContext && startTime !== null) {
      const elapsed = audioContext.currentTime - startTime;
      setPauseOffset(elapsed);
      sourceNode.stop();
      setSourceNode(null);
      setPlayState(false);
    }
  };

  const handleSkipToStart = () => {
    setProgress(0);
    setPauseOffset(0);
    if (playState && sourceNode) {
      sourceNode.stop();
      setPlayState(false);
      setSourceNode(null);
    }
  };

  const handleSkipToEnd = () => {
    if (!audioBuffer) return;
    setProgress(100);
    setPauseOffset(audioBuffer.duration);
    if (playState && sourceNode) {
      sourceNode.stop();
      setPlayState(false);
      setSourceNode(null);
    }
  };

  if (isLoading) {
    return (
      <div className={s.AudioLoadingLayout}>
        <DotLoader
          color={theme.blue[500]}
          size={36}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <div>AI가 열심히 불러오는 중이에요...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.AudioLoadingLayout}>
        <div>오디오 로드 실패: {(error as Error).message}</div>
      </div>
    );
  }

  return (
    <div className={s.AudioContainer}>
      <canvas
        ref={canvasRef}
        className={s.AudioVisualizerCanvas}
        width={1200}
        height={100}
      />
      <div className={s.AudioState}>
        <button onClick={handleSkipToStart}>
          <BeforeIcon />
        </button>
        {!playState ? (
          <button onClick={handlePlay}>
            <PlayIcon />
          </button>
        ) : (
          <button onClick={handlePause}>
            <PauseIcon />
          </button>
        )}
        <button onClick={handleSkipToEnd}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default WaveformVisualizer;

import { useEffect, useRef, useState } from 'react';
import * as s from './style.css';
import { BeforeIcon, NextIcon, PauseIcon, PlayIcon } from '../ui';

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

  const minHeight = 5;
  const maxHeight = 100;

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const finalUrl = `http://211.112.175.88:9999/meets/audio/${audioSrc}`;
        const response = await fetch(finalUrl, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            Accept: 'audio/webm', // 강제 오디오 요청
          },
        });

        if (!response.ok)
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);

        const arrayBuffer = await response.arrayBuffer();
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
        console.error('오디오 로드 실패:', error);
      }
    };

    fetchAudioData();
  }, [audioSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

  const handlePlay = () => {
    if (!audioBuffer || !audioContext) return;

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    setSourceNode(source);
    setPlayState(true);

    source.onended = () => {
      setPlayState(false);
      setProgress(0);
    };
  };

  const handlePause = () => {
    if (sourceNode) {
      sourceNode.stop();
      setPlayState(false);
    }
  };

  return (
    <div className={s.AudioContainer}>
      <canvas
        ref={canvasRef}
        className={s.AudioVisualizerCanvas}
        width={1200}
        height={100}
      />
      <div className={s.AudioState}>
        <button onClick={() => setProgress(0)}>
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
        <button onClick={handlePlay}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default WaveformVisualizer;

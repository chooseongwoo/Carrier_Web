import { useEffect, useRef, useState } from 'react';
import PlayIcon from '../ui/PlayIcon';
import * as s from './style.css';
import { BeforeIcon, NextIcon } from '../ui';

interface WaveformVisualizerProps {
  audioSrc: string;
}

const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  audioSrc,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));
  const [progress, setProgress] = useState(0);
  const [volumeData, setVolumeData] = useState<number[]>(
    new Array(100).fill(-Infinity)
  );
  const [playState, setPlayState] = useState(false);

  const minHeight = 10;
  const maxHeight = 100;

  useEffect(() => {
    const fetchAudioData = async () => {
      const response = await fetch(audioSrc);
      const arrayBuffer = await response.arrayBuffer();
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const channelData = audioBuffer.getChannelData(0);

      const sampleCount = 100;
      const step = Math.floor(channelData.length / sampleCount);
      const newVolumeData: number[] = [];

      for (let i = 0; i < sampleCount; i++) {
        const slice = channelData.slice(i * step, (i + 1) * step);
        const rms = Math.sqrt(
          slice.reduce((sum, sample) => sum + sample * sample, 0) / slice.length
        );

        const dbValue = rms > 0 ? 20 * Math.log10(rms) : -Infinity;
        newVolumeData.push(dbValue);
      }

      setVolumeData(newVolumeData);
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
      const barWidth = width / bars;

      ctx.clearRect(0, 0, width, height);

      volumeData.forEach((dbValue, i) => {
        let normalizedHeight =
          ((dbValue + maxHeight) / maxHeight) * height * 0.8;

        normalizedHeight = Math.max(minHeight, normalizedHeight);

        const x = i * barWidth;
        const isCurrentProgress = (i / bars) * 100 < progress;

        ctx.fillStyle = isCurrentProgress ? 'blue' : 'gray';
        ctx.fillRect(
          x,
          height / 2 - normalizedHeight / 2,
          barWidth - 2,
          normalizedHeight
        );
      });

      requestAnimationFrame(drawWaveform);
    };

    drawWaveform();
  }, [progress, volumeData]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
      requestAnimationFrame(updateProgress);
    };

    audio.addEventListener('ended', () => {
      setPlayState(false);
      setProgress(0);
    });

    audio.addEventListener('play', () => requestAnimationFrame(updateProgress));

    return () => {
      audio.removeEventListener('play', () =>
        requestAnimationFrame(updateProgress)
      );
      audio.removeEventListener('ended', () => setPlayState(false));
    };
  }, []);

  const handlePlay = () => {
    setPlayState(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setPlayState(false);
    audioRef.current.pause();
  };

  return (
    <div className={s.AudioContainer}>
      <canvas ref={canvasRef} width={1200} height={100} />
      <div className={s.AudioState}>
        <button onClick={() => (audioRef.current.currentTime = 0)}>
          <BeforeIcon />
        </button>
        {!playState ? (
          <button onClick={handlePlay}>
            <PlayIcon />
          </button>
        ) : (
          <button onClick={handlePause}>멈추기</button>
        )}
        <button onClick={handlePlay}>
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default WaveformVisualizer;

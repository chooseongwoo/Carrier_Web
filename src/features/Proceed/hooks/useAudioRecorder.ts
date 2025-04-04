import { useState, useRef, useCallback, useEffect } from 'react';

interface UseAudioRecorderProps {
  onRecordingComplete?: (audioBlob: Blob, duration: number) => void;
}

interface UseAudioRecorderReturn {
  recordingState: boolean;
  recordingDuration: number;
  volumeLevel: number;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  audioBlob: Blob | null;
}

const useAudioRecorder = ({
  onRecordingComplete,
}: UseAudioRecorderProps = {}): UseAudioRecorderReturn => {
  const [recordingState, setRecordingState] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const updateVolume = useCallback(() => {
    if (analyserRef.current) {
      const bufferLength = analyserRef.current.fftSize;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        const normalized = (dataArray[i] - 128) / 128;
        sum += normalized * normalized;
      }
      const rms = Math.sqrt(sum / bufferLength);
      setVolumeLevel(rms);
    }
    animationFrameRef.current = requestAnimationFrame(updateVolume);
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      animationFrameRef.current = requestAnimationFrame(updateVolume);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      setRecordingState(true);

      let seconds = 0;
      timerRef.current = setInterval(() => {
        seconds++;
        setRecordingDuration(seconds);
      }, 1000);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error('Error accessing microphone:', error);
    }
  }, [updateVolume]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && streamRef.current) {
      mediaRecorderRef.current.stop();

      mediaRecorderRef.current.onstop = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
          audioContextRef.current = null;
          analyserRef.current = null;
        }
        setVolumeLevel(0);

        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/webm',
        });
        setAudioBlob(audioBlob);

        if (onRecordingComplete) {
          onRecordingComplete(audioBlob, recordingDuration);
        }

        setRecordingState(false);
        setRecordingDuration(0);

        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };
    }
  }, [recordingDuration, onRecordingComplete]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return {
    recordingState,
    recordingDuration,
    volumeLevel,
    startRecording,
    stopRecording,
    audioBlob,
  };
};

export default useAudioRecorder;

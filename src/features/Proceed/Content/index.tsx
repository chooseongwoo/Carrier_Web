import { useState, useRef, useEffect, useCallback } from 'react';
import * as s from './style.css';
import WaveformVisualizer from '../Visualizer';

interface RecordingItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  audioUrl: string;
}

const ProceedContent = () => {
  const [recordState, setRecordState] = useState<'Record' | 'Select' | 'None'>(
    'None'
  );
  const [recordingState, setRecordingState] = useState(false);
  const [recordings, setRecordings] = useState<RecordingItem[]>([]);
  console.log(recordings);
  const [selectedRecording, setSelectedRecording] =
    useState<RecordingItem | null>(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordingTitle, setRecordingTitle] = useState('새 녹음');
  const [volumeLevel, setVolumeLevel] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const startRecording = async () => {
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
      /* eslint-disable no-console */
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
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
          type: 'audio/wav',
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        const minutes = Math.floor(recordingDuration / 60);
        const seconds = recordingDuration % 60;
        const formattedDuration = `${minutes.toString().padStart(2, '0')}.${seconds
          .toString()
          .padStart(2, '0')}초`;

        const now = new Date();
        const formattedDate = `${now.getFullYear()}.${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}`;

        const newRecording: RecordingItem = {
          id: Date.now().toString(),
          title: recordingTitle,
          date: formattedDate,
          duration: formattedDuration,
          audioUrl: audioUrl,
        };

        setRecordings((prev) => [...prev, newRecording]);
        setSelectedRecording(newRecording);
        setRecordState('Select');

        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };

      setRecordingState(false);
      setRecordingDuration(0);
    }
  };

  const handelRecordingButtonClick = () => {
    if (recordingState) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handelRecordButtonClick = () => {
    setSelectedRecording(null);
    setRecordState('Record');
    setRecordingTitle('새 녹음');
  };

  const handleSelectRecording = (recording: RecordingItem) => {
    setSelectedRecording(recording);
    setRecordState('Select');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

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

  const buttonScale = 1 + volumeLevel * 0.5;

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <div className={s.title}>모든 녹음 요약</div>
        <div className={s.recordContents}>
          {recordings.length > 0 ? (
            recordings.map((recording) => (
              <div
                className={s.recordContentContainer({
                  isSelected:
                    selectedRecording?.id === recording.id ? true : false,
                })}
                key={recording.id}
              >
                <div
                  className={s.recordContent({
                    isSelected:
                      selectedRecording?.id === recording.id ? true : false,
                  })}
                  onClick={() => handleSelectRecording(recording)}
                >
                  <div className={s.recordTitle}>
                    <div className={s.recordTitleText}>{recording.title}</div>
                    <div
                      className={s.recordTitleDate({
                        isSelected:
                          selectedRecording?.id === recording.id ? true : false,
                      })}
                    >
                      {recording.date}
                    </div>
                  </div>
                  <div
                    className={s.recordTime({
                      isSelected:
                        selectedRecording?.id === recording.id ? true : false,
                    })}
                  >
                    {recording.duration}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={s.recordContentNone}>녹음된 내용이 없습니다.</div>
          )}
        </div>
        <div className={s.recordButtonLayout}>
          <div className={s.recordButton} onClick={handelRecordButtonClick}>
            <div className={s.recordButtonInner} />
          </div>
        </div>
      </div>

      <div className={s.mainContent}>
        {recordState === 'None' ? (
          <div className={s.mainContentNoneSelect}>선택된 녹음 없음</div>
        ) : recordState === 'Record' ? (
          <div className={s.mainRecordContent({ isRecord: recordingState })}>
            {recordingState ? (
              <>
                <div className={s.mainRecordEffect}>
                  {Math.floor(recordingDuration / 60)
                    .toString()
                    .padStart(2, '0')}
                  :{(recordingDuration % 60).toString().padStart(2, '0')}
                </div>
                <div
                  className={s.mainRecordButtonIconLayout}
                  onClick={handelRecordingButtonClick}
                  style={{ transform: `scale(${buttonScale})` }}
                >
                  <div className={s.mainRecordButtonIcon} />
                </div>
              </>
            ) : (
              <div
                className={s.mainRecordButtonText}
                onClick={handelRecordingButtonClick}
              >
                눌러서 녹음 시작
              </div>
            )}
          </div>
        ) : (
          <div className={s.mainSummarizeContentLayout}>
            {selectedRecording && (
              <>
                <div className={s.SummarizeContent}>
                  <div className={s.SummarizeMainTitle}>AI 요약됨</div>
                  <div className={s.SummarizeContentDetail}>
                    <div>
                      <div className={s.SummarizeTitle}>녹음 제목</div>
                      <div className={s.SummarizeSubTitle}>
                        {selectedRecording.title}
                      </div>
                    </div>
                    <div>
                      <div className={s.SummarizeTitle}>녹음 내용</div>
                      <div className={s.SummarizeSubTitle}>
                        녹음 요약한거 여기에 들어감
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.mainContentListenBar}>
                  <div>
                    {selectedRecording.audioUrl && (
                      <WaveformVisualizer
                        audioSrc={selectedRecording.audioUrl}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedContent;

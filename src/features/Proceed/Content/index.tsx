import { useState, useRef, useEffect } from 'react';
import * as s from './style.css';
import WaveformVisualizer from '../Visualizer';
import { usePostProceed } from '../service/proceed.mutation';
import { useQuery } from '@tanstack/react-query';
import { useGetProceed } from '../service/proceed.query';
import { formatDate } from 'shared/lib/date';
import { DotLoader } from 'react-spinners';
import theme from 'shared/styles/theme.css';
import { BigDownArrow } from '../ui';
import useAudioRecorder from '../hooks/useAudioRecorder';

interface RecordingItem {
  id: string;
  title: string;
  text: string;
  textSummary: string;
  time: string;
  audioLink: string;
  createdAt: string;
}

const ProceedContent = () => {
  const postProceedMutation = usePostProceed();
  const [recordState, setRecordState] = useState<'Record' | 'Select' | 'None'>(
    'None'
  );
  const [recordings, setRecordings] = useState<RecordingItem[]>([]);
  const [selectedRecording, setSelectedRecording] =
    useState<RecordingItem | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { data: proceedData } = useQuery(useGetProceed.getProceed());

  const {
    recordingState,
    recordingDuration,
    volumeLevel,
    startRecording,
    stopRecording,
  } = useAudioRecorder({
    onRecordingComplete: (audioBlob, duration) => {
      const audioFile = new File([audioBlob], `recording-${Date.now()}.webm`, {
        type: 'audio/webm',
      });

      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      const formattedTime = `${minutes.toString().padStart(2, '0')}.${seconds
        .toString()
        .padStart(2, '0')}초`;

      postProceedMutation.mutate(
        {
          audioFile,
          time: formattedTime,
        },
        {
          onSuccess: (data) => {
            /* eslint-disable-next-line no-console */
            console.log(data);
            const newRecording = {
              id: data.id,
              title: data.title,
              text: data.text,
              textSummary: data.textSummary,
              time: data.time,
              audioLink: URL.createObjectURL(audioBlob),
              createdAt: data.createdAt,
            };
            setRecordings((prev) => [...prev, newRecording]);
            setSelectedRecording(newRecording);
          },
        }
      );
      setRecordState('Select');

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    },
  });

  useEffect(() => {
    if (proceedData) {
      const formattedRecordings = proceedData.map((item: RecordingItem) => ({
        id: item.id.toString(),
        title: item.title || '제목 없음',
        text: item.text,
        textSummary: item.textSummary,
        time: item.time,
        audioLink: item.audioLink,
        createdAt: item.createdAt,
      }));
      setRecordings(formattedRecordings);
    }
  }, [proceedData]);

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
  };

  const handleSelectRecording = (recording: RecordingItem) => {
    setSelectedRecording(recording);
    setRecordState('Select');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

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
                      {formatDate(recording.createdAt)}
                    </div>
                  </div>
                  <div
                    className={s.recordTime({
                      isSelected:
                        selectedRecording?.id === recording.id ? true : false,
                    })}
                  >
                    {recording.time}
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

      {postProceedMutation.status === 'pending' ? (
        <div className={s.mainContentLoadingLayout}>
          <div className={s.mainContentLoading}>
            <DotLoader
              color={theme.blue[500]}
              size={36}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div>AI가 열심히 생성 중이에요...</div>
          </div>
        </div>
      ) : null}

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
                <div className={s.SummarizeContentLayout}>
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
                          {selectedRecording.textSummary}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={s.SummarizeContentDownArrow}>
                    <BigDownArrow />
                  </div>

                  <div className={s.SummarizeContentALL}>
                    <div className={s.SummarizeMainTitle}>전체 본문</div>
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
                          {selectedRecording.text}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={s.mainContentListenBar}>
                  <div>
                    {selectedRecording.audioLink && (
                      <WaveformVisualizer audioSrc={selectedRecording.id} />
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

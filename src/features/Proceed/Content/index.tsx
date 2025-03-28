import { useState } from 'react';
import * as s from './style.css';

const ProceedContent = () => {
  const [recordState, setRecordState] = useState<'Record' | 'Select' | 'None'>(
    'Select'
  );
  const [recordingState, setRecordingState] = useState(false);

  const handelRecordingButtonClick = () => {
    setRecordingState((prev) => !prev);
  };

  const handelRecordButtonClick = () => {
    setRecordState('Record');
  };

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <div className={s.title}>모든 녹음 요약</div>
        <div className={s.recordContents}>
          {/* Map */}

          <div className={s.recordContent}>
            <div className={s.recordTitle}>
              <div className={s.recordTitleText}>제목</div>
              <div className={s.recordTitleDate}>2025.02.30</div>
            </div>

            <div className={s.recordTime}>00.00초</div>
          </div>

          {/* Map */}
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
            {recordingState && <div className={s.animatedBg} />}
            {recordingState ? (
              <div
                className={s.mainRecordButtonIconLayout}
                onClick={handelRecordingButtonClick}
              >
                <div className={s.mainRecordButtonIcon} />
              </div>
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
            <div className={s.SummarizeContent}>
              <div className={s.SummarizeMainTitle}>AI 요약됨</div>

              <div className={s.SummarizeContentDetail}>
                <div>
                  <div className={s.SummarizeTitle}>회의 주제</div>
                  <div className={s.SummarizeSubTitle}>회의 주제입니다</div>
                </div>

                <div>
                  <div className={s.SummarizeTitle}>회의 내용</div>
                  <div className={s.SummarizeSubTitle}>
                    이번 회의에서는 자사 앱의 차기 버전에 포함될 신규 기능에
                    대한 아이디어를 자유롭게 제안하고, 그 중 실현 가능한 기능을
                    선별하는 데 중점을 두었다. 주요 논의는 사용자 경험 개선과 AI
                    기술 활용이라는 두 가지 축을 중심으로 진행되었다. 우선, 최근
                    사용자 피드백 중 가장 빈번하게 등장한 문제로는 알림 기능의
                    과도한 반복성과 유저 몰입 부족이 있었다. 이에 따라 ‘상황
                    기반 맞춤 알림’ 기능이 제안되었으며, 이는 사용자의 위치,
                    시간대, 행동 패턴 등을 분석하여 적절한 시점에 유용한 알림을
                    제공하는 방식이다. 예를 들어, 사용자가 매일 저녁 8시에 정적
                    상태일 경우 “오늘 하루 정리해볼까요?”와 같은 제안을 자동으로
                    띄우는 구조다. 두 번째로 제안된 기능은 ‘AI 요약 피드’다.
                    사용자가 저장해 둔 텍스트, 음성 메모, 캘린더 일정 등을
                    자동으로 분석하여 하루에 한 번 요약 콘텐츠 형태로 제공하는
                    방식이며, 이는 Notion, Google Calendar와의 연동도 염두에
                    두고 있다. 이 기능은 특히 업무 생산성 앱 사용자층에게 유용할
                    것으로 예상된다. 세 번째로 논의된 기능은 회의나 일상 대화를
                    실시간으로 음성 인식(STT)하고 자동 요약하는 기능이었다.
                    Whisper API를 기반으로 한 초기 테스트 결과는 긍정적이었으며,
                    키워드 추출 및 자동 분류 기능까지 확장하는 방향으로 발전
                    가능성이 언급되었다. 기술적으로 가장 빠르게 프로토타입
                    구현이 가능한 기능은 위치 기반 알림으로 평가되었고, 다음
                    스프린트 내 MVP로 구현해보기로 합의되었다. AI 요약 피드는
                    데이터 처리 방식에 대한 추가 논의가 필요하며, 음성 기록
                    기능은 타사 STT 엔진 비교를 거친 후 방향을 결정하기로 했다.
                    이번 회의에서는 자사 앱의 차기 버전에 포함될 신규 기능에
                    대한 아이디어를 자유롭게 제안하고, 그 중 실현 가능한 기능을
                    선별하는 데 중점을 두었다. 주요 논의는 사용자 경험 개선과 AI
                    기술 활용이라는 두 가지 축을 중심으로 진행되었다. 우선, 최근
                    사용자 피드백 중 가장 빈번하게 등장한 문제로는 알림 기능의
                    과도한 반복성과 유저 몰입 부족이 있었다. 이에 따라 ‘상황
                    기반 맞춤 알림’ 기능이 제안되었으며, 이는 사용자의 위치,
                    시간대, 행동 패턴 등을 분석하여 적절한 시점에 유용한 알림을
                    제공하는 방식이다. 예를 들어, 사용자가 매일 저녁 8시에 정적
                    상태일 경우 “오늘 하루 정리해볼까요?”와 같은 제안을 자동으로
                    띄우는 구조다. 두 번째로 제안된 기능은 ‘AI 요약 피드’다.
                    사용자가 저장해 둔 텍스트, 음성 메모, 캘린더 일정 등을
                    자동으로 분석하여 하루에 한 번 요약 콘텐츠 형태로 제공하는
                    방식이며, 이는 Notion, Google Calendar와의 연동도 염두에
                    두고 있다. 이 기능은 특히 업무 생산성 앱 사용자층에게 유용할
                    것으로 예상된다. 세 번째로 논의된 기능은 회의나 일상 대화를
                    실시간으로 음성 인식(STT)하고 자동 요약하는 기능이었다.
                    Whisper API를 기반으로 한 초기 테스트 결과는 긍정적이었으며,
                    키워드 추출 및 자동 분류 기능까지 확장하는 방향으로 발전
                    가능성이 언급되었다. 기술적으로 가장 빠르게 프로토타입
                    구현이 가능한 기능은 위치 기반 알림으로 평가되었고, 다음
                    스프린트 내 MVP로 구현해보기로 합의되었다. AI 요약 피드는
                    데이터 처리 방식에 대한 추가 논의가 필요하며, 음성 기록
                    기능은 타사 STT 엔진 비교를 거친 후 방향을 결정하기로 했다.
                    이번 회의에서는 자사 앱의 차기 버전에 포함될 신규 기능에
                    대한 아이디어를 자유롭게 제안하고, 그 중 실현 가능한 기능을
                    선별하는 데 중점을 두었다. 주요 논의는 사용자 경험 개선과 AI
                    기술 활용이라는 두 가지 축을 중심으로 진행되었다. 우선, 최근
                    사용자 피드백 중 가장 빈번하게 등장한 문제로는 알림 기능의
                    과도한 반복성과 유저 몰입 부족이 있었다. 이에 따라 ‘상황
                    기반 맞춤 알림’ 기능이 제안되었으며, 이는 사용자의 위치,
                    시간대, 행동 패턴 등을 분석하여 적절한 시점에 유용한 알림을
                    제공하는 방식이다. 예를 들어, 사용자가 매일 저녁 8시에 정적
                    상태일 경우 “오늘 하루 정리해볼까요?”와 같은 제안을 자동으로
                    띄우는 구조다. 두 번째로 제안된 기능은 ‘AI 요약 피드’다.
                    사용자가 저장해 둔 텍스트, 음성 메모, 캘린더 일정 등을
                    자동으로 분석하여 하루에 한 번 요약 콘텐츠 형태로 제공하는
                    방식이며, 이는 Notion, Google Calendar와의 연동도 염두에
                    두고 있다. 이 기능은 특히 업무 생산성 앱 사용자층에게 유용할
                    것으로 예상된다. 세 번째로 논의된 기능은 회의나 일상 대화를
                    실시간으로 음성 인식(STT)하고 자동 요약하는 기능이었다.
                    Whisper API를 기반으로 한 초기 테스트 결과는 긍정적이었으며,
                    키워드 추출 및 자동 분류 기능까지 확장하는 방향으로 발전
                    가능성이 언급되었다. 기술적으로 가장 빠르게 프로토타입
                    구현이 가능한 기능은 위치 기반 알림으로 평가되었고, 다음
                    스프린트 내 MVP로 구현해보기로 합의되었다. AI 요약 피드는
                    데이터 처리 방식에 대한 추가 논의가 필요하며, 음성 기록
                    기능은 타사 STT 엔진 비교를 거친 후 방향을 결정하기로 했다.
                  </div>
                </div>
              </div>
            </div>
            <div className={s.mainContentListenBar}>
              <div className={s.AudioVisualizer}></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedContent;

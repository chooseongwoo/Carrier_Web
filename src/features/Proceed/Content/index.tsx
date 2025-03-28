import { useState } from 'react';
import * as s from './style.css';

const ProceedContent = () => {
  const [recordState, setRecordState] = useState(false);

  const handelRecordButtonClick = () => {
    setRecordState((prev) => !prev);
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
          <div className={s.recordButton}>
            <div className={s.recordButtonInner} />
          </div>
        </div>
      </div>

      <div className={s.mainContent({ isRecord: recordState })}>
        {recordState && <div className={s.animatedBg} />}
        {recordState ? (
          <div
            className={s.mainRecordButtonIconLayout}
            onClick={handelRecordButtonClick}
          >
            <div className={s.mainRecordButtonIcon} />
          </div>
        ) : (
          <div
            className={s.mainRecordButtonText}
            onClick={handelRecordButtonClick}
          >
            눌러서 녹음 시작
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedContent;

import * as s from './style.css';
import { useState } from 'react';

interface CheckModalProps {
  toggleCloseModal: () => void;
  verification: () => void;
  text: string;
  type: 'Logout' | 'Warning' | 'Secession';
}

const CheckModal = ({
  toggleCloseModal,
  verification,
  type,
  text,
}: CheckModalProps) => {
  const [secessionInput, setSecessionInput] = useState('');

  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        <p className={s.explainText}>{text}</p>

        {type === 'Secession' && (
          <div className={s.secessionInputContainer}>
            <input
              type="text"
              className={s.secessionInput}
              placeholder="계정 탈퇴"
              value={secessionInput}
              onChange={(e) => setSecessionInput(e.target.value)}
            />
          </div>
        )}

        <div className={s.buttons}>
          <div
            className={s.button({ type: 'cancel' })}
            onClick={toggleCloseModal}
          >
            취소
          </div>

          {type === 'Secession' ? (
            <div
              className={s.button({ type: 'leave' })}
              onClick={verification}
              style={{
                opacity: secessionInput === '계정 탈퇴' ? 1 : 0.5,
                pointerEvents: secessionInput === '계정 탈퇴' ? 'auto' : 'none',
              }}
            >
              계정 탈퇴
            </div>
          ) : type === 'Warning' ? (
            <div className={s.button({ type: 'leave' })} onClick={verification}>
              취소
            </div>
          ) : (
            <div className={s.button({ type: 'leave' })} onClick={verification}>
              로그아웃
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckModal;

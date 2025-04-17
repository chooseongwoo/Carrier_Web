import { useState } from 'react';
import * as s from './Modal.css';
import UnverifiedStep1 from './UnverifiedStep1.png';
import UnverifiedStep2 from './UnverifiedStep2.png';
import UnverifiedStep3 from './UnverifiedStep3.png';

interface ModalProps {
  onClose: (dontShowAgain: boolean) => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleComplete = () => {
    onClose(dontShowAgain);
  };

  return (
    <div className={s.container}>
      <div className={s.layout}>
        <div className={s.title}>구글폼 링크</div>
        <a
          className={s.formLink}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdC4d760e0XMEgM6zCR9Ib5Y-OT-36Lq-uIprtVo7dgkipAcg/viewform"
        >
          구글폼 링크
        </a>
      </div>

      <div className={s.layout}>
        <div className={s.title}>구글 로그인 문제 해결법</div>
        <div className={s.layout}>
          <div className={s.content}>
            <div className={s.subTitle}>Step1</div>
            <img src={UnverifiedStep1} className={s.Image} alt="" />
          </div>
          <div>
            <div className={s.subTitle}>Step2</div>
            <img src={UnverifiedStep2} className={s.Image} alt="" />
          </div>
          <div>
            <div className={s.subTitle}>Step3</div>
            <img src={UnverifiedStep3} className={s.Image} alt="" />
          </div>
        </div>

        <div className={s.buttons}>
          <div className={s.checkboxLayout}>
            <input
              type="checkbox"
              id="dontShowAgain"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            <label htmlFor="dontShowAgain">다시는 표시하지 않기</label>
          </div>
          <div className={s.button} onClick={handleComplete}>
            완료
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

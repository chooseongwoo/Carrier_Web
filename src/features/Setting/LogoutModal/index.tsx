import * as s from './style.css';

interface CheckModalProps {
  toggleCloseModal: () => void;
  verification: () => void;
  text: string;
}

const CheckModal = ({
  toggleCloseModal,
  verification,
  text,
}: CheckModalProps) => {
  return (
    <div className={s.container}>
      <div className={s.modalContent}>
        <p className={s.explainText}>{text}</p>
        <div className={s.buttons}>
          <div
            className={s.button({ type: 'cancel' })}
            onClick={toggleCloseModal}
          >
            취소
          </div>
          <div className={s.button({ type: 'leave' })} onClick={verification}>
            나가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckModal;

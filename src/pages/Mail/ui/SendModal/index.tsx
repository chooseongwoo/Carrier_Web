import { Sent, Cancel, Image, File } from 'pages/Mail/ui';
import * as s from './style.css';
import theme from 'shared/styles/theme.css';
// @ts-ignore
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const SendModal = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Cancel />
      </header>
      <div className={s.inputs}>
        <div className={s.inputContainer}>
          <p className={s.label}>받는사람:</p>
          <input type="emaill" className={s.input} />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>제목:</p>
          <input type="text" className={s.input} />
        </div>
        <ReactQuill theme="snow" />
      </div>
      <footer className={s.footer}>
        <div className={`${s.icon}`}>
          <Image />
        </div>
        <div className={`${s.icon}`}>
          <File />
        </div>
        <div className={`${s.icon} ${s.sent}`}>
          <Sent fill={theme.white} />
        </div>
      </footer>
    </div>
  );
};

export default SendModal;

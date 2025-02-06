import { Sent, Cancel, Image, File } from 'pages/Mail/ui';
import * as s from './style.css';
import theme from 'shared/styles/theme.css';
// @ts-ignore
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const SendModal = () => {
  const [content, setContent] = useState('');

  return (
    <div className={s.container}>
      <header className={s.header}>
        <button>
          <Cancel />
        </button>
      </header>

      <div className={s.inputs}>
        <div className={s.inputContainer}>
          <p className={s.label}>받는사람:</p>
          <input type="email" className={s.input} />
        </div>
        <div className={s.inputContainer}>
          <p className={s.label}>제목:</p>
          <input type="text" className={s.input} />
        </div>
      </div>
      <div className={s.editorContainer}>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className={s.editor}
        />
      </div>

      <footer className={s.footer}>
        <button className={s.icon}>
          <Image />
        </button>
        <button className={s.icon}>
          <File />
        </button>
        <button className={`${s.icon} ${s.sent}`}>
          <Sent fill={theme.white} />
        </button>
      </footer>
    </div>
  );
};

export default SendModal;

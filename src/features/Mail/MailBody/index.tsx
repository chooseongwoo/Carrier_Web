import { useEffect, useRef } from 'react';
import * as s from './style.css';

const MailBody = ({ htmlContent }: { htmlContent: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const shadowRoot = containerRef.current.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = htmlContent;
    }
  }, [htmlContent]);

  return <div ref={containerRef} className={s.mailBodyStyle} />;
};

export default MailBody;

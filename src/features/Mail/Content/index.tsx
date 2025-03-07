import { useMenuState } from 'features/Mail/hooks';
import { WriteIcon, Trash } from 'features/Mail/ui';
import * as s from './style.css';
import { useState } from 'react';
import { MailModalProps } from 'entities/mail/types/MailModalProps';
import theme from 'shared/styles/theme.css';
import { useAtom } from 'jotai';
import { mailsAtom } from 'features/Mail/contexts/mail';
import { useQuery } from '@tanstack/react-query';
import { mailQuery } from 'features/Mail/services/mail.query';
import MailBody from 'features/Mail/MailBody';
import { useHandleMailClick } from 'features/Mail/hooks/useHandleMailClick';

const Content = ({ toggleModalOpen }: MailModalProps) => {
  const [mails, setMails] = useAtom(mailsAtom);
  const { selectedMenu } = useMenuState();
  const [selectedMail, setSelectedMail] = useState('');
  const { data: selectedMailData } = useQuery({
    ...mailQuery.mailDetail(selectedMail),
    enabled: !!selectedMail,
  });
  const mailBody = selectedMailData?.body ?? '';
  const handleMailClick = useHandleMailClick(setSelectedMail, setMails);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.mailType}>
          {selectedMenu}
          <div className={s.subTitle}>4개의 메일, 1개 읽지 않음</div>
        </div>

        <div className={s.mailOption}>
          <div
            className={s.mailOption_addPlan}
            onClick={() => {
              toggleModalOpen?.('createSchedule');
            }}
          >
            일정으로 추가
          </div>
          <div
            className={s.mailOption_write}
            onClick={() => {
              toggleModalOpen?.('send');
            }}
          >
            <WriteIcon />
          </div>
          <div className={s.mailOption_delete}>
            <Trash color={theme.gray[600]} size={32} />
          </div>
        </div>
      </header>

      <main className={s.content}>
        <div className={s.content_list}>
          {mails.map((data) => (
            <div
              className={`${s.mailList_container} ${
                selectedMail === data.gmailId
                  ? s.mailList_container_selected
                  : ''
              }`}
              onClick={() => handleMailClick(data.gmailId, data.isRead)}
              key={data.gmailId}
            >
              {data.isRead ? '' : <div className={s.mailList_readState} />}
              <div className={s.mailList_header}>
                <div className={s.mailList_Sender}>{data.title}</div>
                <div
                  className={`${s.mailList_Date} ${
                    selectedMail === data.gmailId
                      ? s.mailList_container_selected
                      : ''
                  }`}
                >
                  {new Date(data.date).toLocaleDateString()}
                </div>
              </div>
              <div className={s.mailList_title}>{data.subject}</div>
              <div
                className={`${s.mailList_description} ${
                  selectedMail === data.gmailId
                    ? s.mailList_description_selected
                    : ''
                }`}
              >
                {data.preview}
              </div>
            </div>
          ))}
        </div>
        <div className={s.content_description}>
          {selectedMail !== '' && selectedMailData ? (
            <>
              <div className={s.description_header}>
                <div className={s.description_title}>
                  {selectedMailData.title}
                </div>
                <div className={s.description_info}>
                  <div className={s.description_sender}>
                    {selectedMailData.from}
                  </div>
                  <div className={s.description_Recipient}>
                    {selectedMailData.to} 에게
                  </div>
                </div>
              </div>
              <MailBody htmlContent={mailBody} />
            </>
          ) : (
            <div className={s.notSelected}>선택된 이메일 없음</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Content;

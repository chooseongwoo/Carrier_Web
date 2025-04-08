import { useMenuState } from 'features/Mail/hooks';
import * as s from './style.css';
import { useState } from 'react';
import { MailModalProps } from 'entities/mail/types/MailModalProps';
import theme from 'shared/styles/theme.css';
import { useAtom } from 'jotai';
import { mailsAtom, selectedMailIdAtom } from 'features/Mail/contexts/mail';
import { useQuery } from '@tanstack/react-query';
import { mailQuery } from 'features/Mail/services/mail.query';
import MailBody from 'features/Mail/MailBody';
import { useHandleMailClick } from 'features/Mail/hooks/useHandleMailClick';
import { useMailSummaryMutation } from 'features/Mail/services/mail.mutation';
import { DotLoader } from 'react-spinners';
import { formatEmailTime } from 'features/Mail/utils/formatEmailTime';

const Content = ({ toggleModalOpen }: MailModalProps) => {
  const [mails, setMails] = useAtom(mailsAtom);
  const { selectedMenu } = useMenuState();
  const [selectedMail, setSelectedMail] = useState('');
  const { data: selectedMailData } = useQuery({
    ...mailQuery.mailDetail(selectedMail),
    enabled: !!selectedMail,
  });
  const [, setSelectedMailId] = useAtom(selectedMailIdAtom);
  const mailBody = selectedMailData?.body ?? '';
  const handleMailClick = useHandleMailClick(setSelectedMail, setMails);
  const countOfUnread = mails.filter((mail) => !mail.isRead).length;
  const [mailSummary, setMailSummary] = useState({ gmailId: '', summary: '' });
  const { mutate: mailSummaryMutate } = useMailSummaryMutation();
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);

  const summaryText =
    selectedMailData?.summary ??
    (mailSummary?.gmailId === selectedMail ? mailSummary.summary : null);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.mailType}>
          {selectedMenu}
          <div className={s.subTitle}>
            {mails.length}개의 메일, {countOfUnread}개 읽지 않음
          </div>
        </div>

        <div className={s.mailOption}>
          {selectedMail && (
            <div className={s.mailOption}>
              <div
                className={s.mailOption_textButton}
                onClick={() => {
                  setSelectedMailId(selectedMail ?? '');
                  toggleModalOpen?.('createSchedule');
                }}
              >
                일정으로 추가
              </div>
              {selectedMailData?.summary === null && (
                <div
                  className={s.mailOption_textButton}
                  onClick={() => {
                    setIsSummaryLoading(true);
                    mailSummaryMutate(selectedMail, {
                      onSuccess: (response) => {
                        setMailSummary(response);
                        setIsSummaryLoading(false);
                      },
                    });
                  }}
                >
                  요약하기
                </div>
              )}
            </div>
          )}
          {/* <div
            className={s.mailOption_iconButton}
            onClick={() => {
              toggleModalOpen?.('send');
            }}
          >
            <WriteIcon />
          </div>
          <div className={s.mailOption_iconButton}>
            <Trash color={theme.gray[600]} size={32} />
          </div> */}
        </div>
      </header>

      <main className={s.content}>
        <div className={s.content_list}>
          {mails.length > 0 ? (
            mails.map((data) => (
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
                    {formatEmailTime(data.date)}
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
            ))
          ) : (
            <div className={s.listLoadingBox}>
              <DotLoader color={theme.blue[500]} />
            </div>
          )}
        </div>
        <div className={s.content_detail}>
          {selectedMail !== '' && selectedMailData ? (
            <div className={s.detailContainer}>
              <div className={s.detail_header}>
                <div className={s.detail_title}>{selectedMailData.title}</div>
                <div className={s.detail_info}>
                  <div className={s.detail_sender}>{selectedMailData.from}</div>
                  <div className={s.detail_Recipient}>
                    {selectedMailData.to} 에게
                  </div>
                </div>
              </div>
              {isSummaryLoading && (
                <div className={s.summaryLoadingBox}>
                  <DotLoader color={theme.blue[500]} size={20} />
                </div>
              )}
              {summaryText && !isSummaryLoading && (
                <div className={s.summaryContainer}>
                  <div className={s.hrLine} />
                  <p className={s.summaryTitle}>본문 요약됨</p>
                  <p className={s.summaryDesc}>{summaryText}</p>
                </div>
              )}
              <div className={s.hrLine} />
              {mailBody && <MailBody htmlContent={mailBody} />}
            </div>
          ) : (
            <div className={s.notSelected}>선택된 이메일 없음</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Content;

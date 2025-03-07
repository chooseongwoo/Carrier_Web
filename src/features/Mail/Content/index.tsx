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
  const countOfUnread = mails.filter((mail) => !mail.isRead).length;

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
              <div className={s.hrLine} />
              <div className={s.summaryContainer}>
                <p className={s.summaryTitle}>본문 요약됨</p>
                <p className={s.summaryDesc}>
                  김민수 팀장님, 안녕하세요. 이번 주 금요일 오후 3시에 예정된
                  마케팅 전략 회의를 주요 참석자 일정 조율을 위해 다음 주 월요일
                  오전 10시로 변경하고자 합니다. 변경이 가능하신지 확인
                  부탁드리며, 어려우시면 가능한 일정 공유 부탁드립니다.
                  감사합니다.
                </p>
              </div>
              <div className={s.hrLine} />
              <MailBody htmlContent={mailBody} />
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

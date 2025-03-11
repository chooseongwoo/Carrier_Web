import * as s from './style.css';
import { EmojiIcon } from 'features/diary/ui';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDiaryListQuery } from '../services/diary.query.ts';
import { useDiaryAddMutation } from '../services/diary.mutation.ts';

const Content = () => {
  const [title, setTitle] = useState('제목ex');
  const [content, setContent] = useState('내용ex');
  const [emoji, setEmoji] = useState('😍');
  const startDateTime = '2025-02-21T12:00:00'; // 일기 조회 리스트 api
  const endDateTime = '2025-03-21T12:00:00';
  const { data: diaryListData } = useQuery({
    ...useDiaryListQuery.getDiaryList(startDateTime, endDateTime),
  });
  const { mutate: addDiaryMutate } = useDiaryAddMutation();

  const onAddDiaryBtnClick = () => {
    const addDiaryBody = {
      title: title,
      content: content,
      emoji: emoji,
    };

    addDiaryMutate(addDiaryBody);
  };

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <input
          className={s.titleText}
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={s.mainContainer}>
        <div className={s.writeContainer}>
          <div className={s.emojiPicker}>
            <EmojiIcon />
            <div className={s.emojiPickerText}>감정 추가</div>
          </div>
          <textarea
            className={s.textBox}
            placeholder="오늘 하루는 어땠나요?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className={s.saveDiaryBtn} onClick={onAddDiaryBtnClick}>
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default Content;

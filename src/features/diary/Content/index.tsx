import * as s from './style.css';
import { EmojiIcon } from 'features/diary/ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDiaryAddMutation } from 'features/diary/services/diary.mutation.ts';
import EmojiPicker from 'emoji-picker-react';
import { emojiPickerCategories } from 'features/diary/constants/emojiCategories.ts';

interface ContentProps {
  setSelectedDiaryId: Dispatch<SetStateAction<number | null>>;
}

const Content = ({ setSelectedDiaryId }: ContentProps) => {
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [diary, setDiary] = useState({ title: '', content: '', emoji: '' });
  const [isDiaryFormValid, setIsDiaryFromValid] = useState(false);
  const { mutate: addDiaryMutate } = useDiaryAddMutation(setSelectedDiaryId);

  useEffect(() => {
    setIsDiaryFromValid(!!(diary.title && diary.content && diary.emoji));
  }, [diary.title, diary.content, diary.emoji]);

  const onAddDiaryBtnClick = () => {
    if (isDiaryFormValid) {
      addDiaryMutate(diary);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <input
          className={s.titleText}
          placeholder="제목을 입력해주세요."
          value={diary.title}
          onChange={(e) =>
            setDiary((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className={s.mainContainer}>
        <div className={s.writeContainer}>
          <div className={s.emojiContainer}>
            <div
              className={s.emojiPicker}
              onClick={() => setIsEmojiClicked((prev) => !prev)}
            >
              {diary.emoji ? (
                <div className={s.emojiTextLayout}>
                  <p className={s.emojiText}>{diary.emoji}</p>
                </div>
              ) : (
                <div className={s.emojiCircle}>
                  <EmojiIcon />
                  <div className={s.emojiPickerText}>감정 추가</div>
                </div>
              )}
            </div>
            <div className={s.emojiPickerContainer}>
              <div className={s.emojiPickerWrapper}>
                <EmojiPicker
                  open={isEmojiClicked}
                  height={'100%'}
                  searchPlaceholder="검색어 입력..."
                  previewConfig={{
                    defaultCaption: '기분을 선택해주세요!',
                    showPreview: true,
                  }}
                  categories={emojiPickerCategories}
                  onEmojiClick={(emojiObject) => {
                    setDiary((prev) => ({ ...prev, emoji: emojiObject.emoji }));
                    setIsEmojiClicked(false);
                  }}
                />
              </div>
            </div>
          </div>
          <textarea
            className={s.textBox}
            placeholder="오늘 하루는 어땠나요?"
            value={diary.content}
            onChange={(e) =>
              setDiary((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>
        <button
          className={s.saveDiaryBtn({ isWrite: isDiaryFormValid })}
          onClick={onAddDiaryBtnClick}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default Content;

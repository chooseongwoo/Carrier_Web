import * as s from './style.css';
import { EmojiIcon } from 'features/diary/ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDiaryAddMutation } from '../services/diary.mutation.ts';
import EmojiPicker, { Categories } from 'emoji-picker-react';
import { useQueryClient } from '@tanstack/react-query';
import { useDiaryData } from '../../../shared/hooks/useDiaryData.ts';
import { diaryKeys } from '../services/diary.keys.ts';

interface ContentProps {
  setIsTodayDiaryExist: Dispatch<SetStateAction<boolean>>;
}

const Content = ({ setIsTodayDiaryExist }: ContentProps) => {
  const queryClient = useQueryClient();
  const emojiPickerCategories = [
    { category: Categories.SUGGESTED, name: '자주 사용한 이모지' },
    { category: Categories.SMILEYS_PEOPLE, name: '스마일 & 사람' },
    { category: Categories.ANIMALS_NATURE, name: '동물 & 자연' },
    { category: Categories.FOOD_DRINK, name: '음식 & 음료' },
    { category: Categories.TRAVEL_PLACES, name: '여행 & 장소' },
    { category: Categories.ACTIVITIES, name: '활동' },
    { category: Categories.OBJECTS, name: '사물' },
    { category: Categories.SYMBOLS, name: '기호' },
    { category: Categories.FLAGS, name: '국기' },
  ];
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [emoji, setEmoji] = useState('');
  const [isDiaryFormValid, setIsDiaryFromValid] = useState(false);
  const { mutate: addDiaryMutate } = useDiaryAddMutation();
  const { startDateTime, endDateTime } = useDiaryData();

  useEffect(() => {
    if (title && content && emoji) {
      setIsDiaryFromValid(true);
    } else {
      setIsDiaryFromValid(false);
    }
  }, [title, content, emoji]);

  const onAddDiaryBtnClick = () => {
    if (isDiaryFormValid) {
      const addDiaryBody = {
        title: title,
        content: content,
        emoji: emoji,
      };

      addDiaryMutate(addDiaryBody, {
        onSuccess: () => {
          setIsTodayDiaryExist(true);
          queryClient.invalidateQueries({
            queryKey: [diaryKeys.DIARY_LIST, startDateTime, endDateTime],
          });
        },
        onError: (error) => {
          alert(`일기 저장에 실패했습니다: ${error.message}`);
        },
      });
    }
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
          <div className={s.emojiContainer}>
            <div
              className={s.emojiPicker}
              onClick={() => setIsEmojiClicked((prev) => !prev)}
            >
              {emoji ? (
                <div className={s.emojiTextLayout}>
                  <p className={s.emojiText}>{emoji}</p>
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
                    setEmoji(emojiObject.emoji);
                    setIsEmojiClicked(false);
                  }}
                />
              </div>
            </div>
          </div>
          <textarea
            className={s.textBox}
            placeholder="오늘 하루는 어땠나요?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

import * as s from './style.css';
import { EmojiIcon } from 'features/diary/ui';
import { useState } from 'react';
import { useDiaryAddMutation } from '../services/diary.mutation.ts';
import EmojiPicker, { Categories } from 'emoji-picker-react';

const Content = () => {
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
  const { mutate: addDiaryMutate } = useDiaryAddMutation();

  // useEffect(() => {
  //
  // },[title, content, emoji])

  const onAddDiaryBtnClick = () => {
    if (title && content && emoji) {
      const addDiaryBody = {
        title: title,
        content: content,
        emoji: emoji,
      };

      addDiaryMutate(addDiaryBody);
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
        <button className={s.saveDiaryBtn} onClick={onAddDiaryBtnClick}>
          작성 완료
        </button>
      </div>
    </div>
  );
};

export default Content;

import * as s from './style.css';
import { BtnCategoryPlus, BtnCategoryItem } from 'features/Home/ui';

const Category = () => {
  return (
    <div className={s.CategoryContainer}>
      <div className={s.CategoryHeader}>
        <div className={s.CategoryTitle}>카테고리</div>
        <div className={s.CategoryPlusBtn}>
          <BtnCategoryPlus />
        </div>
      </div>
      <div className={s.CategoryItemContainer}>
        <div className={s.CategoryItem}>
          <BtnCategoryItem />
          <div className={s.CategoryItemTitle}>나의 일정</div>
        </div>
        <div className={s.CategoryItem}>
          <BtnCategoryItem initialBgColor="#15A665" />
          <div className={s.CategoryItemTitle}>게임</div>
        </div>
        <div className={s.CategoryItem}>
          <BtnCategoryItem initialBgColor="#F4B224" />
          <div className={s.CategoryItemTitle}>카테고리</div>
        </div>
        <div className={s.CategoryItem}>
          <button className={s.BtnCategoryItemStatic} />
          <div className={s.CategoryItemTitle}>대한민국 공휴일</div>
        </div>
      </div>
    </div>
  );
};

export default Category;

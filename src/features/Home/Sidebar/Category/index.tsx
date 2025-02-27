import { useEffect, useState } from 'react';
import * as s from './style.css';
import { CategoryPlusIcon, CategoryItemIcon } from 'features/Home/ui';
import { useQueryClient } from '@tanstack/react-query';
import { categoryQuery } from 'features/Home/services/Home.query';

/* eslint-disable no-console */

const Category = () => {
  const queryClient = useQueryClient();
  const [categoryDate, setCategoryDate] = useState<
    { id: number; name: string; color: string; active: boolean }[]
  >([]);

  useEffect(() => {
    try {
      const fetchCategory = async () => {
        const data = await queryClient.fetchQuery(
          categoryQuery.getCategories()
        );
        setCategoryDate(data);
      };
      fetchCategory();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }, [queryClient]);

  return (
    <div className={s.CategoryContainer}>
      <div className={s.CategoryHeader}>
        <div className={s.CategoryTitle}>카테고리</div>
        <div className={s.CategoryPlusBtn}>
          <CategoryPlusIcon />
        </div>
      </div>
      <div className={s.CategoryItemContainer}>
        {categoryDate?.map(
          (category: {
            id: number;
            name: string;
            color: string;
            active: boolean;
          }) => (
            <div className={s.CategoryItem} key={category.id}>
              <CategoryItemIcon
                initialBgColor={category.color}
                activeState={category.active}
                id={category.id}
              />
              <div className={s.CategoryItemTitle}>{category.name}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Category;

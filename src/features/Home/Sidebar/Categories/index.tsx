import { useEffect, useState } from 'react';
import * as s from './style.css';
import { CategoryPlusIcon, CategoryItemIcon } from 'features/Home/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateCategoryMutation } from 'features/Home/services/home.mutation';
import { useCategoryListQuery } from 'features/Home/services/home.query';
import type { Category } from 'entities/calendar/type';

/* eslint-disable no-console */

const CATEGORY_COLORS = [
  'RED',
  'GREEN',
  'BLUE',
  'PURPLE',
  'BROWN',
  'ROSE',
] as const;

const Categories = () => {
  const { mutate: createCategoryMutate } = useCreateCategoryMutation();
  const queryClient = useQueryClient();
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>('카테고리');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchCategory = async () => {
        const data = await queryClient.fetchQuery(
          useCategoryListQuery.getCategoryList()
        );
        setCategoryData(data);
      };
      fetchCategory();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }, [queryClient]);

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newCategoryColor =
        CATEGORY_COLORS[categoryData.length % CATEGORY_COLORS.length];

      const newCategory: Category = {
        id: categoryData.length + 1,
        name: newCategoryName,
        color: newCategoryColor,
        active: true,
      };

      setCategoryData([...categoryData, newCategory]);
      createCategoryMutate({ name: newCategoryName, color: newCategoryColor });

      setNewCategoryName('카테고리');
      setModalOpen(false);
    }
  };

  return (
    <div className={s.categoryContainer}>
      <div className={s.categoryHeader}>
        <div className={s.categoryTitle}>카테고리</div>
        <div
          className={s.categoryPlusBtn}
          onClick={() => setModalOpen(!isModalOpen)}
        >
          <CategoryPlusIcon />
        </div>
      </div>
      <div className={s.categoryItemContainer}>
        {categoryData?.map((category) => (
          <div className={s.categoryItem} key={category.id}>
            <CategoryItemIcon
              initialBgColor={category.color}
              activeState={category.active}
              id={category.id}
            />
            <div className={s.categoryItemTitle}>{category.name}</div>
          </div>
        ))}
        {isModalOpen && (
          <div className={`${s.categoryNewItem} ${s.categoryItem}`}>
            <CategoryItemIcon
              initialBgColor={CATEGORY_COLORS[categoryData.length]}
              activeState={true}
            />
            <div className={s.categoryItemTitle}>
              <input
                className={`${s.categoryItemTitle} ${s.categoryNewItemInput}`}
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.currentTarget.value)}
                onKeyDown={(e) => activeEnter(e)}
                autoFocus
                onFocus={(e) => e.target.select()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

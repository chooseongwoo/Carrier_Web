import { useEffect, useState } from 'react';
import * as s from './style.css';
import { CategoryPlusIcon, CategoryItemIcon } from 'features/Home/ui';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateCategoryMutation } from 'features/Home/services/home.mutation';
import { useCategoryListQuery } from 'features/Home/services/home.query';

/* eslint-disable no-console */

const CATEGORY_COLORS = [
  'RED',
  'GREEN',
  'BLUE',
  'PURPLE',
  'BROWN',
  'ROSE',
] as const;

const Category = () => {
  const { mutate } = useCreateCategoryMutation();
  const queryClient = useQueryClient();
  const [categoryData, setCategoryData] = useState<
    { id: number; name: string; color: string; active: boolean }[]
  >([]);
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
  }, [queryClient, mutate]);

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCategoryData([
        ...categoryData,
        {
          id: categoryData.length + 1,
          name: newCategoryName,
          color: CategoryColor[categoryData.length % CategoryColor.length],
          active: true,
        },
      ]);
      mutate({
        name: newCategoryName,
        color: CategoryColor[categoryData.length % CategoryColor.length],
      });
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
        {categoryData?.map(
          (category: {
            id: number;
            name: string;
            color: string;
            active: boolean;
          }) => (
            <div className={s.categoryItem} key={category.id}>
              <CategoryItemIcon
                initialBgColor={category.color}
                activeState={category.active}
                id={category.id}
              />
              <div className={s.categoryItemTitle}>{category.name}</div>
            </div>
          )
        )}
        {isModalOpen && (
          <div className={`${s.categoryNewItem} ${s.categoryItem}`}>
            <CategoryItemIcon
              initialBgColor={CategoryColor[categoryData.length]}
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

export default Category;

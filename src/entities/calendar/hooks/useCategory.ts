import { useQuery } from '@tanstack/react-query';
import { useSetAtom, useAtomValue } from 'jotai';
import { useCategoryListQuery } from 'features/Home/services/home.query';
import { categoriesAtom } from '../contexts/category';

export const useCategoryList = () => {
  const setCategories = useSetAtom(categoriesAtom);

  const query = useQuery(useCategoryListQuery.getCategoryList());

  if (query.data) {
    setCategories(query.data);
  }

  return query;
};

export const useCategories = () => useAtomValue(categoriesAtom);

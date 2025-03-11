import { useQuery } from '@tanstack/react-query';
import { useSetAtom, useAtomValue } from 'jotai';
import { useCategoryListQuery } from 'features/Home/services/home.query';
import { categoriesAtom } from '../contexts/category';
import { useEffect } from 'react';

export const useCategoryList = () => {
  const setCategories = useSetAtom(categoriesAtom);

  const query = useQuery(useCategoryListQuery.getCategoryList());

  useEffect(() => {
    if (query.data) {
      setCategories(query.data);
    }
  }, [query.data, setCategories]);

  return query;
};

export const useCategories = () => useAtomValue(categoriesAtom);

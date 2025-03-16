import { useEffect, useMemo, useState } from 'react';
import { NowDatePeriod } from 'shared/lib/date';
import { useQuery } from '@tanstack/react-query';
import { useDiaryQuery } from '../../features/diary/services/diary.query.ts';

export const getWeekDays = (currentDate: string) => {
  const dateObj = new Date(currentDate.replace(/\./g, '-'));
  const dayOfWeek = dateObj.getDay();
  const startOfWeek = new Date(dateObj);
  startOfWeek.setDate(dateObj.getDate() - dayOfWeek);

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day.toISOString().split('T')[0].replace(/-/g, '.');
  });
};

export const useDiaryData = () => {
  const [currentDate, setCurrentDate] = useState(NowDatePeriod);
  const days = useMemo(() => getWeekDays(currentDate), [currentDate]);
  const startDateTime = `${days[0].replace(/\./g, '-')}T00:00:00`;
  const endDateTime = `${days[6].replace(/\./g, '-')}T23:59:59`;

  const diaryQueryOptions = useDiaryQuery.getDiaryList(
    startDateTime,
    endDateTime
  );

  const { data: diaryListData, refetch } = useQuery({
    queryKey: ['diaryList', currentDate],
    queryFn: diaryQueryOptions?.queryFn ?? (() => Promise.resolve([])),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    refetch();
  }, [currentDate]);

  return {
    currentDate,
    setCurrentDate,
    days,
    diaryListData,
    refetch,
  };
};

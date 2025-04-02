export const formatEmailTime = (isoString: string): string => {
  const now = new Date();
  const inputDate = new Date(isoString);

  const isSameDay = now.toDateString() === inputDate.toDateString();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = yesterday.toDateString() === inputDate.toDateString();

  if (isSameDay) {
    const diff = Math.floor((now.getTime() - inputDate.getTime()) / 1000); // 초 단위

    if (diff < 60) {
      return `${diff}초 전`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}분 전`;
    } else {
      const hours = Math.floor(diff / 3600);
      return `${hours}시간 전`;
    }
  }

  if (isYesterday) {
    return '어제';
  }

  return inputDate.toISOString().split('T')[0];
};

const today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);

export const NowDateDash = year + '-' + month + '-' + day;

export const NowDatePeriod = year + '.' + month + '.' + day;

export const formatDateToPeriod = (date: Date): string => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}.${month}.${day}`;
};

export const getNextDate = (dateStr: string, days: number = 1): string => {
  const date = new Date(dateStr.replace(/\./g, '-'));
  date.setDate(date.getDate() + days);
  return formatDateToPeriod(date);
};

export const getPrevDate = (dateStr: string, days: number = 1): string => {
  const date = new Date(dateStr.replace(/\./g, '-'));
  date.setDate(date.getDate() - days);
  return formatDateToPeriod(date);
};

export const ChangeDateToDash = (dateStr: string): string => {
  const date = new Date(dateStr.replace(/\./g, '-'));
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

export const parseDateString = (dateStr: string): Date => {
  return new Date(dateStr.replace(/\./g, '-'));
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export const toISOStringKST = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

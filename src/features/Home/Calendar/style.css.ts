import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const CalendarContainer = style({
  width: '1500px',
  height: '100vh',
});

export const CalendarHeaderContainer = style({
  display: 'inline-flex',
  padding: '18px 16px 17px 0px',
  alignItems: 'center',
  gap: '780px',
  height: '80px',
});

export const CalendarHeaderMain = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const CalendarHeaderPlusBtn = style({
  display: 'flex',
  width: '60px',
  height: '36px',
  padding: '5px 17px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: theme.white,
});

export const CalendarHeaderSub = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const CalendarHeaderBtnLayout = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});
export const CalendarHeaderTodayBtn = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.p1,
  whiteSpace: 'nowrap',
});

export const CalendarTitleYear = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.H2,
  fontWeight: '400',
  whiteSpace: 'nowrap',
});
export const CalendarTitleMonth = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.H2,
  fontWeight: '600',
  whiteSpace: 'nowrap',
});

export const CalendarSearchBar = style({
  display: 'flex',
  width: '378px',
  height: '40px',
  padding: '7px 306px 7px 12px',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '8px',
  border: `1px solid ${theme.gray[100]}`,
  backgroundColor: theme.white,
});
export const CalendarSearchPlaceholder = style({
  color: theme.gray[400],
  ...font.p2,
  whiteSpace: 'nowrap',
});
export const CalendarSearchText = style({
  color: theme.black,
  ...font.p2,
  whiteSpace: 'nowrap',
});

export const CalendarGridContainer = style({
  display: 'flex',
  width: '1484px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  borderRadius: '20px 20px 0px 0px',
  borderTop: `2px solid ${theme.gray[100]}`,
  borderRight: `2px solid ${theme.gray[100]}`,
  borderLeft: `2px solid ${theme.gray[100]}`,
});

export const CalendarWeekContainer = style({
  display: 'flex',
  height: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.gray[100]}`,
});

export const CalendarWeek = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 0 0',
});

export const CalendarWeekText = style({
  color: theme.black,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  ...font.p1,
});

export const CalendarCellContainer = style({
  display: 'flex',
  width: '1484px',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const CalendarCell = style({
  display: 'flex',
  height: '192px',
  padding: '4px 175px 157px 4px',
  alignItems: 'center',
  flex: '1 0 0',
  borderRight: `1px solid ${theme.gray[100]}`,
  borderBottom: `1px solid ${theme.gray[100]}`,
  backgroundColor: theme.white,
});

export const CalendarCellDay = style({
  display: 'flex',
  width: '33px',
  height: '31px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: theme.white,
});

export const CalendarCellDayText = style({
  color: theme.black,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  ...font.p1,
});

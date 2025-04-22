import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

const CategoryColors = {
  RED: { color: '#EE3A3A', background: '#FFDDDD' },
  GREEN: { color: '#15A665', background: '#DBF4E9' },
  BLUE: { color: '#2E5EFC', background: '#F3F6FF' },
  PURPLE: { color: '#B14FDE', background: '#F7E7FF' },
  BROWN: { color: '#B26C1B', background: '#FBEEDF' },
  ROSE: { color: '#D63881', background: '#FFECF5' },
};

const scheduleContainerBase = style({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  flexShrink: '0',
  borderRadius: '5px',
  padding: '0 8px',
});

export const calendarContainer = style({
  width: 'calc(100vw - 440px)',
  height: '100vh',
});

export const calendarHeaderContainer = style({
  display: 'inline-flex',
  padding: '18px 16px 17px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '80px',
});

export const calendarHeaderMain = style({
  display: 'flex',
  alignItems: 'center',
  height: '80x',
  gap: '8px',
});

export const calendarHeaderPlusBtn = style({
  position: 'relative',
  display: 'flex',
  width: '60px',
  height: '36px',
  padding: '5px 17px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: theme.white,
});

export const calendarHeaderSub = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const calendarHeaderBtnLayout = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const calendarHeaderBtn = style({
  width: '26px',
  height: '26px',
  color: theme.black,
});
export const calendarHeaderTodayBtn = style({
  color: theme.black,
  ...font.p1,
  cursor: 'pointer',
  userSelect: 'none',
});

export const calendarTitle = style({
  display: 'flex',
  gap: '6px',
});

export const calendarTitleYear = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.H2,
  fontWeight: '400',
});
export const calendarTitleMonth = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.H2,
  fontWeight: '600',
});

export const calendarSearchBar = style({
  display: 'flex',
  width: '378px',
  height: '40px',
  padding: '7px 0px 7px 12px',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '8px',
  border: `1px solid ${theme.gray[100]}`,
  backgroundColor: theme.white,
});

export const calendarSearchText = style({
  color: theme.black,
  ...font.p2,
  width: '100%',
  '::placeholder': {
    color: theme.gray[400],
  },
});

export const calendarScheduleContainer = styleVariants(
  CategoryColors,
  (category) => [
    scheduleContainerBase,
    {
      color: category.color,
      borderLeft: `5px solid ${category.color}`,
      background: category.background,
    },
  ]
);

export const calendarScheduleText = style({
  ...font.p2,
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const calendarTodoContainer = style({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  color: theme.black,
  minWidth: 0,
});

export const calendarTodoText = recipe({
  base: {
    flex: 1,
    ...font.p2,
    overflow: 'hidden',
    position: 'relative',
    paddingLeft: '0.8em',
    width: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    selectors: {
      '&::before': {
        content: '"•"',
        fontSize: '1.2em',
        color: theme.black,
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
  },
  variants: {
    isDone: {
      true: {
        textDecoration: 'line-through',
      },
      false: {},
    },
  },
  defaultVariants: {
    isDone: false,
  },
});

globalStyle(`${calendarContainer} .fc-theme-standard .fc-scrollgrid`, {
  borderRadius: '20px 20px 0px 0px',
  borderTop: `1px solid ${theme.gray[100]}`,
  borderRight: `2px solid ${theme.gray[100]}`,
  borderLeft: `2px solid ${theme.gray[100]}`,
});

globalStyle(`${calendarContainer} .fc-col-header`, {
  borderBottom: `1px solid ${theme.gray[100]}`,
});

globalStyle(`${calendarContainer} .fc .fc-toolbar.fc-header-toolbar`, {
  margin: '0',
});

globalStyle(
  `${calendarContainer} .fc-theme-standard td, .fc-theme-standard th`,
  {
    borderRight: `1px solid ${theme.gray[100]}`,
    borderBottom: `1px solid ${theme.gray[100]}`,
  }
);

globalStyle(`${calendarContainer} .fc .fc-daygrid-day-top`, {
  display: 'flex',
  flexDirection: 'row',
});

globalStyle(`${calendarContainer} .fc-day-sun`, {
  color: 'red',
});

globalStyle(`${calendarContainer} .fc-day`, {
  fontFamily: 'Pretendard',
  ...font.p1,
});

globalStyle(`${calendarContainer} .fc .fc-daygrid-day-frame`, {
  minHeight: '100%',
  position: 'relative',
  maxHeight: '80px',
});

globalStyle(`${calendarContainer} .fc .fc-col-header-cell-cushion`, {
  fontFamily: 'Pretendard',
  ...font.p1,
});

globalStyle(`${calendarContainer} .fc .fc-daygrid-day-number`, {
  padding: '4px',
  position: 'relative',
  zIndex: '4',
});

globalStyle(`${calendarContainer} .fc-popover-header`, {
  visibility: 'hidden',
});

globalStyle(`${calendarContainer} .fc .fc-popover`, {
  boxShadow: 'none',
  zIndex: '1',
});

globalStyle(`${calendarContainer} .fc .fc-more-popover .fc-popover-body`, {
  padding: '20px 16px',
  gap: '4px',
  position: 'absolute',
  borderRadius: '8px',
  backgroundColor: theme.white,
  boxShadow: '0px 4px 32px 0px rgba(92, 92, 92, 0.25)',
});

globalStyle(`${calendarContainer} .fc .fc-daygrid-event-harness`, {
  marginBottom: '4px',
});

globalStyle(`${calendarContainer} .fc-direction-ltr .fc-daygrid-more-link`, {
  float: 'none',
});

globalStyle(`${calendarContainer} .fc-daygrid-day-events`, {
  marginTop: '14px',
  minHeight: '100px',
});

globalStyle(`${calendarContainer} .fc .fc-daygrid-more-link`, {
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  position: 'absolute',
  bottom: '4',
  left: '0',
  right: '0',
  width: '100%',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: theme.gray[50],
  borderLeft: `5px solid ${theme.gray[500]}`,
  padding: '0 8px',
  color: theme.gray[500],
  ...font.p2,
});

globalStyle(
  `${calendarContainer} .fc-day-today .fc-daygrid-day-top .fc-daygrid-day-number`,
  {
    borderRadius: '8px',
    top: '4px',
    left: '4px',
    backgroundColor: theme.blue[400],
    color: theme.white,
  }
);

globalStyle(
  `${calendarContainer} .fc-scrollgrid-section.fc-scrollgrid-section-header > th`,
  {
    border: 'none',
  }
);

globalStyle(
  `${calendarContainer} .fc-scrollgrid-section.fc-scrollgrid-section-body.fc-scrollgrid-section-liquid > td`,
  {
    border: 'none',
  }
);

globalStyle(
  `${calendarContainer} .fc-event-main, ${calendarContainer} .fc-daygrid-more-link`,
  {
    height: '25px',
  }
);

globalStyle(`${calendarContainer} .fc-daygrid-day-number`, {
  width: '28px',
  height: '28px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

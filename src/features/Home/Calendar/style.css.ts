import { globalStyle, style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const CalendarContainer = style({
  width: 'calc(100vw - 420px)',
  height: '100vh',
});

export const container = style({
  display: 'flex',
  width: '100vw',
  height: '100vh',
});

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  width: '58vw',
  height: '100%',
  borderLeft: `1px solid ${theme.gray[100]}`,
  borderRight: `1px solid ${theme.gray[100]}`,
});

export const arrows = style({
  width: '100%',
  justifyContent: 'flex-end',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 8px 0',
  cursor: 'pointer',
});

export const reverseArrow = style({
  display: 'flex',
  alignItems: 'center',
  transform: 'rotate(-180deg)',
});

export const eventWrapper = style({
  width: '100%',
  padding: '2px',
  display: 'flex',
  border: 'none',
  gap: '3px',
});

export const eventStick = style({
  width: '3px',
  height: '15px',
  borderRadius: '4px',
  margin: '2px',
});

export const eventTitle = style({
  ...font.caption,
});

export const right = style({
  width: 'calc(42vw - 279px)',
  background: theme.white,
  borderLeft: `1px solid ${theme.gray[100]}`,
});

export const searchTab = style({
  padding: '12px',
});

export const searchBar = style({
  padding: '5px 12px',
  width: '100%',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const searchInput = style({
  width: '100%',
  ...font.p3,
  color: theme.black,
  '::placeholder': {
    color: theme.gray[400],
  },
});

export const addEventTab = style({
  padding: '136px 12px 0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const titleInput = style({
  padding: '9px 12px',
  width: '100%',
  ...font.p2,
  color: theme.black,
  '::placeholder': {
    color: theme.gray[400],
  },
  borderBottom: `1px solid ${theme.gray[200]}`,
});

export const dates = style({
  marginTop: '4px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const dateBox = style({
  paddingLeft: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const selects = style({
  display: 'flex',
  gap: '8px',
});

export const selectDate = style({
  width: '150px',
  padding: '6px 12px',
  background: theme.gray[50],
  borderRadius: '4px',
  ...font.p3,
  color: theme.black,
});

export const selectTime = style({
  width: '88px',
  padding: '6px 12px',
  background: theme.gray[50],
  borderRadius: '4px',
  ...font.p3,
  color: theme.black,
});

export const eventText = style({
  ...font.p3,
  color: theme.black,
});

export const allDay = style({
  paddingLeft: '12px',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const allDayBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px',
  padding: '2px',
  borderRadius: '4px',
});

export const tagBox = style({
  position: 'relative',
  width: '100%',
  padding: '5px 12px',
  cursor: 'pointer',
});

export const tagLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const tagLine = style({
  width: '1px',
  height: '26px',
  background: theme.gray[200],
});

export const hr = style({
  width: '100%',
  height: '1px',
  background: theme.gray[200],
  marginTop: '6px',
});

export const memo = style({
  padding: '12px',
  ...font.p3,
  color: theme.black,
  '::placeholder': {
    color: theme.gray[400],
  },
});

globalStyle('.fc-toolbar-title', {
  paddingLeft: '20px',
  color: theme.black,
  fontWeight: '400',
  fontSize: '28px',
});

globalStyle('.fc-theme-standard .fc-scrollgrid', {
  border: 'none',
});

globalStyle('.fc-theme-standard th', {
  border: 'none',
});

globalStyle('.fc-col-header', {
  borderBottom: `1px solid ${theme.gray[100]}`,
});

globalStyle('.fc-theme-standard td', {
  border: `1px solid ${theme.gray[100]}`,
});

globalStyle('.fc .fc-highlight', {
  background: theme.gray[50],
});

globalStyle('.fc-theme-standard td:last-child', {
  borderRight: 'none',
});

globalStyle('.fc-col-header-cell', {
  color: theme.gray[500],
  ...font.caption,
});

globalStyle('.fc-col-header-cell.fc-day-sun', {
  color: theme.red[100],
});

globalStyle('.fc .fc-daygrid-day-number', {
  padding: '2px 8px',
  color: theme.black,
  ...font.caption,
});

globalStyle('.fc .fc-daygrid-day.fc-day-today', {
  backgroundColor: theme.white,
});

globalStyle('.fc-daygrid-event', {
  borderRadius: '4px',
});

globalStyle('.fc-daygrid-day', {
  height: '143.8px',
});

globalStyle('.fc .fc-daygrid-day-events', {
  padding: '0 8px',
  marginTop: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

globalStyle('.fc .fc-daygrid-more-link', {
  width: '100%',
  textAlign: 'center',
  ...font.caption,
  color: theme.gray[400],
});

globalStyle('.fc .fc-daygrid-more-link:hover', {
  background: 'none',
});

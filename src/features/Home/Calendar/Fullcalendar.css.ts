import { globalStyle } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

globalStyle('.fc *', {});
globalStyle('.fc', {
  width: '1500px',
  height: '100vh',
});

globalStyle('.fc .fc-toolbar.fc-header-toolbar', {
  display: 'inline-flex',
  padding: '18px 16px 17px 0px',
  alignItems: 'center',
  gap: '780px',
  margin: '0',
});
globalStyle('.fc-toolbar-title', {
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.H2,
  fontWeight: '400',
  textAlign: 'center',
  whiteSpace: 'nowrap',
});
globalStyle('.fc-toolbar-chunk', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
globalStyle('.fc .fc-button', {
  all: 'unset',
});
globalStyle('.fc-icon', {
  all: 'unset',
  backgroundImage: 'url("./ui/CalendarArrow.svg")',
});
globalStyle('.fc-icon-chevron-left', {
  all: 'unset',
});
globalStyle('.fc-icon-chevron-right', {
  backgroundImage: 'url("./CalendarArrow.svg")',
});
globalStyle('.fc .fc-button-primary', {
  width: '30px',
});
globalStyle('.fc .fc-button-primary:focus', {
  border: 'none',
  boxShadow: 'none',
});
globalStyle('.fc-direction-ltr .fc-toolbar > * > :not(:first-child)', {
  margin: '0',
});
globalStyle('.fc-prev-button', {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  width: '26px',
  height: '26px',
  color: theme.black,
});
globalStyle('.fc-next-button', {
  width: '26px',
  height: '26px',
});
globalStyle('.fc-today-button', {
  color: theme.black,
  ...font.p1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
});

globalStyle('.fc-dayGridMonth-view', {
  display: 'flex',
  width: '1484px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

globalStyle('.fc-theme-standard .fc-scrollgrid', {
  borderRadius: '20px 20px 0px 0px',
  borderTop: `2px solid ${theme.gray[100]}`,
  borderRight: `2px solid ${theme.gray[100]}`,
  borderLeft: `2px solid ${theme.gray[100]}`,
});

globalStyle('.fc-col-header', {
  borderBottom: `1px solid ${theme.gray[100]}`,
});

globalStyle('.fc-day', {
  height: '40px',
});
globalStyle('.fc .fc-col-header-cell-cushion', {
  padding: '10px 4px',
});

globalStyle('.fc-day-sun', {
  color: 'red',
});

globalStyle('.fc .fc-scrollgrid table', {});

globalStyle('.fc-theme-standard td, .fc-theme-standard th', {
  border: 'none',
});

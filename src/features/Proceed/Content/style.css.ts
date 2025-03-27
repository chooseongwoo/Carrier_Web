import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  width: 'calc(100vw - 80px)',
  height: '100vh',
});

export const sidebar = style({
  width: '400px',
  height: '100%',
  borderRight: `1px solid ${theme.gray[100]}`,
});

export const title = style({
  ...font.H4,
  width: '100%',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.gray[100]}`,
});

export const recordContents = style({
  width: '100%',
  height: 'calc(100% - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  overflowY: 'scroll',
  padding: '0 20px',
});

export const recordContent = style({
  width: '100%',
  borderBottom: `1px solid ${theme.gray[100]}`,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '20px 12px',
});

export const recordTitle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const recordTitleText = style({
  ...font.H4,
});

export const recordTitleDate = style({
  ...font.p2,
  color: theme.gray[600],
});

export const recordTime = style({
  ...font.p2,
  color: theme.gray[600],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
});

export const recordButtonLayout = style({
  width: '100%',
  height: '88px',
  backgroundColor: theme.gray[50],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const recordButton = style({
  width: '48px',
  height: '48px',
  backgroundColor: theme.white,
  borderRadius: '100%',
  outline: `3px solid ${theme.gray[400]}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const recordButtonInner = style({
  width: '44px',
  height: '44px',
  borderRadius: '100%',
  backgroundColor: theme.red[500],
});

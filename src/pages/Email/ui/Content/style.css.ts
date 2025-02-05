import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100vw - 360px)',
  height: '100vh',
});

export const header = style({
  width: 'calc(100vw - 360px)',
  height: '72px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.gray[600]}`,
  padding: '0 24px 0 28px',
});

export const mailType = style({
  ...font.H4,
  display: 'flex',
  flexDirection: 'column',
});

export const subTitle = style({
  ...font.p3,
});

export const mailOption = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
});

export const mailOption_addPlan = style({
  ...font.p1,
  color: theme.blue[500],
  marginRight: '12px',
});

export const mailOption_write = style({
  width: '48px',
  height: '48px',
  backgroundColor: theme.gray[50],
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const mailOption_delete = style({
  width: '48px',
  height: '48px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

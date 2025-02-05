import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({});

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

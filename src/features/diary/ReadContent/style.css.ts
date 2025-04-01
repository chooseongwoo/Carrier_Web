import { style } from '@vanilla-extract/css';
import theme from '../../../shared/styles/theme.css.ts';
import { font } from '../../../shared/styles/font.css.ts';

export const readDiaryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const TitleContainer = style({
  width: '100%',
  padding: '20px 32px',
  borderBottom: `1px solid ${theme.gray[100]}`,
  display: 'flex',
  alignItems: 'center',
});

export const diaryTitle = style({
  width: '100%',
  ...font.H1,
  fontWeight: 600,
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '12px 28px',
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const emoji = style({
  fontSize: '5.5em',
});

export const content = style({
  ...font.H5,
  fontWeight: '500',
});

export const aiUseText = style({
  ...font.p2,
  color: theme.gray[500],
  position: 'absolute',
  top: '12px',
  right: '28px',
});

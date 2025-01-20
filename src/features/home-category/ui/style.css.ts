import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const CategoryContainer = style({
  display: 'flex',
  padding: '8px 12px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flexShrink: '0',
  alignSelf: 'stretch',
});

export const CategoryTitle = style({
  color: theme.gray[600],
  fontFamily: 'Pretendard',
  ...font.H5,
});

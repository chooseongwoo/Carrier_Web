import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const todoListContainer = style({
  padding: '8px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderRadius: '12px',
  alignSelf: 'stretch',
  backgroundColor: theme.white,
});

export const todoListHeader = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'ceter',
  justifyContent: 'space-between',
});

export const todoListTitle = style({
  color: theme.gray[600],
  fontFamily: 'Pretendard',
  ...font.H5,
  userSelect: 'none',
});

export const todoListSetDate = style({
  gap: '8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const todoListDateTitle = style({
  color: theme.gray[600],
  fontFamily: 'Pretendard',
  ...font.p2,
  userSelect: 'none',
});

export const todoListMain = style({
  display: 'flex',
  paddingLeft: '8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

export const todoListItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const todoListItemText = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  ...font.p1,
});

import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const ToDoListContainer = style({
  padding: '8px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderRadius: '12px',
  alignSelf: 'stretch',
  backgroundColor: theme.white,
});

export const ToDoListHeader = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'ceter',
  justifyContent: 'space-between',
});

export const ToDoListTitle = style({
  color: theme.gray[600],
  fontFamily: 'Pretendard',
  fontSize: font.H5.fontSize,
  fontWeight: font.H5.fontWeight,
  lineHeight: font.H5.lineHeight,
  fontStyle: 'normal',
});

export const ToDoListSetDate = style({
  gap: '8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ToDoListDateTitle = style({
  color: theme.gray[600],
  fontFamily: 'Pretendard',
  fontSize: font.p2.fontSize,
  fontWeight: font.p2.fontWeight,
  lineHeight: font.p2.lineHeight,
  fontStyle: 'normal',
});

export const ToDoListMain = style({
  display: 'flex',
  paddingLeft: '8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
});

export const ToDoListItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const ToDoListItemText = style({
  color: theme.black,
  fontFamily: 'Pretendard',
  fontSize: font.p1.fontSize,
  fontWeight: font.p1.fontWeight,
  lineHeight: font.p1.lineHeight,
  fontStyle: 'normal',
});

import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const DisplayContainer = style({
  width: '292px',
  padding: '0px 8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flexShrink: '0',
  alignSelf: 'stretch',
});

export const DisplayObject = style({
  display: 'flex',
  height: '26px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DisplayTitle = style({
  color: theme.black,
  textAlign: 'center',
  fontFamily: 'Pretendard',
  ...font.p1,
});

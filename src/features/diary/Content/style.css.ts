import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: '2.5 0 0',
  alignSelf: 'stretch',

  borderRight: `1px solid ${theme.gray[100]}`,
});

export const titleContainer = style({
  display: 'flex',
  padding: '28px 40px',
  alignItems: 'center',
  alignSelf: 'stretch',

  borderBottom: `1px solid ${theme.gray[100]}`,
});

export const titleText = style({
  color: theme.black,
  width: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  ...font.H1,
  fontWeight: '600',

  '::placeholder': {
    color: theme.gray[400],
  },
});

export const mainContainer = style({
  padding: '28px 40px 86px 40px',
  width: '100%',
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  alignSelf: 'stretch',
  position: 'relative',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const writeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflowY: 'auto',
});

export const emojiPicker = style({
  display: 'flex',
  width: '100px',
  height: '100px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  aspectRatio: '1/1',

  borderRadius: '99999px',
  backgroundColor: theme.gray[50],

  cursor: 'pointer',
});

export const emojiPickerText = style({
  color: theme.gray[500],

  ...font.p3,

  userSelect: 'none',
});

export const textBox = style({
  display: 'flex',
  width: '100%',
  marginTop: '20px',
  height: '100%',

  ...font.H4,
  fontWeight: '500',
  color: theme.black,
  fontFamily: 'Pretendard',

  '::placeholder': {
    color: theme.gray[400],
  },
});

export const saveDiaryBtn = style({
  padding: '12px 24px',
  borderRadius: '8px',
  backgroundColor: theme.blue[500],
  color: theme.white,
  ...font.H5,
  position: 'absolute',
  bottom: '40px',
  right: '45px',

  ':hover': {
    backgroundColor: theme.blue[600],
  },
});

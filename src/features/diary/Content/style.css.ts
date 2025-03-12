import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

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
  height: '12vh',
  padding: '0 40px',
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
  position: 'relative',
});

export const emojiContainer = style({
  display: 'flex',
  gap: '8px',
});

export const emojiPicker = style({
  width: '100px',
  height: '100px',
});

export const emojiTextLayout = style({
  width: '100%',
  height: '100%',
});

export const emojiText = style({
  width: '100%',
  height: '100%',
  fontSize: '5.5em',
});

export const emojiCircle = style({
  height: '100%',
  width: '100%',
  display: 'flex',
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

export const emojiPickerContainer = style({
  width: '100%',
});

export const emojiPickerWrapper = style({
  position: 'absolute',
  height: '100%',
});

export const textBox = style({
  display: 'flex',
  width: '100%',
  marginTop: '20px',
  height: '100%',

  ...font.H5,
  fontWeight: '500',
  color: theme.black,
  fontFamily: 'Pretendard',

  '::placeholder': {
    color: theme.gray[400],
  },
});

export const saveDiaryBtn = recipe({
  base: {
    padding: '12px 24px',
    borderRadius: '8px',
    backgroundColor: theme.blue[100],
    color: theme.white,
    ...font.H5,
    position: 'absolute',
    bottom: '40px',
    right: '45px',
    transition: 'background-color 0.2s ease-in-out',
  },
  variants: {
    isWrite: {
      true: {
        backgroundColor: theme.blue[500],
        ':hover': {
          backgroundColor: theme.blue[600],
        },
      },
      false: {
        backgroundColor: theme.blue[100],
        ':hover': {
          backgroundColor: theme.blue[100],
          cursor: 'default',
        },
      },
    },
  },
  defaultVariants: {
    isWrite: false,
  },
});

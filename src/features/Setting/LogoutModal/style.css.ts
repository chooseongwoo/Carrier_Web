import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modalContent = style({
  padding: '36px 20px 16px',
  display: 'flex',
  background: `${theme.white}`,
  width: '28rem',
  borderRadius: '16px',
  gap: '20px',
  flexDirection: 'column',
});

export const explainText = style({
  ...font.p1,
  color: `${theme.gray[700]}`,
  textAlign: 'center',
  padding: '12px',
});

export const buttons = style({
  display: 'flex',
  width: '100%',
  cursor: 'pointer',
});

export const button = recipe({
  base: {
    width: '50%',
    ...font.btn1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
  },
  variants: {
    type: {
      cancel: {
        color: `${theme.black}`,
      },
      leave: {
        color: `${theme.red[500]}`,
      },
    },
  },
});

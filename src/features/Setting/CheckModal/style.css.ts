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
  paddingTop: '16px',
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
  padding: '20px 32px 12px 32px',
});

export const buttons = style({
  display: 'flex',
  height: '78px',
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
    height: '100%',
    transition: 'background-color 0.2s ease',
    padding: '12px',
  },
  variants: {
    type: {
      cancel: {
        color: `${theme.black}`,
        borderRadius: '0 0 0 16px',
        ':hover': {
          backgroundColor: `${theme.gray[50]}`,
          borderRadius: '0 0 0 16px',
        },
      },
      leave: {
        color: `${theme.red[500]}`,
        borderRadius: '0 0 16px 0',
        ':hover': {
          backgroundColor: `${theme.gray[50]}`,
          borderRadius: '0 0 16px 0',
        },
      },
    },
  },
});

export const secessionInputContainer = style({
  width: '100%',
  padding: '0 20px',
});

export const secessionInput = style({
  width: '100%',
  ...font.p2,
  padding: '8px 0',
  border: `1px solid ${theme.gray[200]}`,
  borderRadius: '8px',
  textAlign: 'center',
});

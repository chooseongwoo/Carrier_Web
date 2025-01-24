import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

export const timeInputContainer = style({
  ...font.H1,
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  marginTop: '36px',
});

export const timeInput = style({
  ...font.H1,
  width: '52px',
  textAlign: 'center',
  borderBottom: `1px solid ${theme.blue[400]}`,
  '::placeholder': {
    color: theme.gray[400],
  },
});

globalStyle('input[type=number]::-webkit-inner-spin-button', {
  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  margin: 0,
});

globalStyle('input[type=number]::-webkit-outer-spin-button', {
  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  margin: 0,
});

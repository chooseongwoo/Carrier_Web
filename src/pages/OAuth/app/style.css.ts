import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(180deg, ${theme.white} 0%, #D2DCFF 100%)`,
});

export const toAppButton = style({
  padding: '20px 28px',
  borderRadius: '8px',
  background: `${theme.blue[500]}`,
  color: `${theme.white}`,
  ...font.H4,
});

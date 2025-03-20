import { style } from '@vanilla-extract/css';
import theme from 'shared/styles/theme.css';

export const container = style({
  width: '100vw',
  height: '100%',
  display: 'flex',
  paddingLeft: '80px',
  flexDirection: 'column',
});

export const main = style({
  display: 'flex',
  height: 'calc(100% - 160px)',
  justifyContent: 'space-between',
  alignSelf: 'stretch',

  backgroundColor: theme.white,
});

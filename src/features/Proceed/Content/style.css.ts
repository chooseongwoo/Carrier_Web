import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'calc(100vw - 80px)',
  height: '100vh',
  backgroundColor: 'red',
});

export const sidebar = style({
  width: '400px',
  height: '100%',
  backgroundColor: 'blue',
});

export const title = style({
  width: '100%',
  height: '72px',
});

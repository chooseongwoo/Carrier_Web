import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(180deg, ${theme.white} 0%, #D2DCFF 100%)`,
});

export const center = style({
  width: '520px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
});

export const explain = style({
  color: `${theme.gray[600]}`,
  ...font.H2,
});

export const loginButton = style({
  marginTop: '24px',
  padding: '11px 12px',
  width: '336px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  borderRadius: '4px',
  background: theme.white,
  cursor: 'pointer',
  border: `1px solid ${theme.gray[200]}`,
});

export const loginText = style({
  ...font.btn2,
  color: theme.black,
  width: '100%',
  textAlign: 'center',
});

export const shape = style({
  position: 'absolute',
});

export const Asterisk = style({
  top: '5%',
  left: '8%',
});

export const Cube = style({
  right: '10%',
  top: '10%',
});

export const Sphere = style({
  bottom: '5%',
  left: '6%',
});

export const MobiusStrip = style({
  bottom: '5%',
  right: '2%',
});

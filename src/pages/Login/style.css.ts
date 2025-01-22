import { style, keyframes } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

const upDownAnimation = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-50px)' },
  '100%': { transform: 'translateY(0)' },
});

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

export const Asterisk = style([
  shape,
  {
    top: '5%',
    left: '8%',
    animation: `${upDownAnimation} 3s infinite`,
    animationDelay: '0s',
  },
]);

export const Cube = style([
  shape,
  {
    right: '10%',
    top: '10%',
    animation: `${upDownAnimation} 3s infinite`,
    animationDelay: '0.5s',
  },
]);

export const Sphere = style([
  shape,
  {
    bottom: '5%',
    left: '6%',
    animation: `${upDownAnimation} 3s infinite`,
    animationDelay: '1s',
  },
]);

export const MobiusStrip = style([
  shape,
  {
    bottom: '5%',
    right: '2%',
    animation: `${upDownAnimation} 3s infinite`,
    animationDelay: '1.5s',
  },
]);

import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
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

export const buttons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '24px',
});

export const loginButton = recipe({
  base: {
    padding: '11px 12px',
    width: '336px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: '4px',
    background: theme.white,
    cursor: 'pointer',
  },
  variants: {
    type: {
      login: {
        background: theme.white,
        border: `1px solid ${theme.gray[200]}`,
        color: theme.black,
      },
      download: {
        background: theme.blue[700],
        color: theme.white,
      },
    },
  },
});

export const buttonText = recipe({
  base: {
    ...font.btn2,
    width: '100%',
    textAlign: 'center',
  },
  variants: {
    type: {
      login: {
        color: theme.black,
      },
      download: {
        color: theme.white,
      },
    },
  },
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

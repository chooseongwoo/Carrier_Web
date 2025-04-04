import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const AudioContainer = style({
  textAlign: 'center',
  position: 'relative',
});

export const AudioVisualizerCanvas = style({
  width: '100%',
  height: '100px',
});

export const AudioState = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
});

export const AudioLoadingLayout = style({
  ...font.H4,
  fontWeight: 400,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: theme.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
});

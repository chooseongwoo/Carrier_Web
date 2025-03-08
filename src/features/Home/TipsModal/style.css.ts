import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const TipsModal_Background = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1,
  backgroundColor: 'rgba(18, 18, 19, 0.20);',
});

export const TipsModal_Container = style({
  ...font.H3,
  width: '800px',
  height: '752px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  borderRadius: '12px',
  backgroundColor: theme.white,
});

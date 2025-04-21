import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  width: '600px',
  height: '500px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.white,
  borderRadius: '8px',
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  overflowY: 'scroll',
});

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const title = style({
  ...font.H3,
});

export const formLink = style({
  ...font.p1,
  color: theme.blue[500],
});

export const subTitle = style({
  ...font.p1,
  color: theme.blue[500],
});

export const Image = style({
  width: '550px',
  borderRadius: '10px',
});

export const buttons = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0px 20px',
});

export const checkboxLayout = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

export const checkbox = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const button = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: theme.blue[500],
  color: theme.white,
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '5px',
});

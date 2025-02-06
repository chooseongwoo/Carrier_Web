import { globalStyle, style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  position: 'absolute',
  width: '37rem',
  height: '37rem',
  maxHeight: '37rem',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  background: `${theme.white}`,
  boxShadow: '0px 4px 32px 0px rgba(88, 88, 88, 0.25)',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 16px',
  background: `${theme.gray[100]}`,
  borderRadius: '20px 20px 0 0',
});

export const inputs = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputContainer = style({
  display: 'flex',
  gap: '8px',
  padding: '12px 20px',
  borderBottom: `1px solid ${theme.gray[100]}`,
  width: '100%',
});

export const label = style({
  color: `${theme.gray[600]}`,
  ...font.p1,
});

export const input = style({
  color: '#000',
  ...font.p1,
  flexGrow: 1,
});

export const footer = style({
  marginTop: 'auto',
  padding: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px',
});

export const icon = style({
  padding: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
  ':hover': {
    background: `${theme.gray[100]}`,
  },
});

export const sent = style({
  display: 'flex',
  alignItems: 'center',
  background: `${theme.blue[500]}`,
  ':hover': {
    background: `${theme.blue[500]}`,
  },
});

export const editorContainer = style({
  flexGrow: 1,
  overflow: 'hidden',
});

export const editor = style({
  height: '100%',
});

globalStyle(`${container} .ql-container`, {
  flexGrow: 1,
  height: '100% !important',
  overflowY: 'auto',
  overflowX: 'hidden',
  border: 'none',
});

globalStyle(`${container} .ql-editor`, {
  minHeight: '100%',
  maxHeight: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  padding: '12px 16px',
  marginBottom: '10px',
});

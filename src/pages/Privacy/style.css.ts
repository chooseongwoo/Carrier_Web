// Privacy.css.ts
import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
});

export const title = style({
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: '700',
  padding: '52px 0 40px 0',
  margin: '0',
});

export const section = style({
  marginBottom: '40px',
});

export const provisionTitle = style({
  fontWeight: 'bold',
  fontSize: '18px',
});

export const paragraph = style({
  lineHeight: '1.6',
});

export const boldUnderline = style({
  fontWeight: 'bold',
  textDecoration: 'underline',
});

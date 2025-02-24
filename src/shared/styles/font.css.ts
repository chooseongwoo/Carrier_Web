import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalFontFace('Pretendard', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
globalStyle('body', {
  fontFamily: 'Pretendard',
});
export const font = {
  D1: {
    fontSize: '72px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  D2: {
    fontSize: '60px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  D3: {
    fontSize: '48px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  H1: {
    fontSize: '36px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  H2: {
    fontSize: '28px',
    lineHeight: '120%',
    fontWeight: 700,
  },
  H3: {
    fontSize: '24px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  H4: {
    fontSize: '20px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  H5: {
    fontSize: '18px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  p1: {
    fontSize: '18px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  p2: {
    fontSize: '16px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  p3: {
    fontSize: '14px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  context: {
    fontSize: '16px',
    lineHeight: '120%',
    fontWeight: 500,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '120%',
    fontWeight: 400,
  },
  btn1: {
    fontSize: '18px',
    lineHeight: '120%',
    fontWeight: 600,
  },
  btn2: {
    fontSize: '16px',
    lineHeight: '120%',
    fontWeight: 500,
  },
  btn3: {
    fontSize: '14px',
    lineHeight: '120%',
    fontWeight: 500,
  },
};

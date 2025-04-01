import { globalStyle, style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const wrapper = style({
  position: 'relative',
});

export const datePickerDisplay = style({
  textAlign: 'end',
  width: '100%',
  fontFamily: 'Pretendard',
  background: 'none',
  color: theme.gray[800],
  ...font.p2,
  cursor: 'pointer',
});

globalStyle('.react-datepicker', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
});

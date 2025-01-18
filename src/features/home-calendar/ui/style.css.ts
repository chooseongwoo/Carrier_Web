import { style } from '@vanilla-extract/css';
import theme from 'shared/styles/theme.css';

export const MiniCalendarContainer = style({
  width: '292px',
  height: '278px',
  borderRadius: '12px',
  flexShrink: 0,
  alignSelf: 'stretch',
  backgroundColor: theme.white,
  overflow: 'hidden',
  border: '1px solid red', //확인용
});

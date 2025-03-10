import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { font } from 'shared/styles/font.css';

import theme from 'shared/styles/theme.css';

export const dropdownBtn = recipe({
  base: {
    display: 'flex',
    padding: '4px 4px 4px 12px',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '4px',
    cursor: 'pointer',
    gap: '2px',
    transition: 'all 0.2s ease',
    selectors: {
      '&:hover': {
        backgroundColor: theme.gray[50],
      },
    },
  },
  variants: {
    hasColor: {
      true: { padding: '4px' },
      false: {},
    },
  },
  defaultVariants: {
    hasColor: false,
  },
});

export const dropdownContainer = style({
  position: 'fixed',
  display: 'inline-flex',
  padding: '4px 8px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  borderRadius: '4px',
  border: `1px solid ${theme.gray[100]}`,
  backgroundColor: theme.gray[50],
  boxShadow: '0px 4px 32px 0px rgba(92,92,92,0.25)',
  zIndex: '1001',
});

export const dropdownItem = recipe({
  base: {
    display: 'flex',
    width: '100%',
    height: '26px',
    padding: '0px 8px',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '4px',

    ...font.p2,
    color: theme.gray[800],
    transition: 'all 0.1s ease',
  },
  variants: {
    hovered: {
      true: {
        backgroundColor: theme.blue[400],
        color: theme.white,
      },
      false: {},
    },
  },
  defaultVariants: {
    hovered: false,
  },
});

export const dropdownColorBox = style({
  width: '18px',
  height: '18px',
  borderRadius: '4px',
});

export const dropdownBtnText = style({
  color: theme.gray[800],
  ...font.p2,
});

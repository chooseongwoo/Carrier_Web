import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const container = style({
  width: 'calc(100vw - 80px)',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const sidebar = style({
  width: '400px',
  height: '100%',
  borderRight: `1px solid ${theme.gray[100]}`,
});

export const title = style({
  ...font.H4,
  width: '100%',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.gray[100]}`,
});

export const recordContents = style({
  width: '100%',
  height: 'calc(100% - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  overflowY: 'scroll',
});

export const recordContentContainer = recipe({
  base: {
    width: '100%',
    padding: '0 20px',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: theme.blue[500],
      },
      false: {},
    },
  },
});

export const recordContent = recipe({
  base: {
    width: '100%',
    borderBottom: `1px solid ${theme.gray[100]}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px 12px',
    cursor: 'pointer',
  },
  variants: {
    isSelected: {
      true: {
        borderBottom: `1px solid ${theme.blue[500]}`,
        color: theme.white,
      },
      false: {},
    },
  },
});

export const recordTitle = style({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '4px',
});

export const recordTitleText = style({
  ...font.H4,
  width: '100%',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const recordTitleDate = recipe({
  base: {
    ...font.p2,
    color: theme.gray[600],
  },
  variants: {
    isSelected: {
      true: {
        color: theme.blue[100],
      },
      false: {},
    },
  },
});

export const recordTime = recipe({
  base: {
    ...font.p2,
    color: theme.gray[600],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  variants: {
    isSelected: {
      true: {
        color: theme.blue[100],
      },
      false: {},
    },
  },
});

export const recordButtonLayout = style({
  width: '100%',
  height: '88px',
  backgroundColor: theme.gray[50],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const recordButton = style({
  width: '48px',
  height: '48px',
  backgroundColor: theme.white,
  borderRadius: '100%',
  outline: `3px solid ${theme.gray[400]}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const recordButtonInner = style({
  width: '44px',
  height: '44px',
  borderRadius: '100%',
  backgroundColor: theme.red[500],
});

export const mainContent = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

export const mainContentLoadingLayout = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.20)',
});

export const mainContentLoading = style({
  ...font.p2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  padding: '80px 140px',
  borderRadius: '8px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.white,
  zIndex: 10000,
});

export const mainRecordContent = recipe({
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {
    isRecord: {
      true: {
        backgroundColor: 'transparent',
        position: 'relative',
      },
      false: {},
    },
  },
});

export const mainRecordButtonText = style({
  ...font.H3,
  color: theme.white,
  width: '220px',
  height: '220px',
  backgroundColor: theme.blue[500],
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
});

export const mainRecordButtonIconLayout = style({
  width: '220px',
  height: '220px',
  backgroundColor: theme.blue[500],
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 10,
});

export const mainRecordButtonIcon = style({
  width: '82px',
  height: '82px',
  backgroundColor: theme.white,
  borderRadius: '12px',
});

export const mainContentNoneSelect = style({
  ...font.H3,
  color: theme.gray[400],
});

export const mainSummarizeContentLayout = style({
  width: '100%',
  height: '100%',
});

export const SummarizeContent = style({
  width: '100%',
  padding: '80px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  overflowY: 'scroll',
  height: 'calc(100% - 220px)',
});

export const mainContentListenBar = style({
  width: '100%',
  height: '220px',
  padding: '24px',
  backgroundColor: theme.gray[50],
});

export const SummarizeMainTitle = style({
  ...font.H1,
});

export const SummarizeTitle = style({
  ...font.H3,
  color: theme.blue[500],
});

export const SummarizeSubTitle = style({
  ...font.H4,
  fontWeight: 400,
});

export const SummarizeContentDetail = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const mainRecordEffect = style({
  position: 'absolute',
  top: '30%',
  fontSize: '24px',
  color: '#666',
});

export const recordContentNone = style({
  padding: '20px',
  color: '#666',
  textAlign: 'center',
});

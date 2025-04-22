import { style } from '@vanilla-extract/css';
import { font } from 'shared/styles/font.css';
import theme from 'shared/styles/theme.css';

export const TipsModal_Background = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 10,
  backgroundColor: 'rgba(18, 18, 19, 0.20);',
});

export const TipsModal_Container = style({
  width: '48rem',
  height: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 11,
  borderRadius: '12px',
  backgroundColor: theme.white,
  paddingBottom: '24px',
});

export const TipsModal_Header = style({
  width: '100%',
  height: '146px',
  borderRadius: '12px 12px 0 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '12px',
});

export const TipsModal_CloseIcon = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '8px 8px 0 0',
});

export const TipsModal_Title = style({
  ...font.H3,
  width: '100%',
  color: theme.white,
  padding: '0 0 16px 28px',
});

export const TipsModal_CategoryTodo = style({
  width: '100%',
  minHeight: '10rem',
  maxHeight: '10rem',
  height: 'auto',
  padding: '12px 28px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const TipsModal_Category = style({
  width: 'calc(50% - 4px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  overflow: 'auto',
});

export const None_Of_Tips = style({
  ...font.H5,
  color: theme.gray[500],
});

export const Category_Content = style({
  width: '100%',
  minHeight: '30px',
  height: '30px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  borderRadius: '6px',
});

export const Category_Color = style({
  width: '4px',
  height: '100%',
  borderRadius: '6px 0 0 6px',
});

export const Category_Title = style({
  ...font.p2,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '0 6px 6px 0',
  padding: '0 16px 0px 8px ',
});

export const TipsModal_Todo = style({
  width: 'calc(50% - 4px)',
  overflow: 'auto',
});

export const Todo_Content = style({
  minWidth: '100%',
  width: '100%',
  display: 'block',
  flexWrap: 'wrap',
  listStyleType: 'disc',
  paddingLeft: '20px',
});

export const Todo_Title = style({
  ...font.p2,
  display: 'list-item',
  maxWidth: '100%',
  wordBreak: 'break-word',
  marginBottom: '8px',
});

export const TipsModal_Eamil = style({
  width: '100%',
  padding: '12px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const Email_Title = style({
  ...font.H3,
  color: theme.blue[500],
});

export const Email_Content_Container = style({
  width: '100%',
  height: 'auto',
  minHeight: '9rem',
  maxHeight: '9rem',
  overflow: 'auto',
});

export const Email_Content_Container_Empty = style({
  border: `1px solid ${theme.gray[100]}`,
  padding: '20px',
  borderRadius: '4px',
});

export const Email_Content = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 16px',
  borderLeft: `1px solid ${theme.gray[100]}`,
  borderRight: `1px solid ${theme.gray[100]}`,
  borderBottom: `1px solid ${theme.gray[100]}`,
  position: 'relative',
});

export const Email_From = style({
  ...font.H4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '80%',
});

export const Email_Header = style({
  ...font.p1,
  width: '100%',
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
});

export const Email_Date = style({
  ...font.p2,
  color: theme.gray[500],
  position: 'absolute',
  top: '12px',
  right: '16px',
});

export const TipsModal_Tips = style({
  width: '100%',
  minWidth: '70%',
  height: 'auto',
  padding: '12px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const Tips_Title = style({
  ...font.H3,
  color: theme.blue[500],
});

export const Tips_Content_Container = style({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  width: '100%',
  height: 'auto',
  minHeight: '80px',
});

export const TipsModal_Content = style({
  minWidth: '100%',
  width: '100%',
});

export const TipsModal_Loading = style({
  height: '500px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '24px',
});

export const TipsModal_Loading_Text = style({
  ...font.H4,
  color: theme.gray[900],
});

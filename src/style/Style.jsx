import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ShareContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const Container = styled(Box)(({ theme }) => ({
  left: 124,
  top: 124,
  position: 'relative',
  alignItems: 'center',
  padding: theme.spacing(8, 16),
  gap: 8,
}));

export const Widget = styled(Box)(({ theme }) => ({
  width: 512,
  minHeight: 262,
  height: 'maxContent',
  left: 0,
  top: 50,
  backgroundColor: '#FFFF',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  boxShadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.1),
        0px 4px 6px -2px rgba(0, 0, 0, 0.05)`,
}));

export const UserWidgetStyle = styled(Widget)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 262,
  height: 'max-content',
  position: 'absolute',
  top: 0,
}));

export const WidgetHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 80,
  borderBottom: '1px solid #e5e7eb',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const UserWidgetHeader = styled(WidgetHeader)(({ theme }) => ({
  height: 'max-content',
}));

export const WidgetBody = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  minHeight: 134,
}));

export const WidgetFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 48,
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '0px 0px 8px 8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Links = styled(Box)(({ theme }) => ({
  ':hover': {
    backgroundColor: 'rgba(17, 24, 39, 0.04)',
  },
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'col',
  padding: theme.spacing(10, 10),
  alignItems: 'center',
}));

export const InviteBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(12, 16),
  cursor: 'pointer',
  userSelect: 'none',
}));

export const User = styled(Button)(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  padding: theme.spacing(10),
  display: 'flex',
  justifyContent: 'flex-start',
}));

export const SelectedUser = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 16),
}));

export const InputBox = styled(Box)(({ theme }) => ({
  gap: 10,
  minHeight: 30,
  height: 'max-content',
  display: 'flex',
  borderRadius: 8,
  width: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 16),
  userSelect: 'none',
}));

export const InviteText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  width: 74,
  height: 42,
  background: '#f9fafb',
  border: '1px solid #d1d5db',
  borderRadius: '0px 6px 6px 0px',
}));

export const InviteSubText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px 0px 0px 12px',
  width: '488px',
  height: '42px',
  background: '#ffffff',
  border: '1px solid #d1d5db',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: '6px 0px 0px 6px',
}));

export const PillButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  width: 'maxContent',
  height: 28,
  background: '#e5e7eb',
  borderRadius: 4,
}));

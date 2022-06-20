import { SxProps } from '@mui/material';
import background from 'images/background3.png';

export const home: SxProps = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'hidden',
  overflowX: 'hidden',
  backgroundImage: { lg: '', xs: `url("${background}")` },
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

export const video: SxProps = {
  display: { lg: 'block', xs: 'none' },
  position: 'absolute',
};

export const logoSx: SxProps = {
  zIndex: '1',
  width: '29rem',
  height: '15rem',
  display: { lg: 'block', xs: 'none' },
};

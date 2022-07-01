import { SxProps } from '@mui/material';

export const topNavBar: SxProps = {
  width: '100%',
  height: '30px',
  position: 'absolute',
  display: { lg: 'flex', xs: 'none' },
  flexDirection: 'row',
  justifyContent: 'space-around',
  background: 'rgba(0, 0, 0, 0)',
};

export const navHamburger: SxProps = {
  display: { lg: 'none', md: 'block' },
  color: 'white'
};

export const navLink: SxProps = {
  textAlign: 'center',
  padding: { xl: '3vh', xs: '4vh' },
  color: 'white',
  fontFamily: 'cynatar',
  fontSize: { l: '3.0rem', sm: '2.0rem', xs: '2rem' },
};

export const sideNavBar: SxProps = {
  display: { lg: 'none', md: 'block' },
  position: 'absolute',
  width: '100%',
  top: '0',
  background: 'black',
};

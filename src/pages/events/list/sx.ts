import { SxProps } from '@mui/material';
import backgroundImg from '~/images/ram-skull-no-background.png';

export const eventsContainer: SxProps = {
  mt: { lg: '6rem', sm: '5rem' },
  height: '80%',
  display: 'flex',
  flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
  alignItems: { lg: 'center', sm: 'flex-start', xs: 'center' },
  justifyContent: 'space-around',
};

export const eventsList: SxProps = {
  mt: { lg: '4rem', sm: 0 },
  mb: '4rem',
  height: '90%',
  width: { lg: '40%', xs: '100%' },
  direction: 'rtl',
  overflowY: 'scroll',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'Orbitron',
  fontSize: { l: '3.0rem', md: '2.0rem' },
  color: 'white',
  '&::-webkit-scrollbar': {
    width: '5px',
  },
};

export const eventItem: SxProps = {
  marginBottom: '5vh',
  color: 'white',
};

export const background: SxProps = {
  display: { lg: 'block', xs: 'none' },
  height: '70vh',
  width: '100vh',
  backgroundImage: `url("${backgroundImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
};

export const smallLogo: SxProps = {
  display: { lg: 'none', md: 'block' },
  width: { xs: '50%' },
  mb: '2rem',
};

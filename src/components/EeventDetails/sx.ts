import { SxProps } from '@mui/material';

export const eventDetailsContainer: SxProps = {
  mt: { lg: '10rem', sm: '6rem', xs: '8rem' },
  width: '100%',
  display: 'flex',
  flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const eventDetailsData: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'orbitron',
  fontSize: { lg: '5vh', md: '4vh', sm: '4vw', xs: '3vh' },
  color: 'white',
};

export const eventVideo: SxProps = {
  height: { lg: '25vw', md: '20vw', sm: '40vh', xs: '20vh' },
  width: { lg: '43vw', md: '35vw', sm: '80vh', xs: '40vh' },
};

export const eventDetailsItem: SxProps = {
  mb: '5vh',
};

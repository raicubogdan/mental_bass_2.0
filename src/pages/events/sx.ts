import { SxProps } from '@mui/material';
import backgroundImg from 'images/ram-skull-no-background.png'

export const events: SxProps = {
  position: 'absolute',
  mt: {lg: '10vh', md: '3rem', xs:'1rem'},
  height: '100%',
  width: '100%',
  backgroundColor: 'black',
}

export const eventsContainer: SxProps = {
  display: 'flex',
  flexDirection: {lg: 'column', sm:'row', xs:'column'},
  alignItems: {lg: 'center', sm:'flex-start', xs:'center'},
  height: {lg: '85%', xs:'90%'},
  width: {lg: '60%', xs:'100%'},
  m: {lg: '5vh 0 0 0'},
}

export const eventsList: SxProps = {
  height: 'inherit',
  width: 'inherit',
  direction: 'rtl',
  position: 'relative',
  overflowY: 'scroll',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'Orbitron',
  fontSize: {l: '3.0rem', md:'2.0rem'},
  color: 'white',
  '&::-webkit-scrollbar': {
    width: '5px'
  }
}

export const eventItem: SxProps = {
  marginBottom: '5vh',
  color: 'white'
}

export const background: SxProps = {
  display: {lg: 'block', xs:'none'},
  position: 'absolute',
  height: '70vh',
  width: '100vh',
  top: '10vh',
  right: '0',
  backgroundImage: `url("${backgroundImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}

export const smallLogo: SxProps = {
  display: {lg: 'none', md:'block'},
  width: {xs: '50%'},
  mb: '2rem'
}
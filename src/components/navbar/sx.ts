import { SxProps } from '@mui/material'

export const topNavBar: SxProps = {
  zIndex: '1',
  position: 'absolute',
  width: '100%',
  display: {lg: 'flex', xs:'none'},
  flexDirection:'row',
  justifyContent: 'space-around',
  backgroundColor: 'rgba(0, 0, 0, 0)',
}

export const navHamburger: SxProps = {
  zIndex: '1',
  position: 'fixed',
  display: {lg: 'none', md:'block'},
  right: '5%',
  top: '2%',
}

export const navLink: SxProps = {
  textAlign: 'center',
  padding: {xl: '3vh', xs:'4vh'},
  color: 'white',
  fontFamily: 'cynatar',
  fontSize: {l: '3.0rem', sm:'2.0rem', xs:'2rem'},
}

export const sideNavBar: SxProps = {
  zIndex: '1',
  display: {lg: 'none', md:'block'},
  position:'absolute',
  width: '100%',
  bottom:'0',
  background: 'black'
}

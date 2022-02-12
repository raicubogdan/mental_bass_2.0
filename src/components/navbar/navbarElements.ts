import { styled } from '@material-ui/core';

export const Nav = styled('div')(() => ({
  position: 'absolute',
  width: 'inherit',
  display:'flex',
  flexDirection:'row',
  alignItems: 'center',
  backgroundColor: 'black',
  justifyContent: 'space-around',
}))

export const NavLink = styled('div')(() => ({
  color: 'white',
  fontSize: '2rem',
  margin: '4vh 0 0 0'
}));

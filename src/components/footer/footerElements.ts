import { styled } from '@material-ui/core';

export const FooterContainer = styled('div')(() => ({
  position: 'absolute',
  top: '100%',
  width: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  textAlign:'center',
  backgroundColor: 'black'
}))

export const FooterText = styled('p')(() => ({
  color: 'white',
  fontSize: '2rem',
}))
import { Box, Grid, Slide, SxProps } from '@mui/material'

export const navBar: SxProps = {
  position: 'absolute',
  width: '100%',
  display: {md: 'flex', xs:'none'},
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'rgba(0, 0, 0, 0)',
}

export const navLink: SxProps = {
  m: '4vh 0 0 0',
  color: 'white',
  fontFamily: 'LEDLIGHT',
  fontSize: {xl: '2.0rem', lg: '1.5rem', md:'1.0rem', sm:'2.0rem', xs:'1.5rem'},
  textAlign: 'center'
}

export const navHamburger: SxProps = {
  position: 'absolute',
  display: {md: 'none', sm:'block'},
  right: '5%',
  top: '2%',

}

export const sideNavBar: SxProps = {
  display: {md: 'none', xs:'block'},
  position:'absolute',
  width: '100%',
  bottom:'10%',
}

const links = ['Events', 'Contact', 'Log In', 'Admin', 'Bomba', 'Teku']

export const NavbarComponent = () => {
  return (links.map((link) => {
    return (
      <Box sx={{...navLink}}>
        {link}
      </Box>
    )
  }))
}

export const SideNavBarComponent = (sideNavbarActive: boolean) => {
  return (
    <Slide in={sideNavbarActive} direction='left'>
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {links.map(link => {
        return (
        <Grid item xs={6}>
          <Box sx={{...navLink}}>
            {link}
          </Box>
        </Grid>)
      })}
    </Grid>
  </Slide>
  )
}

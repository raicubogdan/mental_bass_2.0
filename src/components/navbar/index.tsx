import { navBar, navHamburger, sideNavBar, NavbarComponent, SideNavBarComponent } from './navbarSx';
import { Turn as Hamburger } from 'hamburger-react'
import { Box } from '@mui/material';
import { useState } from 'react';



const Navbar = () => {
  const [sideNavbarActive, setSideNavbarActive] = useState<boolean>(false) 

  const handleClick = () => {
    setSideNavbarActive(prevSideNavbarActive => !prevSideNavbarActive)
  }

  return (
    <>
    <Box sx={{...navBar}}>
      {NavbarComponent()}
    </Box>

    <Box sx={{...navHamburger}}>
      <Hamburger color='white' rounded onToggle={handleClick}/>
    </Box>

    <Box sx={{...sideNavBar}}>
      {SideNavBarComponent(sideNavbarActive)}
    </Box>
    </>
  );
}

export default Navbar

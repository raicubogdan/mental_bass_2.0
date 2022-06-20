import { Box } from '@mui/material';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { SideNavbar } from './components';
import { navHamburger } from './sx';
import TopNavbar from './TopNavBar';

const Navbar = () => {
  const [sideNavbarPosition, setSideNavbarPosition] = useState('-100%');

  const handleClick = () => {
    (prevSideNavbarPosition: string) => {
      setSideNavbarPosition(prevSideNavbarPosition === '-100%' ? '0%' : '-100%');
    };
  };

  return (
    <>
      <TopNavbar />
      <Box sx={navHamburger}>
        <Hamburger onToggle={handleClick} />
      </Box>
      <SideNavbar sideNavbarPosition={sideNavbarPosition} />
    </>
  );
};

export default Navbar;

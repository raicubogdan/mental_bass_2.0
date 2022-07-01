import { Box } from '@mui/material';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { SideNavbar } from './components';
import { navHamburger } from './sx';
import TopNavbar from './TopNavBar';

const Navbar = () => {
  const [sideNavbarPosition, setSideNavbarPosition] = useState('-100%');

  const handleClick = () => (
      setSideNavbarPosition(
        prevSideNavbarPosition => prevSideNavbarPosition === '-100%' ? '0%' : '-100%'
      )
  )

  return (
    <>
      <TopNavbar />
      <div onClick={handleClick} className='w-full justify-end lg:hidden flex text-white'>
        <Hamburger />
      </div>
      <SideNavbar sideNavbarPosition={sideNavbarPosition} />
    </>
  );
};

export default Navbar;

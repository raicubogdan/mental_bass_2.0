import { TopNavbar, SideNavbar, Hamburger } from './components';
import { useState } from 'react';

const Navbar = () => {
  const [sideNavbarPosition, setSideNavbarPosition] = useState<string>("-100%") 

  const handleClick = () => {
    setSideNavbarPosition(prevSideNavbarPosition => prevSideNavbarPosition === '-100%' ? '0%' : '-100%')
  }

  return (
    <>
      <TopNavbar />
      <Hamburger handleClick={handleClick}/>
      <SideNavbar sideNavbarPosition={sideNavbarPosition}/>
    </>
  );
}

export default Navbar

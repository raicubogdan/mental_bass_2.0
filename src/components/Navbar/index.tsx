import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { SideNavbar } from './SideNavBar';
import TopNavbar from './TopNavBar';

const Navbar = () => {
  const [sideNavbarPosition, setSideNavbarPosition] = useState('-100%');
  const [toggled, setToggled] = useState(true)
  
  const handleClick = () => (
      setSideNavbarPosition(
        prevSideNavbarPosition => prevSideNavbarPosition === '-100%' ? '0%' : '-100%'
      )
  )

  useEffect( () => {
    setToggled(prevToggled => !prevToggled)
  }, [sideNavbarPosition])

  return (
    <>
      <TopNavbar />
      <div onClick={handleClick} className='absolute top-0 w-full justify-end lg:hidden flex text-white'>
        <Hamburger toggled={toggled}/>
      </div>
      <SideNavbar sideNavbarPosition={sideNavbarPosition} handleClick={handleClick}/>
    </>
  );
};

export default Navbar;

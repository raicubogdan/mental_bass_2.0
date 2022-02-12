import { Nav, NavLink } from './navbarElements';

const links = ['Events', '|', 'Contact', '|', 'Log In', '|', 'Admin']

const Navbar = () => {
  return (
    <>
    <Nav>
      {links.map((link) => {
        return (
          <NavLink>
            {link}
          </NavLink>
        )
      })}
    </Nav>
    </>
  );
}

export default Navbar
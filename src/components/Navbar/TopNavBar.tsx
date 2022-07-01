import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { links } from './constants';

const TopNavbar = () => {
  return (
    <motion.div className="text-white font-cynatar no-underline w-full lg:flex hidden lg:text-4xl justify-around">
      {links.map(link => {
        return (
          <Link key={link.id} to={link.to} style={{textDecoration: 'none'}}>
            <motion.div whileHover={{ x: 10, transition: { duration: 0.1 } }}>
              {link.text}
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default TopNavbar;

// TopNavbarSx
// {
//   zIndex: '1',
//   width: '100%',
//   height: '30px',
//   position: 'absolute',
//   display: { lg: 'flex', xs: 'none' },
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   background: 'rgba(0, 0, 0, 0)',
// };

// NavLink
// textAlign: 'center',
//   padding: { xl: '3vh', xs: '4vh' },
//   color: 'white',
//   fontFamily: 'cynatar',
//   fontSize: { l: '3.0rem', sm: '2.0rem', xs: '2rem' },
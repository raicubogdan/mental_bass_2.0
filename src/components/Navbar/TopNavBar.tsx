import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { links } from './constants';
import { navLink, topNavBar } from './sx';

const TopNavbar = () => {
  return (
    <Box sx={topNavBar}>
      {links.map(link => {
        return (
          <Link key={link.id} to={link.to} style={{ textDecoration: 'none' }}>
            <Box sx={navLink} component={motion.div} whileHover={{ x: 10, transition: { duration: 0.1 } }}>
              {link.text}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default TopNavbar;

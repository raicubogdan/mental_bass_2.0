import { Box, Grid } from '@mui/material';
import { Turn as TurnHamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { navHamburger, navLink } from './sx';
import { links } from './constants';
export const Hamburger = ({ handleClick }: any) => {
  return (
    <Box sx={navHamburger}>
      <TurnHamburger color="white" rounded onToggle={handleClick} />
    </Box>
  );
};

export const SideNavbar = ({ sideNavbarPosition }: any) => {
  return (
    <motion.div className='z-1 lg:hidden block absolute w-full bottom-0 bg-black' animate={{ x: sideNavbarPosition }} transition={{ duration: 0.3 }}>
      <Grid container>
        {links.map(link => {
          return (
            <Grid key={link.id} item xs={6}>
              <Link to={link.to} style={{ textDecoration: 'none' }}>
                <Box sx={navLink}>{link.text}</Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
};

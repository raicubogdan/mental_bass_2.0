import { Box, Grid } from '@mui/material';
import { Turn as TurnHamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { navHamburger, navLink, sideNavBar } from './sx';
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
    <Box sx={sideNavBar} component={motion.div} animate={{ x: sideNavbarPosition }} transition={{ duration: 0.3 }}>
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
    </Box>
  );
};

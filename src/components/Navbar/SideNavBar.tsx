import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links } from './constants';

export const SideNavbar = ({ sideNavbarPosition, handleClick }: any) => {
  return (
    <motion.div className='lg:hidden block absolute w-full bottom-0 bg-black' animate={{ x: sideNavbarPosition }} transition={{ duration: 0.3 }}>
      <Grid container>
        {links.map(link => {
          return (
            <Grid key={link.id} item xs={6}>
              <Link onClick={handleClick} to={link.to} style={{ textDecoration: 'none' }}>
                <div className='touch-none text-white text-center font-cynatar p-3 text-3xl'>{link.text}</div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
 );
};

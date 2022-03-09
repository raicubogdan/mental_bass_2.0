import { Box, Grid } from '@mui/material'
import { Turn as TurnHamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { topNavBar, navHamburger, navLink, sideNavBar } from './sx'

const links = [
  {id:'1', to: '/', text: 'Home'},
  {id:'2', to:'/events', text: 'Events'},
  {id:'3', to:'/contact', text: 'Contact'},
]

export const TopNavbar = () => {
  return (
    <Box sx={topNavBar}>
      {links.map((link) => {
        return (
          <Link key={link.id} to={link.to} style={{textDecoration: 'none'}}>
            <Box 
              sx={navLink} 
              component={motion.div}
              whileHover={{x: 10, transition: {duration: 0.1}}}
            >
              {link.text}
            </Box>
          </Link>
        )
      })}
    </Box>
  )
}

export const Hamburger = ({handleClick}: any) => {
  return(
    <Box sx={navHamburger}>
      <TurnHamburger color='white' rounded onToggle={handleClick}/>
    </Box>
  )
}

export const SideNavbar = ({sideNavbarPosition}: any) => {
  return (
    <Box 
      sx={sideNavBar} 
      component={motion.div} 
      animate={{ x: sideNavbarPosition }} 
      transition={{duration: 0.3}}>
      <Grid container>
        {links.map(link => {
          return (
          <Grid item xs={6}>
            <Link to={link.to} style={{textDecoration: 'none'}}>
              <Box sx={navLink}>{link.text}</Box>
            </Link>
          </Grid>)
        })}
      </Grid>
    </Box>
  )
}

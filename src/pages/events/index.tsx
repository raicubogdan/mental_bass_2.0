import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { containerVariants } from 'sx'
import { background, eventItem, events, eventsContainer, eventsList, smallLogo } from './sx'
import logo from 'images/logo.png'
import { Link } from 'react-router-dom'

export const eventsData = [
  { id: '1', name: 'TEK TARNITA' },
  { id: '2', name: 'TECHNO DEJ' },
  { id: '3', name: 'DUB HYBRID' },
  { id: '4', name: 'DNB PASTA TAT'  },
  { id: '5', name: 'RETRO PARTY PENTRU BANI'  },
  { id: '6', name: 'EVENT 1' },
  { id: '7', name: 'EVENT 2' },
  { id: '8', name: 'EVENT 3' },
  { id: '9', name: 'EVENT 4' },
  { id: '10', name: 'EVENT 5' },
  { id: '11', name: 'EVENT 6' },
  { id: '12', name: 'EVENT 7' },
  { id: '13', name: 'EVENT 8' },
  { id: '14', name: 'EVENT 9' },
  { id: '15', name: 'EVENT 10' },
]

const Events = () => {
  return (
    <Box sx={events}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'>

    <Box sx={eventsContainer}>
      <Box sx={smallLogo} component={'img'} src={logo}/>
      <Box sx={eventsList}>
        {eventsData.map(event => {
          return (
            <Link to={`${event.id}`} style={{textDecoration: 'none'}}>
              <Box key={event.id}
                  sx={eventItem}
                  component={motion.div}
                  whileHover={{x: 10, transition: {duration: 0.1}}}
                >
                {event.name}
              </Box>
            </Link>
          )
        })}
      </Box>
    </Box>

    <Box sx={background} /> 
    </Box>
  )
}

export default Events
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { eventsData } from 'pages/events'
import { useParams } from 'react-router-dom'
import { containerVariants } from 'sx'
import { eventCover, eventCoverContainer, eventDetails, eventDetailsContainer, eventDetailsData, eventDetailsItem } from './sx'

const EventDetails = () => {
  const { id } = useParams()

  const eventQuery = eventsData.filter(eventItem => {
    return eventItem.id === id
  })

  const event = eventQuery[0] ? eventQuery[0] : {id:0, name:'not found'}

  return (
    <Box sx={eventDetails}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      >
      <Box sx={eventDetailsContainer}>
        <Box sx={eventDetailsData}>
          <Box sx={eventDetailsItem}>{event.name}</Box>
          <Box sx={eventDetailsItem}>03.03.2022</Box>
          <Box sx={eventDetailsItem}>HYBRID</Box>
        </Box>
        <Box sx={eventCoverContainer}>
          <Box sx={eventCover}/>
        </Box>
      </Box>
    </Box>
  )
}

export default EventDetails
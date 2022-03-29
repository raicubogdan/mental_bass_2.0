import { Box } from '@mui/material'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebaseDb/config'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { containerVariants } from 'sx'
import getDateFromTimestamp from 'utils/utils'
import { eventCover, eventDetailsContainer, eventDetailsData, eventDetailsItem } from './sx'

const EventDetails = () => {
  const { id } = useParams()
  console.log(id)
  const [event, setEvent] = useState<any>({})
  
  useEffect(() => {
    const ref = collection(db, 'events')
    
    getDocs(ref)
    .then((snapshot) => {
      const results: any = []
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()})
      })
      const filteredResults = results.filter((event: any) => {
        console.log(event.id)
        console.log(id)
        return event.id === id
      })
      
      setEvent(filteredResults[0])
    })
  }, [id])

  return (
    <Box sx={eventDetailsContainer}
    component={motion.div}
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='hidden'>
      {event.id &&
        <Box sx={eventDetailsData}>
          <Box sx={eventDetailsItem}>{event.title}</Box>
          <Box sx={eventDetailsItem}>{getDateFromTimestamp(event.date)}</Box>
          {console.log(event.coordinates)}
          <Box sx={eventDetailsItem}>
            <p>{event.coordinates.latitude} </p>
            <p>{event.coordinates.longitude}</p>
          </Box>
        </Box>
      }
      <Box sx={eventCover}/>

    </Box>
  )
}

export default EventDetails
import { Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/firebaseDb/config';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDateFromTimestamp from '~/components/utils';
import { eventDetailsContainer, eventDetailsData, eventDetailsItem, eventVideo } from './sx';
import Event from './type';
import { containerVariants } from '~/sx';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({} as Event);

  useEffect(() => {
    const ref = collection(db, 'events');

    getDocs(ref).then(snapshot => {
      const results: any = [];
      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      });
      const filteredResults = results.filter((event: any) => {
        return event.id === id;
      });

      setEvent(filteredResults[0]);
    });
  }, [id]);

  return (
    <Box
      sx={eventDetailsContainer}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {event.id && (
        <Box sx={eventDetailsData}>
          <Box sx={eventDetailsItem}>{event.title}</Box>
          <Box sx={eventDetailsItem}>{getDateFromTimestamp(event.date)}</Box>
          <Box sx={eventDetailsItem}>
            <p>{event.coordinates.latitude}°</p>
            <p>{event.coordinates.longitude}°</p>
          </Box>
          <Box sx={eventDetailsItem}>{event.details}</Box>
        </Box>
      )}

      <Box component={'video'} sx={eventVideo} autoPlay loop muted>
        <source
          src={
            'https://firebasestorage.googleapis.com/v0/b/mental-bass-2-0.appspot.com/o/event_video.mp4?alt=media&token=14861f24-7e50-4350-9fdd-e7b3a6cc8638'
          }
          type="video/mp4"
        />
      </Box>
    </Box>
  );
};

export default EventDetails;

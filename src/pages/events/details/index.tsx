import { Box } from '@mui/material';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDateFromTimestamp from '~/components/utils';
import { eventDetailsData, eventDetailsItem } from './sx';
import Event from './types';
import { containerVariants } from '~/sx';
import mettiLaTekno from '~/images/metti-cover.png'
import getEvent from '../utils';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({} as any);

  useEffect(() => {
    getEvent({attribute: 'id', setEvent, toEqual: id})
  }, [id]);

  return (
    <motion.div
      className='w-full h-full flex lg:flex-row flex-col justify-around items-center lg:pb-20 pb-0'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {event.id && (
        <Box sx={eventDetailsData}>
          <Box sx={eventDetailsItem}>{event.title}</Box>
          <Box sx={eventDetailsItem}>{getDateFromTimestamp(event.dateFrom)}</Box>
          <Box sx={eventDetailsItem}>{getDateFromTimestamp(event.dateTo)}</Box>
          <Box sx={eventDetailsItem}>
            <p>{event.coordinates.latitude}°</p>
            <p>{event.coordinates.longitude}°</p>
          </Box>
          <Box sx={eventDetailsItem}>{event.details}</Box>
        </Box>
      )}

      <img src={mettiLaTekno} alt="metti-la-tekno" />
    </motion.div>
  );
};

export default EventDetails;

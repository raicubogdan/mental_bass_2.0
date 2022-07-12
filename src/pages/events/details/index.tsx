import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import getDateFromTimestamp from '~/components/utils';
import { containerVariants } from '~/sx';
import mettiLaTekno from '~/images/mettiLaTekDecupat.png'
import eventLogos from '~/images/eventLogosCropped.png'
import getEvents from '../utils';
import Event from './types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Alert, Snackbar } from '@mui/material';

const EventDetails = () => {
  // const { id } = useParams();
  // const [events, setEvents] = useState<Event[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false)
  const event = {
    id: 1,
    title: 'Metti la Tekno',
    details:'',
    coordinates: {
      latitude:'46.817045',
      longitude:'22.94266'
    }
  }

  const handleClick = () => {
    navigator.clipboard.writeText(`${event.coordinates.latitude} ${event.coordinates.longitude}`)
    setSnackbarOpen(prevOpen => !prevOpen)
  }
  const handleClose = () => {
    setSnackbarOpen(prevOpen => !prevOpen)
  }
  // useEffect(() => {
  //   getEvents({filteredAttr: 'id', toEqual: id}).then(eventList => setEvents(eventList))
  // }, [id]);

  return (
    <motion.div
      className={`w-full h-full flex lg:flex-row flex-col justify-between items-end gap-10`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {event && event.id && 
        <>
          <img className='lg:block hidden max-h-[90vh]' src={eventLogos} alt="eventLogos" />
          <div className='min-w-[30rem] h-full lg:mt-0 lg:pb-0 pt-16 self-center flex flex-col text-center font-orbitron lg:text-4xl text-3xl text-white gap-4 pb-32'>
            <div>{event.title}</div>
            <div>15.07.2022</div>
            <div>17.07.2022</div>
            {/* <div>{getDateFromTimestamp(event.dateFrom)}</div> */}
            {/* <div>{getDateFromTimestamp(event.dateTo)}</div> */}
            <div>
              {/* <p>COMING SOON</p> */}
              {/* <p>46.817045°</p>
              <p>22.942660°</p> */}
              <p>{event.coordinates.latitude}°</p>
              <p>{event.coordinates.longitude}°</p>
              <div className='w-full flex justify-around mt-10 px-20'>
                <button onClick={() => handleClick()}>
                  <ContentCopyIcon sx={{ fontSize: '4rem' }}/>
                </button>
                <a href="https://www.google.com/maps/place/46%C2%B049'01.4%22N+22%C2%B056'33.6%22E/@46.817045,22.94266,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x9c92e321f360eddd!8m2!3d46.817045!4d22.94266" target='_blank'>
                  <LocationOnIcon sx={{ fontSize: '4rem' }}/>
                </a>
              </div>
            </div>
            <div>{event.details}</div>
          </div>
          <img className={`max-h-[90vh]`} src={mettiLaTekno} alt="metti-la-tekno" />
        </>
      }
    
    <Snackbar 
      open={snackbarOpen}
      autoHideDuration={3000}
      message="Note archived"
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      onClose={handleClose}
    >
      <Alert severity="success">
        Coordinates copied
      </Alert>
    </Snackbar>
    </motion.div>
  );
};

export default EventDetails;

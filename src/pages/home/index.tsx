import { motion } from 'framer-motion';
import { containerVariants } from '~/sx';
import homeCover from '~/images/mettiLaTekDecupat.png';
import eventLogos from '~/images/eventLogosCropped.png';
import logo from '~/images/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getEvents from '../events/utils';
import Event from '../events/details/types';

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  // const event = events[0]
  const event = {id: 1}
  // useEffect(() => {
  //   getEvents({filteredAttr: 'homeEvent', toEqual: true}).then(eventList => setEvents(eventList))
  // });

  return (
    <motion.div
    className={`w-full h-full flex lg:flex-row flex-col justify-between items-end lg:pt-0 pt-20`}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    >
    {event && event.id &&
      <>
        <img className={`lg:block hidden max-h-[90vh] object-cover`} src={eventLogos} alt="eventLogos" />
        <div className='flex flex-col self-center items-center lg:justify-center justify-start mb-10 md:mt-0 '>
          <img className='max-h-[30vh]' src={logo} alt="logo" />
          <div className='font-cynatar text-white text-5xl'>Mental Bass</div>
        </div>

        <Link className={`max-h-[90vh]`} to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
          <img className='max-h-[90vh]' src={homeCover} alt="metti-la-tekno" />
        </Link>
      </>
    }
      </motion.div>
  );
};

export default Home;

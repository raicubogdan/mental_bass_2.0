import { motion } from 'framer-motion';
import { containerVariants } from '~/sx';
import homeCover from '~/images/metti-cover.png';
import logo from '~/images/logo.png';
import { useEffect, useState } from 'react';
import getEvent from '../events/utils';
import { Link } from 'react-router-dom';

const Home = () => {
  const [event, setEvent] = useState({} as any);

  useEffect(() => {
    getEvent({attribute: 'homeEvent', setEvent, toEqual: true})
  }, []);

  return (
    <motion.div
      className="w-full h-full flex justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className='flex flex-col items-center lg:justify-center justify-start md:ml-20 md:mb-40 md:mt-0 mt-10 '>
        <img className='w-[700px]' src={logo} alt="logo" />
        <div className='font-cynatar text-white text-5xl'>Mental Bass</div>
      </div>
      {event.id &&
        <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
          <img className="w-full h-full lg:block hidden" src={homeCover} alt='home-cover'/>
        </Link>
      }
    </motion.div>
  );
};

export default Home;

import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '~/images/logo.png';
import { Link } from 'react-router-dom';
import { containerVariants } from '~/sx';
import backgroundImg from '~/images/ram-skull-no-background.png';

const Events = () => {
  // const [events, setEvents] = useState<Event[]>([]);

  // useEffect(() => {
  //     getEvents({filteredAttr: 'show', toEqual: true}).then(eventList => setEvents(eventList))
  // }, [window.innerHeight]);
  const events = [{id: 1, title: 'Metti La Tekno'}]
  return (
    <motion.div
      className={`lg:pt-24 pt-20 w-full h-full flex lg:flex-row flex-col lg:items-start items-center justify-around`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {events.length ? (
        <>
          <img className='lg:hidden block w-[60vh] mb-8' src={logo} alt='logo' />
          <div className='h-full justify-start xl:text-5xl lg:text-4xl text-2xl lg:mt-16 mt-0 lg:w-[40%] w-[100%] overflow-y-scroll overflow-x-hidden flex flex-col text-center font-orbitron text-white'>
            {events.map((event: any) => {
              return (
                <Link className='' to={'1'} style={{ textDecoration: 'none' }}>
                  <motion.div
                    className='text-white'
                    key={event.id}
                    whileHover={{ x: 10, transition: { duration: 0.1 } }}>
                    {event.title}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <img className={`h-[60vh] mt-20 lg:block hidden`} src={backgroundImg} alt="background-img" />
        </>
      ) : (
        <CircularProgress />
      )}
    </motion.div>
  );
};

export default Events;

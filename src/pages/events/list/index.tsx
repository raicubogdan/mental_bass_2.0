import { Box, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { background, eventItem, eventsContainer, eventsList, smallLogo } from './sx';
import logo from '~/images/logo.png';
import { Link } from 'react-router-dom';
import { db } from '~/firebaseDb/config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { containerVariants } from '~/sx';

const Events = () => {
  const [eventsData, setEventsList] = useState([]);

  useEffect(() => {
    const ref = collection(db, 'events');

    getDocs(ref).then(snapshot => {
      const results: any = [];
      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      });

      setEventsList(results);
    });
  }, []);

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      sx={eventsContainer}>

      {eventsData.length ? (
        <>
          <Box sx={smallLogo} component={'img'} src={logo} />

          <Box sx={eventsList}>
            {eventsData.map((event: any) => {
              return (
                <Link to={event.id} style={{ textDecoration: 'none' }}>
                  <Box
                    key={event.id}
                    sx={eventItem}
                    component={motion.div}
                    whileHover={{ x: 10, transition: { duration: 0.1 } }}>
                    {event.title}
                  </Box>
                </Link>
              );
            })}
          </Box>

          <Box sx={background} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Events;

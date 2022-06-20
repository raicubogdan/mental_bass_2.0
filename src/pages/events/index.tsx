import { Box, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { background, eventItem, eventsContainer, eventsList, smallLogo } from './sx';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import { db } from '~/firebaseDb/config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { containerVariants } from '~/sx';

export const eventsDataa = [
  { id: '1', title: 'TEK TARNITA' },
  { id: '2', title: 'TECHNO DEJ' },
  { id: '3', title: 'DUB HYBRID' },
  { id: '4', title: 'DNB PASTA TAT' },
  { id: '5', title: 'RETRO PARTY PENTRU BANI' },
  { id: '6', title: 'EVENT 1' },
  { id: '7', title: 'EVENT 2' },
  { id: '8', title: 'EVENT 3' },
  { id: '9', title: 'EVENT 4' },
  { id: '10', title: 'EVENT 5' },
  { id: '11', title: 'EVENT 6' },
  { id: '12', title: 'EVENT 7' },
  { id: '13', title: 'EVENT 8' },
  { id: '14', title: 'EVENT 9' },
  { id: '15', title: 'EVENT 10' },
];

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

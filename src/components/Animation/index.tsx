import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import AnimatedRoutesProps from './types';

const AnimatedRoutes: FC<AnimatedRoutesProps> = ({ children, exitBeforeEnter, initial }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Routes location={location} key={location.key}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

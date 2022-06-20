// import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import { containerVariants } from '~/sx';

const Home = () => {
  return (
    <motion.div
      className="w-1920 h-1080 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      {/* <img className="z-1 w-[29rem] h-[15rem] lg:block none" src={logo} /> */}
    </motion.div>
  );
};

export default Home;

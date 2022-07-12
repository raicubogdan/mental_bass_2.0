import { motion } from 'framer-motion';
import logo from '~/images/logo.png';
import { containerVariants } from '~/sx';
import { SocialMedia } from './SocialMedia';

const Contact = () => {
  return (
    <motion.div
      className={`h-full w-full flex items-center justify-center lg:h-[1080px] pb-20`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
        <div className='flex flex-col items-center gap-6'>
          <img className='max-h-[35vh]' src={logo} alt='logo'/>
          <SocialMedia />
          <div className='text-white font-orbitron lg:text-5xl md:text-4xl sm:text-3xl text-xl mt-6'>mental-bass@gmail.com</div>
        </div>
    </motion.div>
  );
};

export default Contact;

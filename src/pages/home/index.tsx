import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { containerVariants } from 'sx'
import { home } from './sx'

const Home = () => {
  return (
    <Box sx={home}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'>
    </Box>
  )
}

export default Home
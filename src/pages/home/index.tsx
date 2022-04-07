import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { containerVariants } from 'sx'
import { home, logoSx, video } from './sx'

const Home = () => {
  return (
    <Box sx={home}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'>

      {/* <Box sx={logoSx} component={'img'} src={logo}/> */}

      <Box component={'video'} sx={video} autoPlay muted>
        <source
          src={'https://firebasestorage.googleapis.com/v0/b/mental-bass-2-0.appspot.com/o/video_background2.mp4?alt=media&token=177bd1fb-0799-4a2e-a926-715452989360'}
          type="video/mp4"
        />
      </Box>
    </Box>
    
  )
}

export default Home

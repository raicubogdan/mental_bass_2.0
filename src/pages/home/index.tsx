import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { containerVariants } from 'sx'
import { home } from './sx'
import logo from 'images/logo.png' 

const Home = () => {
  return (
    <Box sx={home}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'>

      <Box style={{ zIndex:'1', width: '29rem', height: '15rem'}} component={'img'} src={logo}/>

      <video style={{position: 'absolute'}} loop autoPlay muted>
        <source
          src={'https://firebasestorage.googleapis.com/v0/b/mental-bass-2-0.appspot.com/o/video_background.mp4?alt=media&token=514e020f-7fd1-4ca3-8a4c-5fba9fc588b5'}
          type="video/mp4"
        />
      </video>
    </Box>
    
  )
}

export default Home

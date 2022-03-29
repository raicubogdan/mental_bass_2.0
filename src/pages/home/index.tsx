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
          src={require('images/video_background.mp4')}
          type="video/mp4"
        />
      </video>
    </Box>
    
  )
}

export default Home

import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { containerVariants } from 'sx'
import { background, contact, contactContainer, contactEmail, smallLogo, SocialMedia } from './sx'
import logo from 'images/logo.png'

const Contact = () => {
  return (
    <Box sx={contact}
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Box sx={contactContainer}>
        <Box sx={smallLogo} component={'img'} src={logo}/>
        <SocialMedia />
        <Box sx={contactEmail}>mental-bass@gmail.com</Box>
      </Box>

      <Box sx={background} />
    </Box>
  )
}

export default Contact

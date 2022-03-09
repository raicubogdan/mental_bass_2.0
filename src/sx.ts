import { SxProps } from '@mui/material'

export const containerVariants = { 
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit:{
    opacity: 1,
  }
}

export const app: SxProps = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  background: 'black'
}
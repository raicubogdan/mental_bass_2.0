import { SxProps } from '@mui/material'
import background from './images/background.png'

export const appProps: SxProps = {
  minHeight: '100%',
  backgroundImage: `url("${background}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}

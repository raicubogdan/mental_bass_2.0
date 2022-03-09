import { SxProps } from '@mui/material';
import background from 'images/background3.png'

export const home: SxProps = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  backgroundImage: `url("${background}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}

import { Box, SxProps } from '@mui/material'
import { Instagram, Facebook, YouTube } from '@mui/icons-material';

export const socialMedia = [
  {link: 'https://www.facebook.com/MBSoundSystem', Icon: Facebook},
  {link: 'https://www.instagram.com/mentalbasssoundsystem/', Icon: Instagram},
  {link: 'https://www.youtube.com/channel/UCgD-6b8Y1UoH1Hn4TnpvhBg', Icon: YouTube},
]

export const footerContainer: SxProps = {
  position: 'absolute',
  width: '100%',
  top: '100%',
  display: 'flex',
  flexDirection: {md: 'row', xs:'column'},
  alignItems:'center',
  backgroundColor: 'rgba(0, 0, 0, 1)'
}

export const logoContainer: SxProps = {
  width: '50%',
  display: 'flex',
  justifyContent: {md: 'end', xs: 'center'},
}

export const logo: SxProps = {
  width: {md:'30%', s:'50%', xs:'100%'},
  mb: 2,
  mr: {md: 20, xs: 0}
}

export const socialMediaContainer: SxProps = {
  width: {lg: '15%', md: '30%', sm:'70%' , xs:'60%'},
  mb: {md: 0, xs:2},
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: 'white'
}


export const SocialMedia = () => {
  return (
    <Box sx={socialMediaContainer}>
      {socialMedia.map(link => {
        return (
          <Box component={'a'} target="_blank" href={link.link} style={{color: 'white'}}>
            <link.Icon sx={{fontSize:{lg: '6vh', md: '7vh', sm: '13vh', xs:'6vh'}}}/>
          </Box>
        )
      })}
    </Box>
  )
}

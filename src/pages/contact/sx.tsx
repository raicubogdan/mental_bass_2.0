import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { SxProps } from '@mui/material';
import { Box } from '@mui/system';
import backgroundImg from '~/images/circle.png';

export const socialMedia = [
  { id: '4', link: 'https://www.facebook.com/MBSoundSystem', Icon: Facebook },
  { id: '5', link: 'https://www.instagram.com/mentalbasssoundsystem/', Icon: Instagram },
  { id: '6', link: 'https://www.youtube.com/channel/UCgD-6b8Y1UoH1Hn4TnpvhBg', Icon: YouTube },
];

export const contact: SxProps = {
  mt: { lg: '4vh', md: '2rem', sm: '0rem', xs: '15vh' },
  height: '100%',
  width: '100%',
  backgroundColor: 'black',
};

export const contactContainer: SxProps = {
  mt: { lg: '10rem', md: '2rem', sm: '1rem' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '85%',
  width: { lg: '60%', md: '100%' },
  color: 'white',
};

export const smallLogo: SxProps = {
  width: { md: '50%', sm: '50%', xs: '70%' },
};

export const background: SxProps = {
  display: { lg: 'block', xs: 'none' },
  position: 'absolute',
  height: '90vh',
  width: '80vh',
  top: '10vh',
  right: '12vh',
  backgroundImage: `url("${backgroundImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
};

export const socialMediaContainer: SxProps = {
  width: { lg: '30%', md: '40%', sm: '50%', xs: '70%' },
  mb: { md: 0, xs: 2 },
  mt: { md: 5, xs: 2 },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: 'white',
};

export const contactEmail: SxProps = {
  fontFamily: 'orbitron',
  fontSize: { lg: '4vh', xs: '6vw' },
  mt: { lg: '8vh', xs: '6vh' },
};

export const SocialMedia = () => {
  return (
    <Box sx={socialMediaContainer}>
      {socialMedia.map(link => {
        return (
          <Box key={link.id} component={'a'} target="_blank" href={link.link} style={{ color: 'white' }}>
            <link.Icon sx={{ fontSize: { lg: '6vh', md: '10vh', sm: '8vh', xs: '6vh' } }} />
          </Box>
        );
      })}
    </Box>
  );
};

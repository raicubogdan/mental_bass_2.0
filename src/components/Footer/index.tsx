import { Box } from '@mui/material';
import { footerContainer, logoContainer, logo, SocialMedia } from './sx';
import logoImg from '~/images/logo.png';
import { Instagram, Facebook, YouTube } from '@mui/icons-material';

export const socialMedia = [Facebook, Instagram, YouTube];

const Footer = () => {
  return (
    <Box sx={footerContainer}>
      <Box sx={logoContainer}>
        <Box component="img" sx={logo} src={logoImg} />
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default Footer;

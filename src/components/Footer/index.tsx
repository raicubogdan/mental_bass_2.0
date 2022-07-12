import logoImg from '~/images/logo.png';
import { SocialMedia } from '~/pages/contact/SocialMedia';

const Footer = () => {
  return (
    <div className='absolute top-full w-full flex md:flex-row flex-col items-center gap-6 py-6'>
      <div className='w-1/2 flex justify-center'>
        <img className='md:w-[30%] sm:w-[50%] w-full' src={logoImg} />
      </div>
      <SocialMedia />
    </div>
  );
};

export default Footer;

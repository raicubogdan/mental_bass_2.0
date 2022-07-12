import { socialMedia } from './constants';

export const SocialMedia = () => {
  return (
    <div className='flex justify-around w-full'>
      {socialMedia.map(link => {
        return (
          <a className='text-white' key={link.id} target="_blank" href={link.link}>
            <link.Icon sx={{ fontSize: '3rem' }} />
          </a>
        );
      })}
    </div>
  );
};

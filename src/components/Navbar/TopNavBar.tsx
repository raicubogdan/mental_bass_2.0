import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { links } from './constants';

const TopNavbar = () => {
  return (
    <motion.div className="text-white font-cynatar no-underline w-full h-14 lg:flex hidden lg:text-4xl justify-around">
      {links.map(link => {
        return (
          <Link key={link.id} to={link.to} style={{textDecoration: 'none'}}>
            <motion.div whileHover={{ x: 10, transition: { duration: 0.1 } }}>
              {link.text}
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default TopNavbar;
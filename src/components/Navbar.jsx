import { motion } from 'framer-motion';
import styles from '../styles.js';
import { navVariants } from '../motion';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg'
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src={search} alt="search" className='w-[24px] h-[24px] object-contain' />
      <h2 className='text-white font-extrabold text-[24px] leading-[30px]'>METAVERSE</h2>
      <img src={menu} alt="menu" className='w-[24px] h-[24px] object-contain'/>
    </div>
  </motion.nav>
);

export default Navbar;

import { motion } from 'framer-motion';
import map from "../assets/map.png";
import people1 from "../assets/person-01.png";
import people2 from "../assets/person-02.png";
import people3 from "../assets/person-03.png";
import group1 from "../assets/Group-01.png";
import group2 from "../assets/Group-02.png";
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../motion';
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="// People on the World //" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[140px] h-[140px] p-[6px] rounded-full xs:hidden">
          <img src={people1} alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[120px] h-[120px] p-[6px] rounded-full">
          <img src={people2} alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[13%] w-[160px] h-[160px] p-[6px] rounded-full">
          <img src={people3} alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[30%] left-[40%] w-[350px] h-[280px] p-[6px] rounded-full xs:hidden">
          <img src={group1} alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-[1%] left-[60%] xs:left-[30%] w-[330px] h-[280px] p-[6px] rounded-full">
          <img src={group2} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
    </section>
);

export default World;

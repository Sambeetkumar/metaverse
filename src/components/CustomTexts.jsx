import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../motion";
export const TypingText = (props) => (
  <motion.p
    variants={textContainer}
    className={`italic text-[25px] mb-8 text-secondary-white ${props.textStyles}`}
  >
    {Array.from(props.title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = (props) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] md:text-[64px] text-[40px] font-bold text-white ${props.textStyles}`}
  >
    {props.title}
  </motion.h2>
);

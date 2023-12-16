/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { staggerContainer } from "../motion";

export const SectionWrapper = (children: any, idName : string) => {
    console.log(children)
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
      {children}
    </motion.section>
  );
};

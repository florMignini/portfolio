/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion";
import { ServiceCard } from ".";
import { BackendIcon, FrontEndIcon, /* MobileIcon */ } from "../icons";
export type serviceType = {
  title: string;
  icon: ReactNode;
  index?: any;
  content?: string;
};
const services: serviceType[] = [
  {
    title: "Frontend Developer",
    icon: <FrontEndIcon />,
    content: "Creating user interface and user interactivity for the best experience."
  },
  /* {
    title: "React Native Developer",
    icon: <MobileIcon />,
  }, */
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
    content: "Building strong and robust full-stack structures for working workflow proccesses."
  },
];

export const About = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 max-w-7xl mx-auto relative z-0"
    >
      <span className="py-14 md:py-48" id="about">
        &nbsp;
      </span>
     <div className="flex flex-col 2xl:pt-[13rem]">

     <motion.div className="pt-10 text-text" variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          About me.
        </p>
        <h2 className="text-text-title font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overwiew.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="px-2 py-4 text-secondary text-base max-w-3xl leading-normal text-text"
      >
        Hey, I'm Florencia Mignini. I am a fullstack developer and UX/UI
        designer. Passionate about music, waves lover. I am always curious to learn more
        about new technologies and creative coding.
      </motion.p>
     </div>

      {/* tech cards */}
      <div className=" flex flex-wrap items-center justify-start gap-4 text-text-title">
        {services.map((service: serviceType, index: any) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

import { motion} from "framer-motion"
// import { ReactNode } from "react";
import { fadeIn, textVariant } from "../motion"
import { ServiceCard } from ".";
export type serviceType = {
  title: string,
  icon: /* ReactNode */string,
  index?: any
}
const services:serviceType[] = [
  {
    title: "Web Developer",
    icon: "web",
  },
  {
    title: "React Native Developer",
    icon: "mobile",
  },
  {
    title: "Backend Developer",
    icon: "backend",
  },
  {
    title: "Content Creator",
    icon: "creator",
  },
];

export const About = () => {
  return (
    <>
    <motion.div 
    className="p-2"
    variants={textVariant(0.1)}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">About me.</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overwiew.</h2>

      <div className="w-full border-[1px] mb-3"/>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="px-2 py-4 text-secondary text-base max-w-3xl leading-normal"
    >
    Hey, I'm Florencia Mignini. I am a fullstack developer and UX/UI designer. Passionate about music, I am always curious to learn more about new technologies and creative coding.
    </motion.p>

    {/* tech cards */}
    <div>
      {
        services.map((service:serviceType, index:any)=>(
          <ServiceCard 
          key={service.title}
          // index={index}
          {...service}
          />
        ))
      }
    </div>
    </>
  )
}

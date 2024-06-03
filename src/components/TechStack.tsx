import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
import { staggerContainer, textVariant } from "../motion";
export interface ITech {
  name: string;
  icon: string;
}
const technologies: ITech[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export const TechStack = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 max-w-7xl mx-auto relative z-0"
    >
      <span className="sm:p-10 lg:py-24 text-text" id="">
        &nbsp;
      </span>
      <motion.div variants={textVariant(0.1)}
      className="mb-10"
      >
        <p className="sm:text-[18px] text-[14px] text-text uppercase tracking-wider">
          Tech Stack.
        </p>
        <h2 className="text-text-title font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Tooling.
        </h2>
        <div className="w-full text-text border-[1px] mb-3"/>
      </motion.div>
      {/* content */}
      <div
      className="flex flex-row flex-wrap justify-center gap-10 my-10"
      >
        {technologies.map((technology:ITech )=> (
          <div
          className="w-28 h-28" 
          key={technology.name}
          >
            <BallCanvas
            icon={technology.icon}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion";
import xClone from "../assets/projects/x-clone.png";
import taskTracker from "../assets/projects/task-tracker.jpeg";
import { ProjectCard } from ".";
export interface IProject {
  name: string;
  description: string;
  tags: ITags[];
  image: string;
  source_code_link: string;
  index?: number;
}
export interface ITags {
  name: string;
  color: string;
}
const projects: IProject[] = [
  {
    name: "X Clone",
    description:
      "Experience the essence of real-time microblogging with this Twitter Clone, meticulously crafted using Next.js 13. Embrace the power of modern web development as you navigate through a seamless, responsive, and highly interactive user interface.",
    tags: [
      {
        name: "Next",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: xClone,
    source_code_link: "https://github.com/",
  },
  {
    name: "Task Tracker",
    description:
      "Immerse yourself in a productivity-enhancing experience with this Trello Clone, meticulously crafted using Vite for the frontend and Express for the backend. Elevate your project management capabilities with a feature-rich, responsive, and collaborative task organization platform.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: taskTracker,
    source_code_link: "https://github.com/",
  },
];
export const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id="project">
        &nbsp;
      </span>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-text uppercase tracking-wider">
          My Projects.
        </p>
        <h2 className="text-text-title font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
      {/* projects section  head */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-text text-base font-semibold max-w-3xl leading-[30px]"
        >
          Brief projects description and skill learned from the proccess
        </motion.p>
      </div>
      {/* project card */}
      <div className="mt-5  flex flex-wrap gap-7">
        {projects.map((project: IProject, index: number) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

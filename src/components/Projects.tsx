import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../motion";
import github from "../assets/github.png";
import { ProjectCard } from ".";
export interface IProject {
  name: string;
  description: string;
  tags: ITags[];
  image: string;
  source_code_link: string;
  index?:number
}
export interface ITags {
  name: string;
  color: string;
}
const projects: IProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: github,
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
      className="sm:px-16 px-6 sm:py-16 p-10 max-w-7xl mx-auto relative z-0"
    >
      <span className="sm:p-10" id="">
        &nbsp;
      </span>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Projects.
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
        <div className="w-full border-[1px] mb-3"/>
      </motion.div>
      {/* projects section  head */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-sm max-w-3xl leading-[30px]"
        >
          brief projects Description and skill learned from the proccess
        </motion.p>
      </div>
      {/* project card */}
      <div className="mt-20 flex flex-wrap gap-7">
{
projects.map((project:IProject, index:number) =>(
<ProjectCard
key={`project-${index}`}
{...project}
index={index}
/>
))
}
      </div>
    </motion.section>
  );
};

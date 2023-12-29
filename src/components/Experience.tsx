import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
// import { styles } from "../styles";
import { staggerContainer, textVariant } from "../motion";
import { ExperienceCard } from ".";
import alkemy from "../assets/alkemy.jpeg";
import software_manager from "../assets/software_manager.png"

export interface IExperience {
  title: string;
  company_name?: string;
  icon?: string;
  iconBg: string;
  date: string;
  points: string[];
}
const experiences: IExperience[] = [
  {
    title: "Fullstack Software Engineer",
    company_name: "Alkemy",
    icon: alkemy,
    iconBg: "#383E56",
    date: "January 2022 - November 2022",
    points: [
      "Developed the back end using Node.js and Express, creating RESTful APIs to facilitate seamless communication between the front end and server.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed and implemented the frontend using React, crafting user-friendly interfaces and interactive components",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Software Manager",
    icon: software_manager,
    iconBg: "#383E56",
    date: "February 2023 - July 2023",
    points: [
      "Collaborated with UX designers to translate wireframes and design concepts into responsive and visually appealing user interfaces.",
      "Utilized React Js to build interactive and dynamic UI components that improved user engagement",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Conducted user testing and gathered feedback to iterate on UI designs and enhance usability.",
      "Ensured consistent UI design across multiple devices and screen sizes through responsive design techniques.",
    ],
  },
];

export const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 max-w-7xl mx-auto relative z-0"
    >
      <span className="sm:p-10 lg:py-20" id="work">
        &nbsp;
      </span>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Experience so far.
        </p>
        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
        <div className="w-full border-[1px] mb-3"/>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: IExperience, index: number) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

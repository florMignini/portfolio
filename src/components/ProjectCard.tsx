import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { IProject, ITags } from ".";
import { fadeIn } from "../motion";
import github from "../assets/github.png";

export const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index=1,
}: IProject) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="black-gradient p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="project site"
                className="w-1/2 h-1/2 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
        {/* project description */}
        <div className="mt-5">
          <h3 className="text-text-title font-bold text-lg">{name}</h3>
          <p className="mt-2 h-[200px] text-ellipsis text-text text-base font-light">{description}</p>
        </div>
        {/* tech tags */}
        <div className="mt-3 flex flex-wrap items-center justify-evenly">
          {tags.map((tag: ITags) => (
            <p key={tag.name} className={`text-sm font-extrabold ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

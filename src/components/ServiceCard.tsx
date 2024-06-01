import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { serviceType } from ".";
import { fadeIn } from "../motion";

export const ServiceCard = ({ index, title, icon, content }: serviceType) => {
  return (
    <Tilt className="xs:w-[250px] w-full py-3 text-white">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[220px] flex justify-start items-start flex-col gap-6"
        >
          {/* top card section */}
         <div className="h-[40%] w-[100%] flex flex-col items-center justify-start text-text-title">
         <div className="w-[100%]">{icon}</div>
          <h3 className="w-[100%] text-lg font-bold text-start">{title}</h3>
         </div>
          {/* bottom card section */}
          <div className="h-[50%] w-[100%] flex flex-col items-center justify-start">
            <h6 className="text-sm font-light text-black">{content}</h6>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

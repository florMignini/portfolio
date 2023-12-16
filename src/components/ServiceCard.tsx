import { Tilt } from "react-tilt"
import {motion} from "framer-motion"
import { serviceType } from "."
import { fadeIn } from "../motion"
import { BackendIcon } from "../icons"

export const ServiceCard = ({index, title, icon}:serviceType) => {
  return (
    <Tilt
    className="xs:w-[250px] w-full"
    >
        <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
<div options={
{max:45,
scale:1,
speed:450,
}}
className="bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
>
  {icon}
  <h3
  className="text-white text-base font-bold text-center"
  >{title}</h3>
</div>
        </motion.div>
    </Tilt>
  )
}

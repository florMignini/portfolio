import { Tilt } from "react-tilt"
import {motion} from "framer-motion"
import { serviceType } from "."
import { fadeIn } from "../motion"

export const ServiceCard = ({index, title, icon}:serviceType) => {
  return (
    <Tilt
    className="xs:w-[250px] w-full"
    >
        <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >

        </motion.div>
    </Tilt>
  )
}

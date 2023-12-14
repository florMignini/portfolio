import Tilt from "react-tilt"
import {motion} from "framer-motion"
import { styles } from "../styles"
// import { ReactNode } from "react";
import { fadeIn, textVariant } from "../motion"
type serviceType = {
  title: string,
  icon: /* ReactNode */string,
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
    <div>About</div>
  )
}

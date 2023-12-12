import { motion } from "framer-motion";
import { styles } from "../styles";
import { Me } from "./canvas";
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="pl-16 lg:pl-0 flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-violet-500" />
          <div className="w-[2px] sm:h-80 h-40 violet-gradient" />
        </div>
        {/* info section */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <strong className="text-[#4f3cbf]">Florencia</strong></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer 
            <br className="sm:block hidden "/>
            fullstack web applications
          </p>
        </div>
        <Me/>
      </div>
    </section>
  );
};

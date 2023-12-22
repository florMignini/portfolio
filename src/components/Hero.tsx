import { styles } from "../styles";
import {  MeCanvas } from "./canvas";
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
        <div
          className="w-auto h-auto flex flex-col 
text-3xl
"
        >
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm <strong className="text-[#4f3cbf] ">Florencia.</strong>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineer fullstack <br className='sm:block hidden' />
            <small className="font-thin text-sm">I build exceptional and accessible digital experiences for the web.</small>
          </p>
        </div>
      </div>
      <MeCanvas />
    </section>
  );
};

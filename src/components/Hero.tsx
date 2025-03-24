import me from "../assets/meHero.jpg";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram.svg";
export const Hero = () => {
  /* section-  2xl:w-[80%] xl:bottom-0 md:top-[-12px] xl:top-0 flex items-center justify-center mx-auto */

  /*  */
  return (
    <section className="relative h-screen w-full top-0">
      {/* image */}
      <div className="absolute h-screen w-full flex items-center justify-right bottom-[10%] right-[15%]">
        <img src={me} alt="me-image" className="absolute w-auto  bg-auto right-0 md:bg-cover h-[80%] xl:h-[100%] bottom-0 rounded-lg" />
      </div>
      {/* text section */}
      <div className="absolute z-10 left-10 bottom-10 md:bottom-16 lg:h-screen mx-auto flex items-center justify-end gap-2 bg-transparent">
        <div className="w-1 h-32 bg-text" />

        <div className="flex flex-col items-center justify-center gap-2">
          {/* text */}
          <div className="flex items-center justify-end flex-col text-text">
            <h1 className="flex items-center text-5xl xl:text-6xl">Florencia Mignini</h1>
            <h3 className="flex items-center text-2xl xl:text-4xl font-light text-[rgb(112,95,147)]">
              Fullstack Software Engineer
            </h3>
          </div>
          {/* social media icons */}
          <div className="w-[90%] flex items-center justify-evenly">
            {/* github */}
            <a
              href="https://github.com/florMignini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#106CBA] hover:text-[#004587] text-sm font-semibold"
            >
              <img src={github} alt="github-logo" />
            </a>
            {/* twitter */}
            <a
              href="https://x.com/mariflor_la"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#106CBA] hover:text-[#004587] text-sm font-semibold"
            >
              <img src={twitter} alt="twitter-logo" />
            </a>
            {/* instagram */}
            <a
              href="https://www.instagram.com/flor.mignini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#106CBA] hover:text-[#004587] text-sm font-semibold"
            >
              <img src={instagram} alt="instagram-logo" />
            </a>
          </div>
        </div>
      </div>
      
    </section>

  );
};

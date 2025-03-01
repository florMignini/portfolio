import me from "../assets/front.png";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram.svg";
export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full 2xl:w-[80%] h-screen xl:bottom-0 md:top-12 xl:top-24 flex items-center justify-center mx-auto">

      {/* image */}
      <div className="absolute h-screen w-full flex items-center justify-right">
        <img src={me} alt="me-image" className="absolute w-auto  bg-auto right-0 md:bg-cover opacity-70 h-[80%] xl:h-[100%] bottom-0" />
      </div>
      {/* overlay option for improving legibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
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

import me from "../assets/front.png";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram.svg";
export const Hero = () => {
  return (
    <section className="relative top-40 flex items-center justify-center">
      {/* text section */}
      <div className="w-[60%] mx-auto flex items-center justify-end gap-2 bg-transparent">
        <div className="w-1 h-32 bg-text" />

        <div className="flex flex-col items-center justify-center gap-2">
          {/* text */}
          <div className="flex items-center justify-end flex-col text-text">
            <h1 className="flex items-center text-4xl">Florencia Mignini</h1>
            <h3 className="flex items-center text-xl font-light text-[rgb(112,95,147)]">
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
              href="https://github.com/florMignini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#106CBA] hover:text-[#004587] text-sm font-semibold"
            >
              <img src={twitter} alt="twitter-logo" />
            </a>
            {/* instagram */}
            <a
              href="https://github.com/florMignini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#106CBA] hover:text-[#004587] text-sm font-semibold"
            >
              <img src={instagram} alt="instagram-logo" />
            </a>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="w-[80%] flex items-center justify-start">
        <img src={me} alt="me-image" className="opacity-70" />
      </div>
    </section>
  );
};

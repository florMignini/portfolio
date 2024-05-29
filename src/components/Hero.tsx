import { styles } from "../styles";
import me from "../assets/me-hero.png";
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-blur black-gradient text-black">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="absolute left-28 lg:pl-0 flex flex-col justify-center items-center top-24">
        </div>
        {/* info section */}
        <div
          className="h-[80%] w-fill absolute left-36 bottom-5 flex flex-col gap-5 
text-3xl
"
        >
          <h1 className="text-5xl font-bold mt-5">
            Hi, I'm <strong className="text-[#4f3cbf] ">Florencia.</strong>
          </h1>
          <h3 className="text-3xl font-bold mt-2 text-[#692cee]">
            Software Engineer Fullstack <br className="sm:block hidden" />
          </h3>
            <small className="w-[70%] font-thin text-lg">
              I love to build beautiful, intuitive and accessible digital experiences with effective usability for the
              web.
            </small>
        </div>

        <img src={me} alt="me-hero-image" className="h-[80%] w-fill absolute right-64 bottom-24" />
      </div>
    </section>
  );
};

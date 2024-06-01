import { styles } from "../styles";
import me from "../assets/github.png";
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-blur bg-background text-black">
      <div
        className={`${styles.paddingX} absolute inset-0 top-48 w-[100%] mx-auto flex flex-row items-start gap-5`}
      >
        {/* hero upper section */}
        <div
          className="h-[80%] w-[50%] absolute left-1 top-0 flex flex-col gap-5 
text-3xl text-text-title text-end
"
        >
          <div className="w-[95%]">
            <h1 className="text-5xl font-light ">
              Hi, I'm <strong className="text-bold text-6xl">Florencia.</strong>
            </h1>
            <h3 className="w-[100%]  text-3xl font-bold mt-5 text-text">
              Software Engineer Fullstack <br className="sm:block hidden" />
            </h3>
          </div>
          <small className="w-[100%] font-thin text-base text-text">
            I love to build beautiful, intuitive and accessible digital
            experiences with effective usability for the web.
          </small>
        </div>

        <img
          src={me}
          alt="me-hero-image"
          className="h-[80%] w-[60%] absolute object-contain right-1"
        />
      </div>
    </section>
  );
};

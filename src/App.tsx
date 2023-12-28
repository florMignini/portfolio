import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // FeedBack,
  Hero,
  Navbar,
  // StarsCanvas,
  TechStack,
  Projects,
} from "./components";





export const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-10">
          <Navbar />
          <Hero />
        </div>
       <div className="relative z-0 bg-section-texture">
       <About />
        <Experience />
        <TechStack />
<<<<<<< HEAD
        <Projects />
=======
       </div >
       <div className="relative z-0 bg-project-bg">
       <Projects />
>>>>>>> contact-section
       </div>
        {/* <FeedBack /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

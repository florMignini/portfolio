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
      <div className="relative z-0 min-h-screen bg-section-texture">
        <div className="bg-[#010101] w-full">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0 top-3">
          <About />
          <Experience />
          <TechStack />
        </div>
        <div className="relative z-0">
          <Projects />
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

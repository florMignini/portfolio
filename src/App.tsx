import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // FeedBack,
  Hero,
  Navbar,
  StarsCanvas,
  TechStack,
  Projects,
} from "./components";





export const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <TechStack />
        <Projects />
        {/* <FeedBack /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

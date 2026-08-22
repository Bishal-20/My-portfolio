import {BrowserRouter} from "react-router-dom";
import LazyCanvasSection from "./components/LazyCanvasSection";

import {About, Contact, Experience,Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
const App =() => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero/>
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
              <LazyCanvasSection>
                <StarsCanvas />
            </LazyCanvasSection>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App

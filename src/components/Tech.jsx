// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import LazyCanvasSection from "./LazyCanvasSection";

// const Tech = () => {
//     console.log(
//     technologies.map((tech) => ({
//       name: tech.name,
//       icon: tech.icon,
//     }))
//   );
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <LazyCanvasSection>
//           <BallCanvas icon={technology.icon} />
//           </LazyCanvasSection>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

// Tech.jsx
import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex items-center justify-center' key={technology.name}>
          {isMobile ? (
            <img
              src={technology.icon}
              alt={technology.name}
                className={`w-16 h-16 object-contain ${
                  technology.needsLightBg ? "bg-white rounded-full p-2" : ""
                }`}
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
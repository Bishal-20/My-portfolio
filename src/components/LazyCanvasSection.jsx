import React, { useEffect, useRef, useState } from "react";

const LazyCanvasSection = ({ children, placeholderClassName = "" }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={placeholderClassName} style={{ width: "100%", height: "100%" }}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyCanvasSection;
import React, { useRef, useEffect } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const circleRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Lerp (smooth interpolation)
      currentX.current += (mouseX.current - currentX.current) * 0.18;
      currentY.current += (mouseY.current - currentY.current) * 0.18;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor-circle" ref={circleRef}></div>;
};

export default CursorFollower;

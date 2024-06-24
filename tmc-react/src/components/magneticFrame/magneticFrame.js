// src/components/MagneticFramer.js

import React, { useRef, useEffect } from "react";
import styles from "./magneticFrame.css";

const MagneticFramer = ({ children }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
      const button = buttonRef.current;
      button.style.transform = "translate(0, 0)";
    };

    const button = buttonRef.current;
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="magnetic-button" ref={buttonRef}>
      {children}
    </div>
  );
};

export default MagneticFramer;

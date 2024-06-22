import React, { useState, useEffect } from "react";
import logo1 from "../../src/Asset/qad/lo1.png";
import logo2 from "../../src/Asset/qad/lo2.png";
import logo3 from "../../src/Asset/qad/logo4.png";

const images = [logo1, logo2, logo3];

function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={currentImage}
        alt="Product Gallery"
        style={{ width: "60%", height: "80%" }}
      />
    </div>
  );
}

export default ImageSwapper;

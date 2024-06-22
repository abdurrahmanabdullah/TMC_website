import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Card from "./card/card";
import styles from "../App.css";

import a1 from "./../Asset/home/client_partner/c1.png";
import a2 from "./../Asset/home/client_partner/c2.png";
import a3 from "./../Asset/home/client_partner/c3.png";
import a4 from "./../Asset/home/client_partner/c4.png";
import a5 from "./../Asset/home/client_partner/c5.png";
const images = [a1, a2, a3, a4, a5];
const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true, // Add fade animation
};
const endpoints = ["lucentchart", "nursecall", "qbot", "qad"];
const Product = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          "https://api.strapi.transworldbd.com/api/homes"
        );
        const data = await response.json();
        setProductData(data.data[0]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    ///heading section
    <animated.div style={fade}>
      {productData && (
        <div style={{ flex: 1, paddingInline: "5%" }}>
          <h1
            style={{
              fontFamily: "Myriad Pro Regular",
              fontWeight: "bolder",
              fontSize: 40,
              textAlign: "center",

              color: "#3E8B94",
              marginBottom: "50px",
              marginTop: "70px",
            }}
          >
            {productData.attributes.heading}
          </h1>
          <p style={{ textAlign: "center" }}>
            {productData.attributes.subheading}
          </p>

          {/* Space between heading and image slider */}
          <div style={{ marginBottom: "50px" }}></div>
          {/* Image Slider */}
          <Slider
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productData.attributes.slider.data.map((slide) => (
              <div key={slide.id} style={{ width: "100%", height: "100%" }}>
                <img
                  src={`https://api.strapi.transworldbd.com${slide.attributes.url}`}
                  alt={slide.attributes.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </Slider>
          {/* Space between image slider and card section */}
          <div style={{ marginBottom: "40px" }}></div>
          {/* Card Section */}

          <div>
            {productData.attributes.card.map((card, index) => (
              <Card
                title={<div className="title-bold-center">{card.title}</div>}
                subtitle={<div className="subtitle">{card.subtitle}</div>}
                button={
                  <div className="button-center">
                    {card.button && (
                      <a
                        href={`https://transworldbd.com/product/${endpoints[index]}`}
                      >
                        {card.button}
                      </a>
                    )}
                  </div>
                }

                // subhead={
                //   <div className="button-center">
                //     {" "}
                //     {card.button && (
                //       <a href="https://transworldbd.com/index.php/products/productive-office">
                //         {card.button}
                //       </a>
                //     )}{" "}
                //   </div>
                // }
                // button={<button className="button-center">Click me</button>}

                // button={<div>{card.button} </div>}
              />
            ))}
          </div>

          {/* Additional Images */}
          <div className="additional-images" style={{ marginTop: "3%" }}>
            {productData.attributes.images.data.map((image, index) => (
              <img
                key={image.id}
                src={`
                  https://api.strapi.transworldbd.com${image.attributes.url}`}
                alt={image.attributes.name}
                style={{
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "23px",
                }}
              />
            ))}
          </div>

          {/* <div style={{ marginLeft: "9%", marginTop: "2%" }}>
            <div className="additional-images">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Local image ${index + 1}`}
                  style={{
                    borderRadius: "10px",
                    margin: "10px",
                    padding: "7%",
                  }}
                />
              ))}
            </div>
          </div> */}
        </div>
      )}
    </animated.div>
  );
};

export default Product;

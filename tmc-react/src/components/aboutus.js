import React, { useState, useEffect } from "react";
import styles from "../App.css";
import a1 from "./../Asset/home/client_partner/c1.png";
import a2 from "./../Asset/home/client_partner/c2.png";
import a3 from "./../Asset/home/client_partner/c3.png";
import a4 from "./../Asset/home/client_partner/c4.png";
import a5 from "./../Asset/home/client_partner/c5.png";
// import a6 from "./../Asset/home/client_partner/c7.png";
// import a7 from "./../Asset/home/client_partner/dorbar.png";
// import a8 from "./../Asset/home/client_partner/getko.png";
import a9 from "./../Asset/home/client_partner/c8.png";
const images = [a1, a2, a3, a4, a5, a9];
const About = () => {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [footer, setFooter] = useState("");
  const coreapi = "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from about-uses API
        const aboutUsResponse = await fetch(
          "https://api.strapi.transworldbd.com/api/about-uses?populate=*"
        );
        const aboutUsData = await aboutUsResponse.json();
        setAboutUsData(aboutUsData.data[0]);

        // Fetch additional images from homes API
        const homesResponse = await fetch(
          "https://api.strapi.transworldbd.com/api/homes"
        );
        const homesData = await homesResponse.json();
        if (homesData.data && homesData.data.length > 0) {
          const images = homesData.data[0].attributes.images.data;
          const footerText = homesData.data[0].attributes.footer;
          setAdditionalImages(images);
          setFooter(footerText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ paddingInline: "3%" }}>
      <div style={{ paddingBlock: "4%" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#050505",
            fontFamily: "Barlowsans-serif",
            fontSize: "45px",
          }}
        >
          Our Story{" "}
        </h2>
        <p
          style={{
            textAlign: "justify",
            color: "#010101",
            fontFamily: "Barlowsans-serif",
            fontSize: "20px",
            paddingInline: "6%",
            paddingTop: "3%",
          }}
        >
          In the heart of Metropolis,Transworld Mercantile Corporation, a team
          of 25 tech enthusiasts, pioneers innovation through bespoke software
          solutions and expert consultancy. With a commitment to excellence,
          they empower businesses to thrive in the digital era, leveraging
          cutting-edge technology and unwavering dedication. Their journey is
          marked by transformative projects, fueled by integrity, innovation,
          and collaboration, shaping a future .
        </p>
      </div>
      {aboutUsData && aboutUsData.attributes && (
        <div>
          {aboutUsData.attributes.content.map((item) => (
            <div
              key={item.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                flex: 1,
                marginLeft: "70px",
                marginRight: "70px",
              }}
            >
              <h2
                style={{
                  fontWeight: "normal",
                  fontSize: "24px",
                  color: "#333",
                }}
              >
                {item.heading}
              </h2>
              <div className="text-typing">
                <p
                  style={{
                    fontFamily: "Barlowsans-serif",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}

          {/* Additional Images */}
          {additionalImages.length > 0 && (
            <div className="additional-images">
              {additionalImages.map((image) => (
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
          )}

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
    </div>
  );
};

export default About;

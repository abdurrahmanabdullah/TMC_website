import React, { useState, useEffect } from "react";
import Card from "./card/card";
import styles from "../App.css";
import Slider from "react-slick";
import CountUp from "react-countup";

import coreurl from "../components/core_url/coreurl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo1 from "../Asset/home/logo/logo1.png";
import Logo2 from "../Asset/home/logo/logo2.png";
import Logo3 from "../Asset/home/logo/logo3.png";
import Logo4 from "../Asset/home/logo/logo4.jpeg";
import Logo5 from "../Asset/home/logo/logo5.png";
import Logo6 from "../Asset/home/logo/logo6.png";
import clienfeedbackimg from "../Asset/home/feedback2.png";
import Background from "../Asset/home/background.png";
import itemimg from "../Asset/home/HSS landing page content.png";
import Consultantimg from "../Asset/home/consultancy.jpeg";
import { Circle } from "@mui/icons-material";
import c1 from "../Asset/home/client_partner/c1.png";
import c2 from "../Asset/home/client_partner/c2.png";
import c3 from "../Asset/home/client_partner/c3.png";
import c4 from "../Asset/home/client_partner/c4.png";
import c5 from "../Asset/home/client_partner/c5.png";
import c6 from "../Asset/home/client_partner/kaji.png";
import c7 from "../Asset/home/client_partner/c7.png";
import c8 from "../Asset/home/client_partner/robi.png";
import c9 from "../Asset/home/client_partner/bongo.png";
import c10 from "../Asset/home/client_partner/ideal.png";
import c11 from "../Asset/home/client_partner/icon.png";
import c12 from "../Asset/home/client_partner/incepta.png";
import c13 from "../Asset/home/client_partner/ispahani.jpg";

const logosData = [
  { logo: Logo1, title: "Experience", time: "20" },
  { logo: Logo2, title: "IT Professional", time: "25" },
  { logo: Logo3, title: "Projects Completed", time: "60" },
  { logo: Logo4, title: "Flagship Products", time: "10" },
  { logo: Logo5, title: "Happy Clients", time: "40" },
  { logo: Logo6, title: "Tech Partners", time: "5" },
];

// /---------------- slider scroll
const clientimg = [c1, c2, c3, c4, c8, c9, c10, c11, c12, c13];
const partnerimg = [c6, c7, c5];
const highlighted1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000,
};

const highlighted2 = {
  dots: true,

  slidesToShow: 4,
};

const Product = () => {
  return (
    <div style={{ paddingInline: "6%" }}>
      <Row
        className="Hero"
        style={{
          padding: "70px",
          position: "relative",
          overflow: "hidden",
          marginTop: "1%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
            opacity: 0.5,
            zIndex: "-1",
          }}
        ></div>
        <Col style={{ display: "block", width: 150, marginLeft: "10px" }}>
          <div style={{ marginRight: "30px" }}>
            <h1 style={{ fontSize: "42px" }}>
              Transworld Mercantile Corporation(TMC)
            </h1>
            <h4>Your Customeized Solutions Provider</h4>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "140px", marginTop: "5%" }}>
            <p style={{ textAlign: "justify" }}>
              Welcome to Transworld Mercantile Corporation (TMC), where
              innovation meets excellence in software development. As a dynamic
              and forward-thinking company, we embark on a mission to redefine
              the digital landscape through cutting-edge solutions tailored to
              meet the diverse needs of our clients.
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ paddingLeft: "2%", marginTop: "30px" }}>
        {logosData.map((item, index) => (
          <Col key={index} md={6}>
            <div className="Home-vital-card">
              <div className="vital-card-content row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="logo">
                    <img
                      style={{ maxWidth: "60%", borderRadius: "20%" }}
                      src={item.logo}
                      alt={`logo${index + 1}`}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-bod" style={{ padding: "5%" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      <span
                        style={{
                          color: "#7F97B4",
                          fontWeight: "bolder",
                          fontSize: "30px",
                          marginLeft: "20%",
                        }}
                      >
                        <CountUp end={item.time} duration={8} />
                        <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                          +
                        </span>
                      </span>
                      <br />

                      <span
                        style={{
                          whiteSpace: "nowrap",
                          paddingBlock: "10%",
                          paddingInline: "10%",
                        }}
                      >
                        {item.title}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div
        className="hero-image"
        style={{ paddingInline: "2%", marginTop: "40px" }}
      >
        <img
          style={{ width: "100%", color: "#D4D4D4" }}
          src={itemimg}
          alt={"No image"}
        />
      </div>

      <div className="client-feedback">
        <img
          style={{
            width: "100%",
            paddingInline: "2%",
            marginTop: "40px",
          }}
          src={clienfeedbackimg}
        />
      </div>

      <div className="clientlogo" style={{ paddingInline: "2%" }}>
        <div className="highlight client">
          <h2
            style={{
              textAlign: "center",
              paddingBlock: "2%",
            }}
          >
            OUR FEATURED CLIENTS
          </h2>

          <div className="">
            <div className="mt-20">
              <Slider {...highlighted1}>
                {clientimg.map((url, index) => (
                  <div key={index} className="">
                    {/* <a href="#" className=""></a> */}
                    <img
                      style={{ width: "40%", height: "40%" }}
                      src={url}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

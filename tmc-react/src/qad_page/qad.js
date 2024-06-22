import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../qad_page/qad.css";
import logo1 from "../../src/Asset/qad/q1.png";
import logo2 from "../../src/Asset/qad/q2.png";
import logo3 from "../../src/Asset/qad/qlogo.png";
import logo4 from "../../src/Asset/qad/logo4.png";
import logo41 from "../../src/Asset/qad/Qbanner.png";
import logo5 from "../../src/Asset/qad/lo2.png";
import img from "../../src/Asset/qad/4kimage.png";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pdfview from "../components/pdf_file/kiosk product datasheet 24 .pdf";
import "react-animated-slider/build/horizontal.css";
// import ImageSwapper from "./imageslide";
// import Sliderr from "react-animated-slider";
// clientslider imgage

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

import c1 from "../../src/Asset/clientlogo/client1.png";
import c2 from "../../src/Asset/clientlogo/client2.png";
import c3 from "../../src/Asset/clientlogo/client3.png";
import c4 from "../../src/Asset/clientlogo/client4.png";
import c5 from "../../src/Asset/clientlogo/client5.png";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { width } from "@mui/system";
const images = [logo1, logo2, logo3, logo4, logo5, logo41, img];
function Qad() {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" onClick={onClick}>
        <FaChevronLeft style={{ color: "blue" }} />
      </div>
    );
  };
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const clientUrls = [c1, c2, c3, c4, c5];
  const highlighted = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  // function handleImageClick(imageUrl) {

  //   const modal = document.createElement("div");
  //   modal.classList.add("modal");

  //   const img = document.createElement("img");
  //   img.src = imageUrl;
  //   img.classList.add("modal-content");

  //   modal.appendChild(img);

  //   document.body.appendChild(modal);

  //   modal.addEventListener("click", () => {
  //     modal.remove();
  //   });
  // }

  return (
    <div style={{ marginLeft: "120px", marginRight: "120px", marginTop: "2%" }}>
      <img
        style={{
          width: "100%",
          height: "450px",
          paddingLeft: "20px",
        }}
        src={logo3}
        alt="Qbot Image"
      />

      <Row style={{ paddingLeft: "5%", marginTop: "2%" }}>
        <Col xs={12} lg={6} style={{ marginBottom: "20px" }}>
          <div>
            <h2
              style={{
                whiteSpace: "nowrap",
                textAlign: "center",
                marginBottom: "2%",
              }}
            >
              About Qad
            </h2>
            <p style={{ textAlign: "justify" }}>
              Digital Signage (Qad) is a product of Transworld Mercantile
              Corporation that uses digital displays to showcase multimedia
              content in public spaces. It is commonly used for advertising and
              information display purposes and can be managed remotely through a
              centralized content management system. This solution is developed
              to help businesses enhance their brand image and improve customer
              engagement. Using our TV screen solution, you can show your
              content on one or many screens placed on a wall. This is good for
              space saving and ideal for many locations. You can show pictures,
              multimedia content, or other relevant content on the screen. Our
              stand-alone Signage Players combined with Digital Screens can
              bring your customer areas to life help you in marketing and boost
              your organization’s image.
            </p>
          </div>
        </Col>

        <Col xs={12} lg={6} className="text-center">
          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            <img
              style={{ width: "60%", maxWidth: "100%" }}
              src={logo4}
              alt="Qbot Image"
            />
          </div>
        </Col>
      </Row>

      <div className="system-work">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          How Our Cloud Based System Works
        </h1>
        <img
          style={{ width: "100%", height: "100%", marginBottom: "5%" }}
          src={logo2}
          alt="Qbot Image"
        />
      </div>

      {/* //------qad  feature */}

      <Row>
        <Col xs={12} md={8}>
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: "50px",
              fontFamily: "Times New Roman",
              textAlign: "center",
            }}
          >
            Digital Signage Solution (Qad) will have the following features
          </h1>
        </Col>
        <Col xs={12} md={4}>
          <div className="advace-card">
            <div className="advace-card-content">
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "4rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    01
                  </span>
                  Precision
                </h2>
              </div>
              <div className="card-body">
                <p>
                  The advantage of using unique charts for accurate assessment
                  in adult examinations will ensure you get accurate results.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* //2nd row ----------- */}
      <Row style={{ padding: "10px" }}>
        <Col xs={12} md={4}>
          <div className="advace-card">
            <div className="advace-card-content">
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "4rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    02
                  </span>
                  Flexibility
                </h2>
              </div>
              <div className="card-body">
                <p>
                  These system allow for easy adjustment of optotype size
                  contrast, and presentation formate.This flexibility enables
                  customized testing for patient.
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="advace-card">
            <div className="advace-card-content">
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "4rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    03
                  </span>
                  Standardization
                </h2>
              </div>
              <div className="card-body">
                <p>
                  D​igital acuity systems adhere to standardized testing
                  protocols, ensuring consistency and reliability in visual
                  acuity measurements across different settings and
                  practitioners.
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="advace-card">
            <div className="advace-card-content">
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "4rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    04
                  </span>
                  Enhancement
                </h2>
              </div>
              <div className="card-body">
                <p>
                  Our solution will help you with a more accurate and
                  comprehensive digital acuity assessment that applies to both
                  children and adults and give comprehensive results.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* // 3rd row---------- */}
      <Row style={{ padding: "10px" }}>
        <Col xs={12} md={4}>
          <div className="advace-card-23">
            <div className="advace-card-content">
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "4rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    05
                  </span>
                  Innovative
                </h2>
              </div>
              <div className="card-body">
                <p>
                  Lucent Charts has new pediatric images and videos to help test
                  even just-talking babies.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="Qad-advace-card-32">
            <div
              className="Qad-advace-card-content"
              style={{ padding: "10px" }}
            >
              <div className="card-title">
                <h2 style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#E71616",
                      marginRight: "10rem",
                      marginLeft: "5%",
                      fontFamily: "New Rocker",
                      fontSize: "25px",
                    }}
                  >
                    06
                  </span>
                  Patient Engagement
                </h2>
              </div>
              <div className="card-body">
                <p style={{ textAlign: "justify" }}>
                  The interactive nature of digital acuity testing can enhance
                  patient engagement and participation, especially among younger
                  patients or those familiar with technology.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <div style={{ marginTop: "30px", marginBottom: "10px" }}></div>
      </div>

      <div className="container" style={{ marginBottom: "5%" }}>
        <div className="row">
          {/* First Card */}

          <div className="col-12 col-md-6 mb-4">
            <div
              className="card"
              style={{
                background: "linear-gradient(180deg, #e5e5e5 0%, #beb2f0 100%)",
                width: "25rem",
                height: "35rem",
                position: "relative",
              }}
            >
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <img
                    className="card-img-top"
                    src={logo4}
                    alt="Qbot Image"
                    style={{
                      width: "20rem",
                      height: "100%",
                      display: "block",
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="card-text">NASIRQAD50(50')</h5>
                <h5 className="card-text">Floor Standing Kiosk </h5>
                <a href={pdfview} target="_blank" rel="noreferrer">
                  <button
                    style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.3s ease",
                      marginLeft: "35%",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#0056b3")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#007bff")
                    }
                  >
                    <h1 style={{ fontSize: "16px", margin: 0 }}>More Info</h1>
                  </button>
                </a>
              </div>
              <img
                className="card-img-top"
                src={img}
                alt="Qbot Image"
                style={{
                  width: "25%",
                  height: "15%",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}
              />
            </div>
          </div>
          {/* //// second card */}
          <div className="col-12 col-md-6 mb-4">
            <div
              className="card"
              style={{
                background: "linear-gradient(180deg, #e5e5e5 0%, #beb2f0 100%)",
                width: "25rem",
                height: "35rem",
              }}
            >
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <img
                    className="card-img-top"
                    src={logo4}
                    alt="Qbot Image"
                    style={{
                      width: "20rem",
                      height: "100%",

                      display: "block",
                    }}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="card-text">NASIRQAD55(55')</h5>
                <h5 className="card-text">Floor Standing Kiosk </h5>

                <button
                  style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.3s ease",
                    marginLeft: "35%",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0056b3")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#007bff")
                  }
                >
                  <h1 style={{ fontSize: "16px", margin: 0 }}>More Info</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Product_media">
        <h2 style={{ textAlign: "center" }}>product Gallery</h2>
        <div className="Gadditional-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              style={{
                borderRadius: "10px",
                margin: "10px",
                padding: "23px",
              }}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        </div> */}
      {/* <Sliderr
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {clientUrls.map((url, index) => (
            <div key={index} style={{ width: "50%" }}>
            
              <div style={{ width: "70%", height: "80%", marginLeft: "50%" }}>
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </Sliderr> */}

      {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <ImageSwapper />
        </div> */}

      {/* /// highlight client */}
      {/* <hr style={{ margin: "10px auto", width: "50%" }} /> */}

      <hr style={{ margin: "10px  " }} />
      <div className="highlight client">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Highlighted Client List
        </h2>
        <hr style={{ margin: "30px 0" }} />
        <div className="">
          <div className="mt-20">
            <Slider {...highlighted}>
              {clientUrls.map((url, index) => (
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
      <hr style={{ margin: "50px 0" }} />
    </div>
  );
}

export default Qad;

import React from "react";
import Button from "react-bootstrap/Button";
import styles from "../Qbanner_page/Qbanner.css";
import qbanner from "../../Asset/qbanner/Qbanner.png";
import logoo from "../../Asset/qbanner/Qbanner product.png";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import pdfview from "../components/pdf_file/kiosk product datasheet 24 .pdf";
import "react-animated-slider/build/horizontal.css";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

import c1 from "../../Asset/clientlogo/client1.png";
import c2 from "../../Asset/clientlogo/client2.png";
import c3 from "../../Asset/clientlogo/client3.png";
import c4 from "../../Asset/clientlogo/client4.png";
import c5 from "../../Asset/clientlogo/client5.png";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { width } from "@mui/system";

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
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ marginLeft: "120px", marginRight: "120px", marginTop: "2%" }}>
      <img
        style={{
          width: "100%",
          height: "450px",
          paddingLeft: "20px",
        }}
        src={qbanner}
        alt="Qbot Image"
      />

      <Row style={{ paddingLeft: "5%", marginTop: "2%" }}>
        <Col xs={12} lg={6} style={{ marginBottom: "20px" }}>
          <div style={{ marginRight: "30px" }}>
            <h2
              style={{
                whiteSpace: "nowrap",
                textAlign: "center",
                marginBottom: "2%",
              }}
            >
              About Qbanner
            </h2>
            <p style={{ textAlign: "justify" }}>
              Discover the power of modern digital signage with our QBANNER
              Digital X Stand. Designed to meet the versatile needs of
              businesses, our digital stand boasts a sleek design, robust
              features, and unmatched portability. With QBANNER’s centralized
              admin panel, you can effortlessly control multiple branches from a
              single interface. Ensure consistent messaging and efficient
              management of your digital signage network. Take advantage of our
              limited-time offer! Get 10% off on the QBANNER Digital X Stand
              when you purchase in June. Don’t miss out on the lowest price
              possible – just 70K BDT. Every QBANNER Digital X Stand comes with
              a one-year warranty, providing peace of mind and ensuring your
              investment is protected. Our dedicated support team is always
              ready to assist you with any questions or issues.
            </p>
          </div>
        </Col>

        <Col xs={12} lg={6} className="text-center">
          <div
            style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            <img
              style={{ width: "40%", maxWidth: "100%" }}
              src={logoo}
              alt="Qbot Image"
            />
          </div>
        </Col>
      </Row>

      {/* //------qad  feature */}

      <div className="Advance-lucent-chart" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "50px",
                fontFamily: "Times New Roman",
                textAlign: "center",
              }}
            >
              QBANNER Digital X Stand will have the following features
            </h1>
          </div>
          <div className="col-xs-12 col-md-4">
            <Col md={8}>
              <div className="Q-advace-card">
                <div className="Q-advace-card-content">
                  <div className="card-body">
                    <p>
                      43" FHD Display: Crisp and clear visuals to captivate your
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>

        {/* //2nd row ----------- */}

        <div className="row" style={{ padding: "10px" }}>
          <Col md={4}>
            <div className="Q-advace-card">
              <div className="Q-advace-card-content">
                <div className="card-body">
                  <p>
                    43" FHD Display: Crisp and clear visuals to captivate your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="Q-advace-card">
              <div className="Q-advace-card-content">
                <div className="card-body">
                  <p>
                    43" FHD Display: Crisp and clear visuals to captivate your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <div className="col-xs-12 col-md-4">
            <Col md={8}>
              <div className="Q-advace-card">
                <div className="Q-advace-card-content">
                  <div className="card-body">
                    <p>
                      43" FHD Display: Crisp and clear visuals to captivate your
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
        {/* // 3rd row---------- */}

        <div className="row" style={{ padding: "10px" }}>
          <Col md={4}>
            <div className="Q-advace-card">
              <div className="Q-advace-card-content">
                <div className="card-body">
                  <p>
                    43" FHD Display: Crisp and clear visuals to captivate your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="Q-advace-card1">
              <div className="Q-advace-card-content">
                <div className="card-body">
                  <p>
                    43" FHD Display: Crisp and clear visuals to captivate your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
      <div></div>

      {/* ///Product gallery */}
      {/* <div className="product_gallery">
        <h2 style={{ textAlign: "center" }}>Photo Gallery</h2>
        <div></div>
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

import React from "react";
import logo from "../../src/Asset/qbot.png";
import logo1 from "../../src/Asset/qbot1.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComponent from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import SliderImage1 from "../../src/Asset/slideImg/slider.png";
import SliderImage2 from "../../src/Asset/slideImg/slider1.png";
import SliderImage3 from "../../src/Asset/slideImg/slider3.png";
import SliderImage4 from "../../src/Asset/slideImg/slider4.png";
import styles from "../qbot_page/qbot.css";

import key1 from "../../src/Asset/Key_component/key1.png";
import key2 from "../../src/Asset/Key_component/key2.png";
import key3 from "../../src/Asset/Key_component/key3.png";
import key4 from "../../src/Asset/Key_component/key4.png";
import key5 from "../../src/Asset/Key_component/key5.png";
import Redefine from "../../src/Asset/qbot_redefine.png";
/// vital image import
import Logo1 from "../../src/Asset/vital/logo1.png";
import Logo2 from "../../src/Asset/vital/logo2.png";
import Logo3 from "../../src/Asset/vital/logo3.png";
import Logo4 from "../../src/Asset/vital/logo4.png";
import Logo5 from "../../src/Asset/vital/logo5.png";
import Logo6 from "../../src/Asset/vital/logo6.png";
import Logo7 from "../../src/Asset/vital/logo7.png";
import Logo8 from "../../src/Asset/vital/logo8.png";

// clientslider imgage

import c1 from "../../src/Asset/clientlogo/client1.png";
import c2 from "../../src/Asset/clientlogo/client2.png";
import c3 from "../../src/Asset/clientlogo/client3.png";
import c4 from "../../src/Asset/clientlogo/client4.png";
import c5 from "../../src/Asset/clientlogo/client5.png";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Qbot() {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" onClick={onClick}>
        <FaChevronRight
          style={{
            color: "blue",
            marginLeft: "auto", // Pushes the icon to the right
            marginRight: "auto", // Pushes the icon to the left
            marginBottom: "50%",
            justifySelf: "center", // Aligns horizontally to center within the container
            alignSelf: "center",
          }}
        />
      </div>
    );
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

  const ImageSlider = () => {
    const imageUrls = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

    return (
      <div style={{ marginLeft: "120px", marginRight: "120px" }}>
        <Row style={{ paddingLeft: "5%", marginTop: "2%" }}>
          <Col xs={12} lg={6} style={{ marginBottom: "20px" }}>
            <div style={{ marginRight: "30px" }}>
              <img style={{ width: "40%" }} src={logo} alt="Qbot Image" />
              <h2 style={{ whiteSpace: "nowrap" }}>
                A Queue Management Solution
              </h2>
              <p style={{ textAlign: "justify", marginBottom: "30px" }}>
                A queue management system is a technological solution that
                streamlines the customers' queuing experience and controls the
                flow of people in your service facility or business. It ensures
                that you serve the customers in the right order and efficiently;
                ultimately enhancing their experience. Typically, a queuing
                system manages the waiting experience of your customers
                throughout all the touchpoints with your business.
              </p>
            </div>
          </Col>

          <Col xs={12} lg={6} className="text-center">
            <div style={{ marginLeft: "140px", marginTop: "15%" }}>
              <img style={{ width: "80%" }} src={logo1} alt="Qbot Image" />
            </div>
          </Col>
        </Row>

        <div>
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>
            Journey of Qbot
          </h2>

          <div style={{ marginTop: "20px", marginBottom: "80px" }}>
            <SliderComponent {...settings}>
              {imageUrls.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </SliderComponent>
          </div>
        </div>
        {/* //card section */}
        <div>
          <Row>
            {/* First Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Customer Arrives at the Kiosk</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      The customer approaches the kiosk and selects the "Main
                      Service" option from the available choices displayed on
                      the touchscreen interface.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/* Second Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Selection of Service-Related Sub-Category</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      After selecting the main service, the customer is prompted
                      to choose a specific sub-category related to the service
                      they require. They make their selection from the options
                      provided.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/* Third Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Token Generation</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      Once the customer has selected the sub-category, the token
                      management system generates a unique token number for
                      them. This token number is then printed on a physical
                      ticket, which the customer receives from the kiosk.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* ////////////////////------------------second row  */}

          <Row style={{ marginTop: "20px" }}>
            {/* First Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Display of Token Status on TV Application</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      Simultaneously, the token number and its status (such as
                      waiting, in service, completed) are displayed on a TV
                      screen or monitor within the service area. This allows
                      both customers and staff to track the progress of tokens.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/* Second Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Automated Voice Call</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      When it's the customer's turn to be served, an automated
                      voice system calls out their token number and indicates
                      the assigned counter where they should proceed. For
                      example, the voice might say, "Now serving token number
                      A123 at counter 3."
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            {/* Third Card */}
            <Col md={4}>
              <div className="Q-card">
                <div className="Q-card-content">
                  <div className="card-title">
                    <h2>Customer Proceeds to Counter</h2>
                  </div>
                  <div className="card-body">
                    <p>
                      Upon hearing their token number being called, the customer
                      proceeds to the designated counter to receive the service
                      they requested.The counter staff greets the customer with
                      a friendly smile and verifies their token number.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* ///--------------key component */}
        <div>
          <h2
            style={{
              textAlign: "center",

              marginTop: "80px",
              marginBottom: "40px",
            }}
          >
            Key Components
          </h2>

          <div>
            <Row>
              <Col md={2}>
                {/* <div className="key-Card">
                  <div className="Q-card-content"> */}
                <div className="card-img">
                  <img
                    style={{
                      width: "10rem",
                      display: "block",
                    }}
                    src={key1}
                    alt="Kiosk"
                  />
                  {/* </div> */}
                  <div className="key-card-body">
                    <p>Token Dispenser Kiosk Unit</p>
                  </div>
                  {/* </div> */}
                </div>
              </Col>
              {/* //second  */}
              <Col style={{ marginRight: "65px" }} md={2}>
                {/* <div className="key-Card">
                  <div className="Q-card-content"> */}
                <div className="card-img">
                  <img
                    style={{
                      width: "13.5rem",
                      display: "block",
                      margin: "auto",
                    }}
                    src={key2}
                    alt="Kiosk"
                  />
                  {/* </div> */}
                  <div className="key-card-body">
                    <p>RGB LED Matrix Counter Display</p>
                  </div>
                  {/* </div> */}
                </div>
              </Col>

              {/* //third  */}
              <Col style={{ marginRight: "65px" }} md={2}>
                {/* <div className="key-Card">
                  <div className="Q-card-content"> */}
                <div className="card-img">
                  <img
                    style={{
                      width: "18rem",
                      paddingRight: "70px",
                    }}
                    src={key3}
                    alt="Kiosk"
                  />
                  {/* </div> */}
                  <div className="key-card-body">
                    <p>TV Android Application for Queue Status</p>
                  </div>
                  {/* </div> */}
                </div>
              </Col>

              {/* //fourth  */}
              <Col style={{ marginRight: "15px" }} md={2}>
                <div className="card-img">
                  <img
                    style={{
                      width: "10.5rem",
                      display: "block",
                      margin: "auto",
                    }}
                    src={key4}
                    alt="Kiosk"
                  />

                  <div className="key-card-body">
                    <p>Automatic Voice Announcement</p>
                  </div>
                </div>
              </Col>

              {/* //fifth  */}
              <Col md={2}>
                <div className="card-img">
                  <img
                    style={{
                      width: "15rem",
                      display: "block",
                      margin: "auto",
                    }}
                    src={key5}
                    alt="Kiosk"
                  />

                  <div className="key-card-body">
                    <p>Dynamic Admin Panel</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <h2
            style={{
              // textAlign: "center",
              marginTop: "5%",
              marginLeft: "100px",
              marginLeft: "170px",
              textAlign: "center",
            }}
          >
            Qbot: Redefining Queue Management for Modern Businesses
          </h2>
          {/* //qbot redefining */}
          <div>
            <Row style={{ paddingLeft: "5%", marginTop: "2%" }}>
              <Col xs={12} lg={6} style={{ marginBottom: "20px" }}>
                <div style={{ marginLeft: "20px" }}>
                  <ul
                    style={{
                      padding: "20px",
                      marginTop: "10%",
                      fontFamily: "Lato",

                      textAlign: "justify",
                      fontSize: "20px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <li>
                      Customers enjoy a smoother, more organized service flow.
                    </li>
                    <li>
                      Reduced perceived wait times leading to higher
                      satisfaction.
                    </li>
                    <li>Systematic organization of queues for optimal flow.</li>
                    <li>
                      Access to live data on queue lengths, wait times, and
                      service rates.
                    </li>
                    <li>Streamlined processes reduce operational costs.</li>
                    <li>
                      Ideal for businesses of various sizes and industries.
                    </li>
                    <li>Multiple KIOSK Model Integration.</li>
                    <li>Software customization based on client needs.</li>
                  </ul>
                </div>
              </Col>

              <Col xs={12} lg={6} className="text-center">
                <div>
                  <img
                    style={{ width: "20vw" }}
                    src={Redefine}
                    alt="Qbot regefine"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* ///-----------vital industry */}
        <div className="vital-Industry">
          <h2
            style={{
              marginTop: "2%",
              marginBottom: "60px",

              textAlign: "center",
            }}
          >
            Vital Industry Implications of (Qbot)
          </h2>

          {/* //card */}

          <Row style={{ paddingLeft: "50px", marginTop: "20px" }}>
            {/* First Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo1}
                        alt="logo1"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                        Healthcare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Second Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo2}
                        alt="logo2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Banking & Finance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* third Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo3}
                        alt="logo3"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* fourth Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo4}
                        alt="logo4"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Customer Service Center
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* fifth Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo5}
                        alt="logo5"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Restaurants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* sixth Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo6}
                        alt="logo6"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Government Offices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* seventh Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo7}
                        alt="logo7"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Transportation Hubs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* eight Card */}
            <Col md={6}>
              <div className="vital-Card">
                <div className="vital-Q-card-content row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="logo">
                      <img
                        style={{ maxWidth: "50%" }} // Adjusted width to occupy most of the column width
                        src={Logo8}
                        alt="logo8"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <p
                        style={{
                          fontWeight: "bolder",
                          fontSize: "20px",
                        }}
                      >
                        Theme Parks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* /// highlight client */}

        <div className="highlight client">
          <h2
            style={{
              marginTop: "60px",
              marginBottom: "60px",
              marginLeft: "100px",
              marginLeft: "170px",
              textAlign: "center",
            }}
          >
            Highlighted Client List
          </h2>

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
      </div>
    );
  };

  return <ImageSlider />;
}

export default Qbot;

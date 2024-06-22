import React from "react";
import Home from "./components/home";
import Product from "./components/products";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/aboutus";
// import CustomNavbar from "./components/Nabvar";
import CustomNavbar from "./components/Navbar/navbar";
import ContactForm from "./components/contact";
import Service from "./components/service";
import Footer from "./components/Footer/Footer";
// import LucentChartComponent from "./components/lucentChart";
import LucentChartComponent from "./lucent_chart_page/lucentChart";
import ProductOfficeComponent from "./components/service_submenu/ProductOffice/productoffice";
import IpTelephoneService from "./components/service_submenu/IpTelephoneService/IpTelephoneService";

import DynamicContent from "../src/components/TemplatePage";
import Qbot from "./qbot_page/Qbot";
import Qad from "./qad_page/qad";
import Qbanner from "./components/Qbanner_page/Qbanner";
import NurseCall from "./components/nursecall_page/nurseCall";
import ManageCloudeService from "./components/service_submenu/manageCloudeService/manage_cloude_service";
import EmailMigration from "./components/service_submenu/EmailMigrationManagement/emailmigration";
function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <CustomNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />{" "}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="product/qbot" element={<Qbot />} /> {/* Q bot route*/}
        <Route path="product/qad" element={<Qad />} /> {/* Q bot route*/}
        <Route path="product/qnurselink" element={<NurseCall />} />
        <Route path="product/qbanner" element={<Qbanner />} />
        <Route
          path="service/managecloudservice"
          element={<ManageCloudeService />}
        />
        <Route
          path="service/E-MailMigrationandManagement"
          element={<EmailMigration />}
        />
        {/* Q bot route*/}
        <Route path="/service" element={<Service />} /> Fix the component name
        here
        <Route path="product/lucentchart" element={<LucentChartComponent />} />
        <Route
          path="service/productoffice"
          element={<ProductOfficeComponent />}
        />
        <Route
          path="service/IpTelephoneService&Solution"
          element={<IpTelephoneService />}
        />
        <Route path="service/:slug" element={<DynamicContent />} />
        <Route
          path="service/*"
          element={
            <Routes>
              <Route path="/*" element={<DynamicContent />} />
            </Routes>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

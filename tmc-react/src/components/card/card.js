import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.css";

const Card = ({ title, subtitle, button }) => (
  <div className="product-card">
    {" "}
    {/* apply the .card class */}
    <h4>{title}</h4>
    <p>{subtitle}</p>
    <div style={{ textAlign: "center", textDecoration: "none" }}>
      <button style={{ border: "none" }}>{button}</button>
    </div>
  </div>
);

export default Card;

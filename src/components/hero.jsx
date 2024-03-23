import React from "react";
import HumanImg from "../assets/img/bg-img.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-cont">
      <div className="hero-text-cont">
        <div className="hero-text-wrapper">
          <h3 className="hero-text-h3">Tee Collection 2023</h3>
          <h2 className="hero-text-h2">NEW SEASON</h2>
          <button className="hero-btn" onClick={() => navigate("/products")}>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="hero-img-cont">
        <img
          src={HumanImg}
          alt="humanImg"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Hero;

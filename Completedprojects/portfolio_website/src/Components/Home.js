import React from "react";
import Carousel from "./Carousel";
import imageData from "../data/images.json";
import "./cor.css";
import Swiper from "./Swiper";

function Home() {
  return (
    <div className="main-container">
      <div className="parent-cont">
        <Carousel data={imageData.slides} />
      </div>
      <div className="second-child">
        <Swiper />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Carousel from "./Carousel";
import imageData from "../data/images.json";
import "./cor.css";

function Home() {
  return (
    <div className="parent-cont">
      <Carousel data={imageData.slides} />
    </div>
  );
}

export default Home;

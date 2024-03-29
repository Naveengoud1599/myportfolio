import Socialicons from "./Social_icons";
import "./index.css";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const img = document.getElementById("animated-img");
    img.classList.add("animate-up");

    setTimeout(() => {
      img.classList.remove("animate-up");
    }, 1000);
  }, []);
  return (
    <div className="flex justify-center items-center flex-col ">
      <section className="main flex gap-2 pt-28">
        <div className="p-3 ">
          <img
            src="https://th.bing.com/th/id/OIP.w06RLwfARtuzefKmfVyFXQHaKt?w=900&h=1302&rs=1&pid=ImgDetMain"
            alt="Avatar"
            id="animated-img"
            className="w-40 h-40 object-cover m-6 aspect-w-1 aspect-h-1 border-t-4 rounded-lg border-orange-500"
          ></img>
        </div>

        <div className="mt-8 flex flex-col">
          <h3 className="flex justify-start">HI, I'm</h3>
          <h1 className="font-bold">
            <span style={{ color: "#f9532d" }}>Naveen</span> Mandava
          </h1>
          <p>
            Professional Front-end developer, Main goal is to help and satisfy
            <br />
            the local and global clients by the web development solutions.
          </p>
          <Socialicons />
        </div>
      </section>
    </div>
  );
}

export default About;

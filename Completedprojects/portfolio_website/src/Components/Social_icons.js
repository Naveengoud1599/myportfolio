import React from "react";
import "./index.css";

function Socialicons() {
  return (
    <div class="social flex gap-6 mt-5">
      <a
        href="https://github.com/mandavanaveen/myportfolio"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi bi-github"></i>
      </a>
      {/* <a href="https://t.me/web_devs_i">
        <i class="bi bi-telegram"></i>
      </a> */}
      <a
        href="https://www.linkedin.com/in/naveenmandava"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bi bi-linkedin"></i>
      </a>
      {/* <a href="https://www.youtube.com/">
        <i class="bi bi-youtube"></i>

        https://www.wallpapertip.com/wmimgs/66-666819_website-design-background-creative-background-image-for-website.jpg

        https://wallpaperbat.com/img/215835-wallpaper-design-website.jpg

        https://wallpaperaccess.com/full/2945440.jpg
      </a> */}
    </div>
  );
}

export default Socialicons;

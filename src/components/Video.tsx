import React from "react";
import video from "../assets/video/video.mp4";
import "../styles/video.css";

function Video() {
  return (
    <div className="video-wrap">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <h1>DAP Security</h1>
        <h3>중부대학교 정보보호학과 졸업작품</h3>
      </div>
    </div>
  );
}

export default Video;

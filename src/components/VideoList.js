import React from "react";

import VideoDetail from "./VideoDetail";
import "../styles/videostyle.css"

const VideoList = ({ data, onVideoSelected }) => {
  return (
    <div className="videolist">
      <div className="videobox">
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Video List
        </h3>
        <VideoDetail data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;
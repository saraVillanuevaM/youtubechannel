import React from "react";
import "../styles/videostyle.css";





const VideoItem = ({ video }) => {
  
console.log(video);

  if (!video) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
      I am all eyes and all ears
      </p>
    );
  }


  return (
    <div className="video-item">
      <iframe
        title={video.snippet.title}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      />

       <div>
        <h4>{video.snippet.title}</h4>
  
      </div>  
  


              

     
      
    </div>
 
  );
};

export default VideoItem;
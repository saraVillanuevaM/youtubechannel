

import React from "react";


function selectVideo(videoObj, onVideoSelected) {
  onVideoSelected(videoObj.video);
}

function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}


function constructVideoTitles(videoesData, onVideoSelected) {
  return videoesData.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id, onVideoSelected)}>

            
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>

      
    );
  });
}


const VideoDetail = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;

  
};

export default VideoDetail;
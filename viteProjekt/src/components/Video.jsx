import React from "react";

function Video() {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/ky82NsFaXyA?autoplay=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;

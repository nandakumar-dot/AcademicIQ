import React, { useRef } from "react";
import YouTube from "react-youtube";
import "./Home.css";

const Home = () => {
  const videoId = "1544291808"; // Replace with your actual YouTube video ID
  const playerRef = useRef(null);

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: videoId,
    },
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
  };

  const skipForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 10);
    }
  };

  const changeSpeed = (speed) => {
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(speed);
    }
  };

  return (
    <div className="home-container">
      {/* Blurred Video Background */}
      <div className="video-background">
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} className="video-player" />
      </div>

      {/* Content */}
      <div className="content">
        <div className="controls">
          <button onClick={skipForward}>Skip +10s</button>
          <button onClick={() => changeSpeed(1)}>Normal Speed</button>
          <button onClick={() => changeSpeed(1.5)}>1.5x</button>
          <button onClick={() => changeSpeed(2)}>2x</button>
        </div>
        <button className="resume-button">Resume</button>
        <h2>Next Task</h2>
        <div className="task-container">
          <div className="task">
            <p>09:30 - 12:00</p>
            <h3>Quiz - 3 questions</h3>
          </div>
          <div className="task">
            <p>17:30 - 19:00</p>
            <h3>Correct the mistakes</h3>
            <p>Linked list</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function VideoPlayer() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const forwardVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  const rewindVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const previousVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Video Player using useRef</h2>

      <video
        ref={videoRef}
        width="400"
        controls
        muted
        src={videos[currentVideoIndex]}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={forwardVideo}>Forward</button>
        <button onClick={rewindVideo}>Rewind</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={previousVideo}>Previous</button>
        <button onClick={nextVideo}>Next</button>
      </div>
    </div>
  );
}

export default VideoPlayer;

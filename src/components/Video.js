// @flow

import * as React from "react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export default function Video(): typeof ReactPlayer {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      console.log(videoRef.current.getCurrentTime());
    }
  });

  return (
    // https://www.npmjs.com/package/react-player
    <ReactPlayer
      playing
      controls={true}
      url="Live_at_the_Comedy_Store_HD.mp4"
      ref={videoRef}
    />
  );
}

import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";

export const Play = () => {
  const { selectedVideo } = useContext(AppContext);

  return (
    <div>
      <VideoPlayer src={selectedVideo}></VideoPlayer>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";

export const Play = () => {
  const { selectedVideo } = useContext(AppContext);
  console.log(selectedVideo,"play");

  return (
    <div>
      <VideoPlayer src={selectedVideo} width="1400" height="600" marginLeft="300" ></VideoPlayer>
    </div>
  );
};

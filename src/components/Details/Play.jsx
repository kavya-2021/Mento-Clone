import React, { useEffect, useState } from "react";
import VideoPlayer from "react-video-js-player";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";

export const Play = ({vid}) => {
  // const { selectedVideo } = useContext(AppContext);
  console.log(vid,"play");

  return (
    <div>
      <VideoPlayer
        src="https://d1tthr7pv14hhy.cloudfront.net/mp4/Sanjay_Manaktala_Stand_up_Comedy/Lessons/Lesson_1-Elements_of_a_successful_joke/hytgre43cx_2048p.mp4"
        width="1400"
        height="600"
        marginLeft="300"
      ></VideoPlayer>
    </div>
  );
};

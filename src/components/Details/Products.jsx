import { Dataproducts } from "./Dataproducts";
import { VideoContent } from "./VideoContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Play } from "./Play";

import { FaRegPlayCircle } from "react-icons/fa";
// import { useState,useEffect } from "react";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";

export const Products = () => {
  const [videoData, setVideoData] = useState();
  const [daata, setDaata] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const { type } = useParams();
  const {  handleLogIn, handleLogOut } = useContext(AppContext);
  const [selectedVideo,setSelectedVideo] = useState("")

  const getData = async () => {
    let res = await fetch(
      "https://mento-backend-server.herokuapp.com/alltopics"
    );
    let data = await res.json();
    // console.log(data);
    setVideoData(data);
    data.filter((it) => {
      if (it.topic === type) {
        setDaata(it.author_image[1]);
        setName(it.author_name);
        setProfession(it.topic_name.split(" ")[0]);
        setSelectedVideo(it.videos[0].video)
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Products", selectedVideo);

  const { isAuth } = useContext(AppContext);
  return (
    <Dataproducts image={daata}>
      <div className="Main_cont">
        {/* <Navbar /> */}
        {isAuth ? (
          <Play vid={selectedVideo} />
        ) : (
          <div className="items_cont">
            <div className="learnmore">
              <span> LEARN FROM</span>
            </div>
            <div className="heading">
              <h1>
                {name} about a career in {profession}
              </h1>
            </div>
            <div className="offer">
              <p>
                AT <strike>₹1,299</strike>&nbsp;
                <span className="orange">₹0</span>
                ,YOU GET
              </p>
            </div>
            <div className="button">
              <button>ENROLL NOW!</button>
            </div>
            <div className="div_right">
              <span>Exclusive Video Lectures on Freelancing 101</span>
              <br />
              <br />
              <span>Certificate of Completion signed by Alicia Souza</span>
            </div>
            <div className="player">
              <FaRegPlayCircle
                style={{
                  fontSize: "35px",
                  marginRight: "0px",
                  color: "#f32f46",
                }}
              />
              PLAY TRAILOR
            </div>
          </div>
        )}
        <VideoContent setSelectedVideo={setSelectedVideo} />
      </div>
    </Dataproducts>
  );
};

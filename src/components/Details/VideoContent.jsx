import "./VideoContent.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import VideoPlayer from "react-video-js-player";
import { FaPager, FaClock, FaRegHeart, FaPhotoVideo } from "react-icons/fa";
import { Footer } from "../Footer/Footer";
import { AppContext } from "../../ContextApi/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Play } from "./Play";

export const VideoContent = ({ setSelectedVideo }) => {
  const navigate = useNavigate();

  const [randomdata, setRandomdata] = useState(
    Math.floor(Math.random() * 1200)
  );
  const [getdata, setGetdata] = useState([]);
  // const [arr, setArr] = useState([]);
  const { type } = useParams();
  // const [aboutd, setAboutd] = useState("");
  // const [name, setName] = useState("");

  const {
    changeName,
    changeImage,
    changeTitle,
    // handlePlaySelectedVideo,
    isAuth,
    handleLogIn,
    handleLogOut,
    logins,
    datalogins,
  } = useContext(AppContext);
  // console.log(logins,"lohgfdddd");
  // const nextPage = () => {
  //   if(logins===false){
  //   navigate("./Login");
  //   }

  // };
  const getData = async () => {
    let res = await fetch(
      "https://mento-backend-server.herokuapp.com/alltopics"
    );
    let data = await res.json();
    // console.log(data);
    const filteredData = data.filter((it) => {
      return it.topic === type;
    });
    setGetdata(filteredData[0]);

    data.map((it) => {
      if (it.topic === type) {
        // setArr(it.videos);
        // setAboutd(it.author_about);
        // setName(it.author_name);
        changeName(it.author_name);
        changeImage(it.author_image[0]);
        changeTitle(it.topic_name);
      }
    });
  };
  // getData();

  useEffect(() => {
    getData();
  }, []);

  const datachange = () => {
    setRandomdata(randomdata + 1);
  };

  console.log("videoContent filteredData", getdata);

  return (
    <>
      <div className="Main_cont1">
        <div className="videos">
          <div className="sub_navbar">
            <div className="head">
              <span style={{ color: "black" }}>LEARN</span>
            </div>
            <div className="svg">
              <FaRegHeart
                style={{ color: "orange", marginTop: "20px", fontSize: "25px" }}
              />
              <div></div>
              <p
                style={{ color: "orange", marginTop: "20px", fontSize: "17px" }}
              >
                <FaPhotoVideo /> DOWNLOAD CERTIFICATE
              </p>
            </div>
          </div>
          <hr />
          {/* <FontAwesomeIcon icon="fa-thin fa-heart" /> */}
          <div className="video_count">
            <div>
              <h2>
                <span style={{ color: "#f58441" }}>06 </span>
                <span style={{ color: "black" }}>Videos</span>
              </h2>
            </div>
            <div>
              <h3 style={{ color: "#d3d3d3" }}>
                <FaPager style={{ color: "#d3d3d3", marginTop: "4px" }} />{" "}
                download workbook
              </h3>
            </div>
          </div>
          <div className="videotime">
            <p>
              <FaClock style={{ marginTop: "4px" }} /> 35 MIN
            </p>
          </div>
          {getdata.length !== 0 && getdata.videos.map((items) => {
            return (
              <>
                {/* <Link style={{ textDecoration: "none" }} to={"/Login"} > */}
                <div
                  className="videosshow"
                  key={items._id}
                  onClick={() => {
                    // !isAuth?handleLogIn():handleLogOut();
                  }}
                >
                  <div
                    className="videosdisplay"
                    onClick={() => {
                      // console.log("before",items.video);
                      if (!isAuth) {
                        // handlePlaySelectedVideo(items.video);
                        navigate("/Login");
                      } else {
                        console.log("click");
                        setSelectedVideo(items.video);
                      }

                      // setSelectedVideo(items.video);
                    }}
                  >
                    {/* <VideoPlayer src={items.video_poster} width="150" height="100"> */}
                    {/* <Play vid={items.video}/> */}
                    {/* </VideoPlayer> */}
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={items.video_poster}
                      alt=""
                    />
                  </div>
                  <div className="contentdisplay">
                    <h3>{items.title}</h3>
                    <p>{items.about}</p>
                    <p>
                      {" "}
                      <FaClock style={{ marginTop: "4px" }} /> {items.duration}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="about">
          <div className="author-info">
            <div className="profile"></div>
            <div className="author-detail">
              <h2 style={{ marginBottom: "0px" }}>{getdata.author_name}</h2>
              <span>occupation </span>
              <div className="follow">
                <button onClick={datachange}>FOLLOW</button>
                <p>
                  <span style={{ color: "rgb(0, 153, 255)" }}>
                    {randomdata}
                  </span>{" "}
                  following
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div style={{ color: "#797878", marginRight: "250px" }}>
            <span style={{ color: "#302f2f", fontSize: "20px" }}>06</span>{" "}
            <br />
            <span>Lessons</span>
          </div>
          <hr />
          <div>
            <h3 style={{ color: "#797878", marginRight: "250px" }}>ABOUT</h3>
            <p className="aboutaouthor">{getdata.author_about}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

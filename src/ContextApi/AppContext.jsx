import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // console.log(children);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [Name, setName1] = useState("");
  const [imageurl, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [logins, setLogins] = useState(false);
  // console.log(imageurl, "name");
  // console.log("selectedVideo Global state", selectedVideo);

  const handlePlaySelectedVideo = (videoSrc) => {
    // console.log("handlePlaySelectedVideo");
    setSelectedVideo(videoSrc + Math.random());
    // console.log("handlePlaySelectedVideo", videoSrc);
  };

  const handleLogIn = () => {
    setIsAuth(true);
  };
  const handleLogOut = () => {
    setIsAuth(false);
  };

  const changeName = (n) => {
    setName1(n);
    // console.log(Name);
  };
  const changeImage = (n) => {
    setImage(n);
    // console.log(n);
  };
  const changeTitle = (n) => {
    setTitle(n);
    // console.log(n);
  };
  const datalogins = () => {
    setLogins(true);
  };
  const value = {
    selectedVideo,
    // setSelectedVideo,
    handlePlaySelectedVideo,
    handleLogIn,
    handleLogOut,
    isAuth,
    changeName,
    changeImage,
    changeTitle,
    setUrl,
    logins,
    datalogins,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

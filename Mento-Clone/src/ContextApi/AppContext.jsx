import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    // console.log(children);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isAuth, setIsAuth] = useState(true);

  console.log("selectedVideo Global state", selectedVideo);

  // const handlePlaySelectedVideo = (videoSrc) => {
  //   console.log("handlePlaySelectedVideo", videoSrc);
    // setSelectedVideo(videoSrc);
  // };

  const handleLogIn = () => {
    setIsAuth(true);
  };
  const handleLogOut = () => {
    setIsAuth(false);
  };

  const value = {
    selectedVideo,
    setSelectedVideo,
    // handlePlaySelectedVideo,
    handleLogIn,
    handleLogOut,
    isAuth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };

// import { useState } from "react"
import "./VideoContent.css";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
export const VideoContent=()=>{
    const [randomdata, setRandomdata]=useState(Math.floor(Math.random() * 1200)) 
    const [getdata,setGetdata]=useState([]);
    const [arr,setArr]=useState([])
    const {type}=useParams();
    const [aboutd,setAboutd]=useState("")
    // console.log(typeof type);

    // const videoshow=()=>
    // {

    // }
const getData=async()=>
{
    let res=await fetch("https://mento-backend-server.herokuapp.com/alltopics")
    let data=await res.json();
  
     data.filter((it)=>
     {
         if(it.topic===type)
         {
             setArr(it.videos)
             setAboutd(it.author_about)
         }

     })
     setGetdata(data)
}
// getData();
console.log(aboutd);
console.log(arr);
useEffect(()=>
{getData()},[]);

const datachange=()=>{
    setRandomdata(randomdata+1)
}

    return(
    <div className="Main_cont1">
        <div className="videos">
            <div className="sub_navbar">
                <div><span>LEARN</span></div>
                <div className="svg">
                    <p>hell</p>
                     <p>hello</p>
                  </div>

            </div>
             <hr/>
              <div className="video_count">
            <div><h2>15 videos</h2></div>
            <div><h3>download workbook</h3></div>
        </div>
        <div className="videotime">
            <p>57Minutes</p>
        </div>
       {
           arr.map((items)=>
           {
              
                  
             return <div className="videosshow">
            <div className="videosdisplay">
                <VideoPlayer src={items.video} poster={items.video_poster} width="150" height="100"/>
            </div>
            <div className="contentdisplay">
                <h3>{items.title}</h3>
                <p>{items.about}</p>
                <p>{items.duration}</p>
            </div>
          
        </div>
          
         
           })
       }
        </div>    
        <div className="about">
            <div className="author-info">
                <div className="profile"></div>
                <div className="author-detail">
                    <h2>Nitesh tivari</h2>
                   <span>occupation </span>
                    <div className="follow">
                        <button onClick={datachange}>FOLLOW</button>
                        <p>{randomdata}-following</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
               <span>15</span> <br/>
               <span>lessons</span>
            </div>
            <hr/>
            <div>
                <h3>About</h3>
                <p className="aboutaouthor">{aboutd}
                </p>
                
            </div>
        </div>
    </div>
  )
}

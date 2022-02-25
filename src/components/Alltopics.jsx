import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { AllTopicContent } from './Alltopics Style'


function Alltopics() {
  const [alltopics, setTopics]= useState([]);  
  //const [loading, setLoading] = useState(true);

    useEffect(()=>{
      axios.get("https://mento-backend-server.herokuapp.com/alltopics").then((res)=>{
        setTopics(res.data);
        })  
    },[]); 
    


  return (
    <AllTopicContent>
      {alltopics.map((e, i) => (
        
      <div className='card'>        
        <img src ={e.author_image[0]} id="imageone"></img>
          <div className='play-button'>
          <img src="images/play-icon-11-256.png" alt="" />
          </div>
        <div className='white-shape'>     
        <div className='content'>
        <h4>{e.topic_name}</h4>
        
        <div className='imageContent'>    
        <img src={e.author_image[0]} id="samllImage" alt="" />
        </div> 
        <div className='rightContent'>      
        <h4>{e.author_name}</h4>      
        <p style={{fontSize:"12px"}}>{e.profession}</p>         
        </div>
        </div>                   
        </div>      
      </div>
      
   ))}



      {/* {alltopics.map((e, i) => (
        <div className='card1'>
            {/* <Link to={`/alltopics/${e._id}`}> */}
              {/* <div key={i}> */}
                {/* console.log(e.id) */}
               {/* <img src ={e.author_image}></img> */}
               {/* console.log(e.img) */}
               {/* <p>{e.topic_name}</p>                */}
            {/* </div>
            </Link> */}
            {/* </div> */}
          {/* ))}     */}
       
    </AllTopicContent>
  )
}

export default Alltopics

// http://localhost:2555/alltopics

    
// const getData=async()=>
// {
//     let res=await fetch("https://mento-backend-server.herokuapp.com/alltopics")
//     let data=await res.json()
//     console.log(data);
// }  

// useEffect(()=>{
//        getData();   
//       },[]); 
import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllTopicContent } from './Alltopics Style';
import { SidebarContent } from './Sidebar Style'

function Alltopics() {
  const [alltopics, setTopics]= useState([]);
  const navigate = useNavigate();
  const [changedTopic, setChangedTopic] = useState("");
  //const [loading, setLoading] = useState(true);
    useEffect(()=>{
      axios.get("https://mento-backend-server.herokuapp.com/alltopics").then((res)=>{
        setTopics(res.data);
        })  
    },[]);

    useEffect(()=>{
      axios.get(`https://mento-backend-server.herokuapp.com/alltopics/${changedTopic}`).then((res)=>{
        setTopics(res.data);
        }) 
    }, [changedTopic])


    const NextPage = (e)=>{
      console.log(e);
      navigate("/a")      
    }

    function changeData(route)
    {
      setChangedTopic(route)
    }

  return (
   <div style={{backgroundImage: "url('https://www.mento.co.in/assets/all-topics-bg-c70ac523da68e4c48726cc16261ddb6d5b08a7f43fa4dc0e78f5488466e78514.png')",   backgroundColor: "#1a1d24"}}>
     <h2 style={{width:"20%",color:"#f36f21",fontWeight:"500",position:'absolute',marginTop:"9%",marginLeft:"29%",textTransform:"uppercase"}}>{changedTopic}</h2>
      <div className="MainContainer">
      
      <SidebarContent>
       <p><span onClick={()=>{changeData("")}} className="both-up" >ALL TOPICS</span></p>
       <p><span onClick={()=>{changeData("film_making")}} className="both-up">FILM-MAKING</span></p>      
       <p><span  className="both-up" onClick={()=>{changeData("beat_boxing")}}>BEAT BOXING</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("content_creation")}}>CONTENT CREATION</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("film_production")}}>FILM PRODUCTION</span></p>       
       <p><span  className="both-up" >NOVEL WRITING</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("entrepreneurship")}}>ENTREPRENEURSHIP</span></p>       
       <p><span  className="both-up" >MUSIC</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("fashion_blogging")}}>FASHION BLOGGING</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("design")}}>DESIGN</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("illustration")}}>ILLUSTRATION</span></p>       
       <p><span  className="both-up" >F&B</span></p>       
       <p><span  className="both-up" >BAKING</span></p>       
       <p><span  className="both-up" >EMCEEING</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("performing_arts")}}>PERFORMING ARTS</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("standup_comedy")}}>STAND-UP COMEDY</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("improv_comedy")}}>IMPROV COMEDY</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("artist_management")}}>ARTIST MANAGEMENT</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("food_blogging")}}>FOOD BLOGGING</span></p>       
       <p><span  className="both-up" >CHEF</span></p>       
       <p><span  className="both-up" >RADIO JOCKEY</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("photography")}}>PHOTOGRAPHY</span></p>       
       <p><span  className="both-up" >RESTAURANT BUSINESS</span></p>       
       <p><span  className="both-up" onClick={()=>{changeData("web_series")}}>WEB SERIES</span></p>       
       <p><span  className="both-up" >PERSONAL FINANCE</span></p>
     </SidebarContent>
             
     <AllTopicContent>
       
       {alltopics.map((e, i) => {
        return(
          
       <div className='card' onClick={()=>NextPage(e._id)}>        
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
         <h6 style={{fontSize:"12px",color: "#999999",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis",width: "100%"}}>{e.profession}</h6>         
         </div>
         </div>                   
         </div>      
       </div>   
        )
       
       })}
 
 
 
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
     </div>
   </div>
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
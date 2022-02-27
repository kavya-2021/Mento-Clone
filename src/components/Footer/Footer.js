import facebook from "../Assets/Facebook_Logo.png"

import insta from "../Assets/insta_logo.png"

import twitter from "../Assets/twitter_logo.png"

import youtube from "../Assets/you.png"

import {Link} from "react-router-dom"

export const Footer = ()=>{
   return (
     <>
      <div style={{
           borderTop: '1px solid rgba(255,255,255,0.1)',
           margin:"auto",
           marginTop : "5%",
           padding:"2.5%",
           lineHeight: "50px",
           alignItems:"center",
           color: "rgba(200,200,200,0.5)",  
           fontWeight: "400",  
           lineHeight: "normal"  
      }} id="Footer-Section"> 
         <div style={{
             display: 'flex',
             gap:"1%",
             margin:"auto",
             justifyContent:"center"
       
         }} id="Footer-Icons">
             <div> <a href="http://www.youtube.com/mentolearn" target="_blank"> <img src={youtube}/>  </a> </div>
             <div> <a href="http://www.facebook.com/mentolearn" target="_blank"> <img src={facebook}/> </a> </div>
             <div> <a href="http://www.instagram.com/mento.learn" target="_blank"> <img src={insta}/> </a> </div>
             <div> <a href="http://www.twitter.com/mento_learn" target="_blank"> <img src={twitter}/> </a> </div>
         </div>
         <div style={{
             display: 'flex',
             marginTop:"2.5%",
             fontSize: "0.8363636364em",
             textTransform: "uppercase",
             gap:"3%",
             justifyContent:"center"
         }} id="Footer-Services">
            <div> <Link style={{
                textDecoration:"none",
                color: "rgba(200,200,200,0.5)"
            }} to={'/about'}> About </Link></div>
            <div>FAQ</div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
         </div>
         <p style={{ 
             fontSize: "0.6363636364em",
                margin:"auto",
                marginTop:"3%" ,
             marginBottom:"2%",
                textAlign:"center"    
         }}>Copyright @GRADESDONTMATTER PVT LTD</p>
      </div>
     </>
   )
}

//<a href="http://www.twitter.com/mento_learn" target="_blank"> <img src={twitter}/> </a>


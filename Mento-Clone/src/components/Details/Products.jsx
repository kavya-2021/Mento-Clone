import "./Products.css"
import {VideoContent} from "./VideoContent";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
export const Products=()=>
{


    return(<div className="Main_cont">
          {/* <Navbar /> */}
        <div className="items_cont">
            <div className="learnmore">
                LEARN FROM
            </div>
            <div className="heading">
                <h1>Alicia souza about a career in freelancing</h1>
            </div>
            <div className="offer">
                <p>AT <strike>₹1,299</strike>&nbsp;<span className="orange">₹0</span>,YOU GET</p>
            </div>
            <div className="button"><button>ENROLL NOW!</button></div>
             <div className="div_right">
                 <span>Exclusive Video Lectures on Freelancing 101</span><br/><br/>
                 <span>Certificate of Completion signed by Alicia Souza</span>
             </div>
             <div className="player">PLAY TRAILOR</div>
        </div>
        <VideoContent />
       
    </div>)
}
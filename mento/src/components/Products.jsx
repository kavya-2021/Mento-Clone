import "./Products.css"
import { Navbar } from "./navbar";
import {VideoContent} from "./VideoContent"
export const Products=()=>
{
// const getData=async()=>
// {
//     let res=await fetch("https://mento-backend-server.herokuapp.com/alltopics")
//     let data=await res.json()
//     console.log(data);
// }

    return(<div className="Main_cont">
          <Navbar />
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
        <VideoContent/>
       
    </div>)
}
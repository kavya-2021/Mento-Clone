import {DIVHOME} from "./HomeDivCard"

import { FaPlay } from "react-icons/fa";

import {useNavigate,useParams,Link} from "react-router-dom"

export const HomeCards = ({image,title,profession})=>{
    const url = encodeURI(image);

    const dummy = profession;

    const designation = dummy.toUpperCase()
    
    const {type} = useParams();

    const navigate = useNavigate()

    const nextPage = ()=>{
       navigate("./courses/entrepreneurship-101")
    }

    return (
           /* <div id="Home-Section-Cards">
            <div id="Profile-Details"> 
               <h4>MY NAME IS SO AND SO</h4>
               <h4>MY NAME IS SO AND SO</h4>
               <h4>MY NAME IS SO AND SO</h4>
            </div>
           </div> */

         //   <DIV image={url} className="Image-Div">
         //      <div id="Profile-Details" className="Image-Div"> 
         //       <h4>MY NAME IS SO AND SO</h4>
         //       <h4>MY NAME IS SO AND SO</h4>
         //       <h4>MY NAME IS SO AND SO</h4>
         //      </div>
         //    </DIV>    onClick={nextPage} 

         <Link style={{textDecoration:"none"}} to={`/courses/${title}`} > 

         <DIVHOME image={url} className="Home-Card-Container">

           <div className="Home-Card">
              <div className="card-title"> 
             
              </div> 
              <div className="card-body">

              <div className="card-body overlay"> 
                   <FaPlay style={{
                      color:"#d34209",
                      fontSize:"22px"
                   }}/>
                 </div>
                
                <h3>{title}</h3>
                 <div className="Inner-Home-Card">
                     <div className="Home-Profile">
                        <div className="Home-Profile-Dp">
                           <img src={image}/>
                        </div>
                        <div className="Home-Profile-Details">
                            <h4>RITESH AGARWAL</h4>
                            <p style={{ 
                               fontSize:"11px",
                               fontWeight:"500",
                               color:"#999999"
                            }}>{designation}</p>
                        </div>
                     </div>
                     <div className="Home-Video-Count"> 
                     <h4>9</h4>
                     <p style={{ 
                         fontSize:"11px",
                         fontWeight:"500",
                         color:"#999999"
                      }}>VIDEOS</p>
                     </div>
                 </div>
            </div>
          </div>
      </DIVHOME>

      </Link>
    )
}
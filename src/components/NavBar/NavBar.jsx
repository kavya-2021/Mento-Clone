import { Link} from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {

//     const navigate = useNavigate();
// // const  gotoabot = ()=>{
// //     navigate('./about')
// // }

   
    return (
       
        <div id="fix">
        <div id="main_navbar">

        <Link to={'/'}> 
            <div id="logo">
                <img src="./favicon.ico" alt="" />
            </div>  
        </Link>

     
            <div id="options">
                <div id="input_search" >
                    
                    <input className="input-elevated" type="text" placeholder=" Topic name,Infulencers name
" />
                </div>

                <Link to={'/alltopics'} style={{
                    textDecoration:"none",
                    color:"white"
                }}> <div id="alltopic">ALL TOPICS</div>  </Link>

                <Link to={'/about'} style={{
                    textDecoration:"none",
                    color:"white"
                }}> <div id="about">ABOUT</div>  </Link>

                <Link to={'/login'} style={{
                    textDecoration:"none",
                    color:"white"
                }}>  <button className="btn-hover color-2">LOGIN</button> </Link>
                
                
               
               
            </div>
       
        </div>
        </div>
       
    )
    
    
    }


    
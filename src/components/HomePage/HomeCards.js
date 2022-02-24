import styled from "styled-components"

const DIV = styled.div`
*{
 padding:0;
 margin: 0; 
 box-sizing: border-box;
}
.Home-Card-Container{
    width:100%;
    height:100vh;
    background-color: rgb(34, 117, 189);
    color: black;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
}
.Home-Card{
    flex-basis: 20%;
      background-color: white;
      border-radius: 10px;
      color: black;
}
.card-title{
    background-image:url(${({image})=>image});
    width:100%;
    height:250px;
    background-size: cover;
   -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
   clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
   border-radius: 10px; 
}

/* .Home-Card:hover .card-title, .Home-Card:focus .card-title{
  transform: scale(1.2);
} */

.card-body{
    padding: 6.5%;
}

.Inner-Home-Card{
   width:100%;
   height: 50px;
   display: grid ;
   grid-template-columns: 75% 20%;
   justify-content:space-between;
   text-align: left;
   margin: auto;
   margin-top : 8%;
}

.Home-Profile{
   display: flex ;
   gap: 6%;
}

.Home-Profile-Dp{
   height:90%;
   width:22.5%;
   border-radius: 50%;
}

.Home-Profile-Dp > img{
   height:100%;
   width:100%;
   border-radius: 50%;
}

.Home-Profile-Details{
   padding-top: 3%;
   line-height: 20px;
}

.Home-Video-Count{
   padding-top: 10%;
   text-align: center;
   line-height: 20px;
}

.card-body h3{
   text-align:left;
}

`

export const HomeCards = ({items})=>{
    const url = encodeURI(items);

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
         //    </DIV>

         <DIV image={url} className="Home-Card-Container">
           <div className="Home-Card">
              <div className="card-title"> </div> 
              <div className="card-body">
                <h3>Entrepreneurship 101</h3>
                 <div className="Inner-Home-Card">
                     <div className="Home-Profile">
                        <div className="Home-Profile-Dp">
                           <img src={items}/>
                        </div>
                        <div className="Home-Profile-Details">
                            <h4>RITESH AGARWAL</h4>
                            <p style={{ 
                               fontSize:"11px",
                               fontWeight:"500",
                               color:"#999999"
                            }}>FOUNDER, OYO ROOMS</p>
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
      </DIV>
    )
}
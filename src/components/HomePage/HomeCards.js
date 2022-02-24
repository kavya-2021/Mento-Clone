import styled from "styled-components"

const DIV = styled.div`
     /* border:1px solid tomato;
    border-radius: 10px;
    position: relative;
    height: 400px;
    background-image:url(${({image})=>image});
     width:100%;
     -webkit-background-size: cover;
     background-size: cover;
     background-position:center center;
     border-radius: 10px;
     z-index : 10; */

     /* &:after{
    position:absolute;
    background: inherit;
    z-index: -1;
    bottom: 0;
    content: "";
    width: 100%;
    height:100%; */
 /* } */

 /* #Profile-Details{
    background: #fff;
    z-index: 8;
    color: black;
    width: 100%;

} */

/* #Profile-Details:after{
   transform-origin : right bottom;
   transform : skewY(-3deg)
} */

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
    display: flex;
    justify-content: center;
    align-items: center;
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
    height:300px;
    background-size: cover;
   -webkit-clip-path: polygon(0 0, 100% 0, 100% 60%, 0 85%);
   clip-path: polygon(0 0, 100% 0, 100% 60%, 0 85%);
   border-radius: 10px;
  
}
.card-body{
    padding: 15px;;
}
h2{
    margin: 10px;
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
                <h2>title of the card</h2>
                 <div></div>
            </div>
          </div>
      </DIV>
    )
}
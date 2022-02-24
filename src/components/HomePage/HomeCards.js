import styled from "styled-components"

const DIV = styled.div`
     border:1px solid tomato;
    border-radius: 10px;
    position: relative;
    height: 400px;
    background-image:url(${({image})=>image});
     width:100%;
     -webkit-background-size: cover;
     background-size: cover;
     background-position:center center;
     border-radius: 10px;
     z-index : 10;

     /* &:after{
    position:absolute;
    background: inherit;
    z-index: -1;
    bottom: 0;
    content: "";
    width: 100%;
    height:100%; */
 /* } */

 #Profile-Details{
    background: #fff;
    z-index: 8;
    color: black;
    width: 100%;

}

/* #Profile-Details:after{
   transform-origin : right bottom;
   transform : skewY(-3deg)
} */

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

           <DIV image={url} className="Image-Div">
              <div id="Profile-Details" className="Image-Div"> 
               <h4>MY NAME IS SO AND SO</h4>
               <h4>MY NAME IS SO AND SO</h4>
               <h4>MY NAME IS SO AND SO</h4>
              </div>
            </DIV>
    )
}
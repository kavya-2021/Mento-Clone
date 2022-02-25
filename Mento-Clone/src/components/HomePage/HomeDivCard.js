import styled from "styled-components"

export const DIVHOME = styled.div`
*{
 padding:0;
 margin: 0; 
 box-sizing: border-box;
}
.Home-Card-Container{
    width:100%;
    height:80vh;
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
      position : relative;
      overflow: hidden;
      cursor: pointer;
}
.card-title{
    background-image:url(${({image})=>image});
    width:100%;
    height:250px;
    background-size: cover;
   -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
   clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
   border-radius: 10px; 
   overflow: hidden;
   
}

.Home-Card:hover .card-title, .Home-Card:focus .card-title{
   transform: scale(1.15);
   transition: all 0.5s ease;
  
}

.card-title::before {
  content: "";
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}

.Home-Card:hover .card-title:before,
.Home-Card:focus .card-title:before {
  display: block;
}

.card-body{
    padding: 6.5%;
    z-index: 10;
    top:0;
    /* opacity: 0.7; */
}

.overlay{
   z-index: -10;
   width: 25%;
   height: 65px;
   border-radius:50%;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
   right: 70%;
   top: 0%;
   transform: translate(280%, -140%);
   -ms-transform: translate(280%, -140%);
   background-color: white;
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
   margin-top: -20%;
}

`
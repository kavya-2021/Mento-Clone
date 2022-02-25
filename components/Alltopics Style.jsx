import styled from "styled-components";

export const AllTopicContent = styled.div`
    width: 65%;
    border: 1px solid blue;
    display: grid;
    grid-template-columns: repeat(3,28%);
    justify-content: space-around;
    cursor: pointer;   
    font-family: 'Roboto Condensed', sans-serif;

    & .card{
       // border: 1px solid red;
        height: 330px;
        border-radius: 10px;
       // width: 200px;
      // background-image: url("https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Improv-Comedy/landscape+saad+khan.jpg");
        margin-top: 10%;
        background-repeat:no-repeat;
        background-size: cover;
        position: relative;
        background-size: cover;
        float: left;
        overflow: hidden;   
    }
    & .card:hover #imageone{
        -webkit-transform: scale(1.08);
  transform: scale(1.08);
    }
   
    & .card #imageone{
        width: 100%;
        height: 280px;
        border-top-left-radius:10px;
        border-top-right-radius:10px;       
        -webkit-transition: 0.4s ease;
       transition: 0.4s ease;
      
    }
    & .card #imageone:hover{
        transition:all 1s ease;
        height:330px;
        width: 350px;
        overflow: hidden;         
    }

    & .white-shape{
        background:white;
        height:180px;
        width:100%;       
        z-index: 1;
        position: absolute;
        bottom: 0;
        color: black;
        transform: rotate(180deg);
        -webkit-clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        /* bottom: 0px; */
        overflow: hidden;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }
    
    & .play-button
    {
        height: 60px;
        width: 60px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        top:40%;
        right: 20px;
        z-index: 2;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    & .play-button img {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 25%;
        top: 25%;
    }
    & #samllImage{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
   & .content{
    transform: rotate(180deg);
  //  border: 1px solid red;
    padding: 10px;
    text-align: center;
    text-align: left;
    line-height: 2.8; 
    padding-left: 22px;   
   }
   & .imageContent{
      display: flex;
      // border: 1px solid blue;
       width: 20%;       
       margin-bottom: -12%;     
   }
   & .rightContent{
      display: inline-block;
      text-align:left;
    //  border: 1px solid black;
      margin-left: 22%;
      margin-top: -40%;
      line-height:1.6 ;
   }
   & .rightContenth p{
       font-size: 11px !important;
   }

   
`
import styled from "styled-components";

export const SidebarContent = styled.div`
    width: 15%;  
    color: #E8E7E7;  
    padding-left:10px;
    cursor: pointer;

    & span {
    color: #E8E7E7;  
    margin-bottom: 15px !important;
    font-size: 17px !important;
    font-family: 'Roboto Slab', serif !important;
    display: inline-block !important;
     line-height:1.5; 
    font-weight:500;
    height: 20px;
    position: relative;
    z-index: 2;
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    padding-left: 12px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;  
    display: inline-block !important;    
   // border: 1px solid red;   
}

& .both-up:after
 {
    position: absolute;
    z-index: -1;
}

& .both-up:after {
    content: "";
    width: 4px;
    height: 2px;
    bottom: 0;
    left: 0
}


& .both-up:hover:after {
    width: 4px;
    height: 90%;
    
}

& span:focus:after,
span:focus:before,
span:hover:after,
span:hover:before {
    outline: 0;
    background-color: #f36f21;
    transition: all .3s ease 0s
}


`
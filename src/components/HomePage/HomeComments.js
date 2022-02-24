import styled from "styled-components"



const DIVCOMMENTS = styled.div`
        height:"250px",
           
`


export const HomeComments = ()=>{

    const comments=[{
        comment:""
    }]
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns: "repeat(3,31%)",
            columnGap: "3.5%",
            rowGap: "4%" ,
            backgroundColor:"transparent",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold"
        }} className="Home-Comments"> </div>
    )
}
import { useState } from "react"
import "./VideoContent.css"
export const VideoContent=()=>{
    const [randomdata, setRandomdata]=useState(Math.floor(Math.random() * 1200))
    // console.log( randomdata);
    
const datachange=()=>{
    setRandomdata(randomdata+1)
}

    return(
    <div className="Main_cont1">
        <div className="videos">
            <div className="sub_navbar">
                <div><span>LEARN</span></div>
                <div className="svg">
                    <p>hell</p>
                
                    <p>hello</p>
                    
           
                </div>

            </div>
             <hr/>
              <div className="video_count">
            <div><h2>15 videos</h2></div>
            <div><h3>download workbook</h3></div>
        </div>
        <div className="videotime">
            <p>57Minutes</p>
        </div>
        <div className="videosshow">
            <div className="videosdisplay"></div>
            <div className="contentdisplay">
                <h1>Introduction to filmmaking</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae, tempora incidunt quos nisi dicta beatae</p>
                <p>5 minutes</p>
            </div>
          
        </div>
        </div>    
        <div className="about">
            <div className="author-info">
                <div className="profile"></div>
                <div className="author-detail">
                    <h2>Nitesh tivari</h2>
                   <span>occupation </span>
                    <div className="follow">
                        <button onClick={datachange}>FOLLOW</button>
                        <p>{randomdata}-following</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
               <span>15</span> <br/>
               <span>lessons</span>
            </div>
            <hr/>
            <div>
                <h3>About</h3>
                <p className="aboutaouthor">Nitesh Tiwari is a filmmaker, screenwriter, and lyricist who is best known for his record-breaking Indian film, “Dangal”. Tiwari was born in Itarsi, Madhya Pradesh and graduated from the Indian Institute of Technology Bombay in 1996 with a Bachelor's degree in Metallurgy and Material Science engineering. While studying at IIT, he realised that he wanted to be in the creative field. Following his graduation, he became a part of the ad agency Leo Burnett
                     Sixteen years into the ad industry, Nitesh went from being a copywriter to becoming the CCO of Leo Burnett. He made his directorial debut by co-directing “Chillar Party” which won the National Film Award for Best Children's Film for that year. He then directed the Amitabh Bachchan-starer supernatural political drama “Bhoothnath Returns".Sequel to the 2008 movie Bhoothnath, this political comedy was appreciated by critics and was also a hit at the box-office.In 2015, Nitesh turned producer for his wife, Ashwiny Iyer Tiwari’s directorial debut Nil Battey. The critics lauded the movie starring Swara Bhaskar and Ria Shukla for its narrative, realism, and the performance of its cast. In 2016, he scripted and directed Dangal which was screened at the Beijing International Film Festival and second BRICS festival in June 2017. The film is the highest-grossing Indian film of all time and the fifth highest grossing non-English film, having collected over ₹2,000 crores. Tiwari has garnered the Filmfare Best Director Award and the Telstra People's Choice Award at the 2017 Indian Film Festival of Melbourne.
                </p>
                
            </div>
        </div>
    </div>
  )
}
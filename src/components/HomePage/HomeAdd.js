import React from 'react'
import ReactPlayer from 'react-player'

import appstore from '../Assets/appstore.png'

import gplay from '../Assets/gplay.png'
// Render a YouTube video player

export const HomeAdd = ()=>{
    return (
          <div id="Home-Add-Section">
              <div className="grid4">
                  <div className="heading-title">
              <h1>
                  <i>Learn From  <br/>India's Biggest <br/>Mentors </i>
              </h1>
            </div>
            <div className="heading-subtitle">
              <h3>SCROLL DOWN TO DISCOVER
              <br/>LEARN FROM THE BEST
              <br/>OVER 350+ VIDEO LESSONS
              <br/>GET SIGNED CERTIFICATES
              </h3>
            </div>
            <div className="heading-download-app">
                
               <div>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.navkarapps.gdm.gradesdontmatter">
                    <img src={gplay} alt="Get it on Google Play"/>
                  </a>
                  </div>
                  <div style={{
                    marginTop:"4%"
                  }}>
                  <a target="_blank" href="https://apps.apple.com/in/app/mento-learning-app/id1368051174">
                    <img src={appstore} alt="Download on the App Store"/>
                  </a>
             </div>
             
            </div>
          </div>

          <div className="grid8" style={{
              marginTop: "6%"
          }} >
  
              {/* <video id="videoBG" autoplay={true} loop="" muted={true} playsinline="">
                <source src="https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4" type="video/mp4"/>
              </video> */}
              <ReactPlayer  muted={true} playing={true} url='https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4'  width='100%' height='100%' className="IntroVideo"/>
             </div>
          </div>
    )
}
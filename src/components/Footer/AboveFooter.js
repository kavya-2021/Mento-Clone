import appstore from '../Assets/appstore.png'

import gplay from '../Assets/gplay.png'

export const AboveFooter = ()=>{
    return (
        <div style={{
            width: "470px",
            margin:"auto",
            marginTop : "20%",
            // marginLeft:"6%",
            textAlign:"center"
        }} id="Above-Footer"> 
           <h1 style={{
            margin:"auto",
            textAlign:"center"}}> Learn on the go </h1>
           <h2 style={{
               maxWidth:"400px",
               marginTop : "8%",
               marginLeft:"6%",
               color:"#666666",
               lineHeight:"30px",
               marginBottom:"50px",
               fontWeight:"400",
               textAlign:"center",
               fontSize:"0.9090909091em"
           }}> DOWNLOAD OUR APP FROM THE STORE AND <br/>  LEARN ON THE GO. </h2>
             <div className="heading-download-app" style={{
                  marginLeft:"4%",
             }}>
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
    )
}
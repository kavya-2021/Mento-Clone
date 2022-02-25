export const AboveFooter = ()=>{
    return (
        <div style={{
            width: "470px",
            margin:"auto",
            marginTop : "20%",
            textAlign:"center"
        }} id="Above-Footer"> 
           <h1> Learn on the go </h1>
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
                     <img src="https://www.mento.co.in/assets/google-play-black-f7eb60056f740e3f7175688fc28e4fc4c2c2a20fc8a26b4fe4d2e944e24fa014.svg" alt="Get it on Google Play"/>
                   </a>
                </div>
                <div>
                   <a target="_blank" href="https://apps.apple.com/in/app/mento-learning-app/id1368051174">
                     <img src="https://www.mento.co.in/assets/app-store-black-89aa31eafa093e3c654fd68421e895d386767ea78997aa91db6ef811c3fb0152.svg" alt="Download on the App Store"/>
                   </a>
                </div>
             </div>
        </div>
    )
}
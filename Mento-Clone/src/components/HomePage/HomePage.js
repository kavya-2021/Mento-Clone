import {HomeAdd} from './HomeAdd'

import {HomeContent} from './HomeContent'

export const HomePage = ()=>{
    return (
 
         <div id="Home-Page"> 
            <HomeAdd/>
           <br/>  <br/> 
            <h3>ALL LESSONS</h3> 
            <br/>  <br/> 
           <HomeContent/>
           
         </div>          

    )
}
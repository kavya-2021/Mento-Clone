import {HomeAdd} from './HomeAdd'

import {HomeContent} from './HomeContent'

export const HomePage = ()=>{
    return (
 
         <div id="Home-Page"> 
            <HomeAdd/>
           <br/> 
            <h3>ALL LESSONS</h3> 
            <br/> 
           <HomeContent/>
           
         </div>          

    )
}
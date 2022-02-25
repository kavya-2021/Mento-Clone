import {HomeCards} from "./HomeCards"

import {useState,useEffect} from 'react'

import axios from 'axios'

export const HomeContent = ()=>{ 
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get("https://mento-backend-server.herokuapp.com/alltopics").then((res)=>{
            setData(res.data);
        })
    },[])
    return (
        <div id="Home-Content-Cards">
            {
                data.map((item,index)=>{
                    return <HomeCards key={index} image={item.author_image[0]} title={item.topic_name} profession={item.profession} name={item.author_name.toUpperCase()}/>
                })
            }
        </div>
    )
}
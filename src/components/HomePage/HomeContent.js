import {HomeCards} from "./HomeCards"

export const HomeContent = ()=>{
    const x= ["https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://w7.pngwing.com/pngs/51/611/png-transparent-beige-and-orange-character-illustration-pogo-animated-film-chutki-cartoon-india-india-television-human-world.png","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://w7.pngwing.com/pngs/51/611/png-transparent-beige-and-orange-character-illustration-pogo-animated-film-chutki-cartoon-india-india-television-human-world.png","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://w7.pngwing.com/pngs/51/611/png-transparent-beige-and-orange-character-illustration-pogo-animated-film-chutki-cartoon-india-india-television-human-world.png","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://w7.pngwing.com/pngs/51/611/png-transparent-beige-and-orange-character-illustration-pogo-animated-film-chutki-cartoon-india-india-television-human-world.png"];
    return (
        <div id="Home-Content-Cards">
            {
                x.map((item,index)=>{
                    console.log(item);
                    return <HomeCards key={index} items={item}/>
                })
            }
        </div>
    )
}
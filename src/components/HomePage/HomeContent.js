import {HomeCards} from "./HomeCards"

export const HomeContent = ()=>{
    const x= ["https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg","https://i.pinimg.com/originals/32/ad/ac/32adac4a3b56e0f0ccbc274c8d4f0577.jpg"];
    const y = [
        {
            topic_name:"IMPROV-COMEDY 101",
            topic:"IMPROV-COMEDY-101",
            author_name:"Saad Khan",
            author_about:["Saad Khan is an Indian film director, screenwriter and an acting teacher. He has directed the critically acclaimed film “Humble Politician Nograj” in 2017. The film became the first Kannada-English movie to become a box office hit in India and achieve the most significant overseas release across the USA, UK, Europe, Australia, Germany, among other countries.", "Khan was born in Mumbai, India and was raised in Bangalore. While pursuing engineering, he developed an interest in theatre and started writing and directing plays. He spearheaded as a theatre group which produced over 12 plays in 4 years."],
            profession:"FOUNDER, THE IMPROV",
            author_image:["https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Improv-Comedy/landscape+saad+khan.jpg","https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Improv-Comedy/saad77.jpg"],
            tag_line:"India's Leading Improv Comedian",
            trailer_poster:"https://www.mento.co.in/assets/video-overlay-6cda67750bdfd9f1cddd03e28869bf1a16605e410483d06a0a666b882f8f54a6.jpg",
            trailer_video: "https://d1tthr7pv14hhy.cloudfront.net/mp4/Saad_Khan_Improv_Comedy/trailer/sadd6543ed_3072p.mp4",
            total_duration:"33 MIN",
        },
        {
            topic_name:"STANDUP-COMEDY-101",
            author_name:"Sanjay Manaktala",
            author_about:["Sanjay Manaktala is an Indian stand-up comedian based in Bangalore. With a stand-up experience of more than 4 years, he has performed in over 90 Corporate events and 200 Solo shows across the country.","He is particularly known for his techie humor videos. In this genre, he has been making a series of videos called “IT Guy”, which he describes as a parody for all the IT Engineers."],
            profession:"Comedian",
            author_image:["https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Standup-Comedy/landscape+sanjay.jpg","https://d1tthr7pv14hhy.cloudfront.net/Images/Courses/Standup-Comedy/sanjay77.jpg"],
            tag_line:"Sanjay Manaktala About a Career in Stand-Up Comedy",
            trailer_poster:"https://www.mento.co.in/assets/video-overlay-6cda67750bdfd9f1cddd03e28869bf1a16605e410483d06a0a666b882f8f54a6.jpg",
            trailer_video: "https://d1tthr7pv14hhy.cloudfront.net/mp4/Sanjay_Manaktala_Stand_up_Comedy/Trailer/sanjay765r_2048p.mp4",
            total_duration:"34 MIN", 
        }
    ]
    return (
        <div id="Home-Content-Cards">
            {
                y.map((item,index)=>{
                    console.log(item);
                    return <HomeCards key={index} image={item.author_image[0]} title={item.topic_name} profession={item.profession}/>
                })
            }
        </div>
    )
}
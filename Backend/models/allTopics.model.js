const mongoose = require("mongoose");

const allTopicsSchema = new mongoose.Schema({
        topic_name: {type: String, required: true},
        author_name: {type: String, required: true},
        author_about: {type: String, required: true},
        profession: {type: String, required: true},
        author_image: [ {type: String, required: true} ],
        tag_line: {type: String, required: true},
        trailer_poster: {type: String, required: true},
        trailer_video: {type: String, required: true},
        total_duration: {type: String, required: true},
        categories: [ {type: String, required: true} ],
        videos:[
            {  
                title: {type: String, required: true},
                about: {type: String, required: true},
                duration: {type: String, required: true},
                video_poster: {type: String, required: true},
                video:  {type: String, required: true}
            },
            
        ]
    },{
     versionKey: false,
    timeStamps: true,
});

const AllTopics = mongoose.model("allTopics", allTopicsSchema);

module.exports = AllTopics;




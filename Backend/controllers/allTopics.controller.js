const express = require("express");
const router = express.Router();
const AllTopics = require("../models/allTopics.model");

router.get("/", async(req, res) => {
    try{
        const allTopics = await AllTopics.find().lean().exec();
        return res.status(200).send(allTopics);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

router.post("/", async(req, res) => {
    try{
        const allTopics = await AllTopics.create(req.body);
        return res.status(200).send(allTopics);
    }catch(err){
        return res.status(500).send(err.message);
    }
});


// for standup comedy 
router.get("/standup_comedy/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Standup comedy"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for improve comedy 
router.get("/improv_comedy/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Improv comedy"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for  entrepreneurship
router.get("/entrepreneurship/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Entrepreneurship"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Performing arts
router.get("/performing_arts/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Performing arts"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Artist management
router.get("/artist_management/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Artist management"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Food blogging
router.get("/food_blogging/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Food blogging"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Photography
router.get("/photography/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Photography"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Film making
router.get("/film_making/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Film making"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Content creation
router.get("/content_creation/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Content creation"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Film production
router.get("/film_production/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Film production"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Web series
router.get("/web_series/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Web series"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Design
router.get("/design/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Design"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for Illustration
router.get("/illustration/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Illustration"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

// for fashion blogging
router.get("/fashion_blogging/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Fashion blogging"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});


// for fashion blogging
router.get("/beat_boxing/", async(req, res) => {
    try{
        const items = await AllTopics.find({categories: "Beat boxing"}).lean().exec();
        return res.status(200).send(items);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

module.exports = router;
const express = require('express')
const createAGuideRouter = express.Router()
const CreatedGuide = require('../Models/createAGuide');
const verifyToken = require('../middlewares/verifyToken');
const createAGuide = require('../Models/createAGuide');


createAGuideRouter.post('/', verifyToken, async (req , res) => {
    console.log(req.body)
        
    try {
            const createdGuide = new CreatedGuide({
                title: req.body.title,
                summary: req.body.summary,
                location: req.body.location,
                typeOfActivity: req.body.typeOfActivity,
                budget: req.body.budget,
                highlights: req.body.highlights,
                experience: req.body.experience,
                authorId: req.body.authorId,
            });
            
            const newGuide = await createdGuide.save();
            res.status(200).send();
            
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    });

   module.exports = createAGuideRouter;
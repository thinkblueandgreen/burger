const burger = require("../models/burger");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        console.log(data)
        var hbsObject = {
            burger: data
        };
        
        res.render("index", hbsObject)
    })
});

router.post("/api/burgers", function(req, res){
    
    burger.create(req.body.name, function(result){
        
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function(req, res){
    burger.update(req.body.id, function(result){
        res.json({ id: result.insertId });
    })
})
module.exports = router;




var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index.html');
    console.log("In Index Page");
});

module.exports = router;
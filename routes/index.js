var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var queryString = require('querystring');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post("/readNameAndRespond", function (request, response, next) {

    //expecting data variable called name --retrieve value using body-parser
    var body = JSON.stringify(request.body);  //if wanted entire body as JSON

    response.send('Hello ' + body.name);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});





module.exports = router;

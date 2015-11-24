var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser);
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kargir234",
    database: "emp"
});
/* GET home page. */
router.get('/',function(req,res,next){
    res.render('signup',{ title: 'Sign Up' });
});
router.post('/', function(req, res, next) {
    var id23 = req.body.f1;
    var age = req.body.f2;
    var first = req.body.f3;
    var last = req.body.f4;
    var d = {'id':id23,'age':age,'first':first,'last':last};
    var query = con.query('INSERT INTO employees SET ?', d, function(err, result) {
        if(err) throw err;
        console.log("Successfully inserted \n"+d);
    });
    res.setHeader('content-type','text/html');

    res.render('signup', { title: 'Sign Up' }).send(query.toString()+" successful");

});

module.exports = router;
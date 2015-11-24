var express = require('express');
var router = express.Router();
//var io = require('socket.io')(http);
//var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
var models = require('../models');
var db = require('../models').db;
app.use(bodyParser);
var ide;
var data1 = null;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kargir234",
  database: "emp"
});
/* GET users listing. */
router.post('/',function(req,res){
    //var a = req.body.idinp;
    //res.redirect('/users/'+a);
    setInterval(function(){db.employee.findOne({where:{id: req.body.idinp}}).then(function(users){
        res.send({datw:users});
    })},1000);

});
/*io.on('connection', function(socket) {
    db.employee.findOne({where:{id: req.body.idinp}}).then(function(users){
        res.send({datw:users});});
    console.log('a user connected');
});*/
router.get('/', function(req, res, next) {

    db.employee.findAll().then(function(users){

        res.render('users', { title: 'Users',
            datw:users
        });
    });
    });
router.get('/:id2', function(req, res) {
  ide = req.params.id2;

    function data1() {

    if (ide > 0){
      con.query('SELECT * FROM employees where id='+ide, function (err, rows) {
        if (err) throw err;
        console.log(rows);
          res.render('users', { title: 'Users',
              datw:rows
          });

      });}
    else {
      con.query('SELECT * FROM employees ', function (err, rows) {
        if (err) throw err;
          res.render('users', { title: 'Users',
              datw:rows
          });
      });
    }
  }
    data1();
});


module.exports = router;

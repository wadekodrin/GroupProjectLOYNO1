const express = require('express');
var mysql = require('mysql');
const app = express ();

var pool = mysql.createPool({
	host	: 'localhost',
	user	: 'root',
	password: 'root',
	database: 'gp1' //database name in MAMP
});

var path = require('path');

app.use(express.static(__dirname + '/Public')); // set the static files location /public/img will be /img for users


//Frontend route

app.get('/', function(req, res) {

   res.sendFile(path.resolve('Public/index.html'));
 
 })

app.get('/index2', function(req, res) {

   res.sendFile(path.resolve('Public/index2.html'));
 
 })

app.get('/buttontest', function(req, res) {

   res.sendFile(path.resolve('Public/buttontest.html'));
 
 })

///////////////////////////////////////////////////////

app.get ('/Company_Name_All', function (req,res){ //'/routetest' name of route

	pool.getConnection(function(err, connection){
		connection.query('SELECT * FROM companies ORDER BY companies.Company_Name ASC', function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});

app.get ('/Position_All', function (req,res){ //'/routetest' name of route
//localhost:3000/Position_All?Company_Name=wade after route name, ? then key name (case sensitive) = value. Value is then passed to route function via req.query."key"
//localhost:3000/Position_All?Company_Name=wade&key=value&key=value
	pool.getConnection(function(err, connection){
		connection.query('SELECT * FROM openings INNER JOIN companies on openings.Company_ID = companies.Company_ID ORDER BY openings.position ASC', function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});

app.get ('/Company_Name_Search', function (req,res){ 
	var searchterm = req.query.Company_Name;
	pool.getConnection(function(err, connection){
		var sqlquery= "SELECT * FROM companies WHERE Companies.Company_Name='"+searchterm+"' ORDER BY companies.Company_Name ASC";
		connection.query(sqlquery, function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});
app.get ('/Company_Name_Openings_Search', function (req,res){ 
	var searchterm = req.query.Company_Name;
	pool.getConnection(function(err, connection){
		var sqlquery= "SELECT * FROM openings INNER JOIN companies on openings.Company_ID = companies.Company_ID WHERE companies.Company_Name ='"+searchterm+"' ORDER BY companies.Company_Name ASC";
		console.log(sqlquery);
		connection.query(sqlquery, function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});
app.get ('/Position_Search', function (req,res){ 
	var searchterm = req.query.Position;
	pool.getConnection(function(err, connection){ 
		var sqlquery= "SELECT * FROM openings WHERE openings.Position='"+searchterm+"' ORDER BY openings.position ASC";
		console.log(sqlquery);
		connection.query(sqlquery, function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});
app.get ('/NTID_TITLE_SEARCH', function (req,res){ 
	var searchterm = req.query.Title;
	pool.getConnection(function(err, connection){
		var sqlquery= "SELECT * FROM NOLATECH_CALC WHERE NOLATECH_CALC.Title='"+searchterm+"' ORDER BY nolatech_calc.Title ASC";
		console.log(sqlquery);
		connection.query(sqlquery, function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});
app.get ('/Openings_NT_TITLE', function (req,res){ 
	var searchterm = req.query.Title;
	pool.getConnection(function(err, connection){
		var sqlquery= "SELECT * FROM openings INNER JOIN NOLATECH_CALC on openings.NTID = NOLATECH_CALC.NTID WHERE NOLATECH_CALC.title='"+searchterm+"' ORDER BY openings.NTID ASC";
		console.log(sqlquery);
		connection.query(sqlquery, function (error, results, fields){
			connection.release();
			if(!err) {
				res.json(results);
			}
		});
	});
});

	/*console.log(req);
	console.log('route test');
	res.send('route test - this is the response');*/


// app.post ('/routetest2', function (req,res){
// 	console.log('route test2 2');
// 	//res.send('route test2 2- this is the response');
// });

app.listen(3000, function(){ console.log('Example app listening on port 3000!')})

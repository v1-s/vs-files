const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

// for creating server connection
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  port:"3325",
  database:"my_database",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connection is successful");
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/Contact", function (req, res) {
  console.log("request", req.body.data.email);

  //var firstname = req.body.user;
  // lastname = req.body.user;
  //  var Email=req.body.user;
  var email = req.body.data.email;
  var password = req.body.data.password;

  // varemail = req.body.data.email,
  // password: req.body.data.password,

  console.log("request", email, password);

  console.log("contact api called");

  // var inst= INSERT INTO ipl_users (username,email,Password,ConfirmPassword) VALUES ?;
  // conn.query('insert into test(firstname,lastname,password,confirmpassword) VALUES(?,?,?,?)',[fname,lname,pswd,confpswd ],function (error, results, fields)

  conn.query(
    "INSERT INTO login SET ?",
    { email, password },
    function (error, results, fields) {
      //conn.query(inst, function (err, result) {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }

      // return res.send(JSON.stringify(results));
    }
  );
});

app.get("/UserList", function (req, res) {
  conn.query("SELECT * FROM data_employee", function (error, results, fields) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("success");
    }
    return res.send(JSON.stringify(results));
  });
});
// app.delete('./DeleteUser:id',function(req,res){

//     conn.query('SELECT FROM users where id=? ',function(error,result,fields){
//         if(erroe){
//             console.log("delecte api is failing");
//         }
//         else{
//             console.log("id is deleted successfully");
//         }
//     })
// })
app.listen(1227);
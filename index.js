var express = require("express");
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});


router.get("/",function(req,res){
  //res.sendFile(__dirname + "/views/index.html");
});


app.use("/",router);

/*app.use("*",function(req,res){
  res.sendFile(__dirname + "/public/404.html");
});*/

app.listen(5000,function(){
  console.log("Live at Port 3000");
});
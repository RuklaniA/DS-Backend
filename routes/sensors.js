const express =require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/",(req,res)=>{
  mysqlConnection.query("SELECT * from sensors",(err,rows,fields)=>{
      if(!err){
         
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
          res.send(rows);

      }
      else{
          console.log(err);
      }

  })
})

module.exports =Router;

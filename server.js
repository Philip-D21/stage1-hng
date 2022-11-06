const http = require('http');
const url = require("url");
const express = require("express");

const port = 3000;

const app = express();


app.use(express.json());
const server = http.createServer((req, res) => {
    res.setHeader("content-type","application/json")
    if (req.method !== 'GET') {
        res.end(`{"error": "error in routes"}`)
    } else {
        if (req.url === '/api/user') {
           res.end(`{"slackUsername":"Philip Daudu","age": 22,"backend": true ,"bio":" I'm passionate about building, growing and collaborating with teams"}`)
        }
    }
    });


app.post('/', (req, res) => {
        const  operation_type = req.body.operation_type
        const  x = req.body.x
        const  y = req.body.y
      
        if (isNaN(x) || isNaN(y))
          return res.send({
            error: "Values are invalid"
          })
      
        let result = ''
      
        if (operation_type.toLowerCase() === "addition") {
          result = x + y
        }
        else if (operation_type.toLowerCase() === "multiplication") {
          result = +x * +y
        }
        else if (operation_type.toLowerCase() === "subtraction") {
          result = +x - +y
        }
        else { return res.send({
          error: "Available operation_type are 'addition', 'multiplication', or 'subtraction' "
        })}
      
        res.send({slackUsername: 'Philip-D21', result, operation_type })
      })
      

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})







































































// const http = require("http");
// const path = require("path");
// const url = require("url");

// const port = 5000

// const server= http.createServer( (req,res) => {
//    res.writeHead(200);
//    res.write(`{
//     "slackUsername":"Philip Daudu","age": 22,"backend":"true", 
//     "bio":" I'm passionate about building, growing and collaborating with teams"
//    }`)
//    res.end();
// });
// //     const reqUrl = http
    
// //    if(req.method =="GET"){ if(reqUrl == "/"){
// //     res.writeHead(200);
// //     res.end(`{
// //         "slackUsername":"Philip Daudu","age": 22,"backend":"true", "bio":" I'm passionate about building, growing and collaborating with teams"
// //     }`)
// // } else if(req.method == "POST"){ 
// //     if(reqUrl =="/home"){
// //     res.write("This is home page")
// //     res.end();
// // }
// // }
// //    }
// //});


// server.listen(port,()=>{
//     console.log("Server is up and running");
// })

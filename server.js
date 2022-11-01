const http = require('http');
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("content-type","application/json")
    if (req.method !== 'GET') {
        res.end(`{"error": "error in routes"}`)
    } else {
        if (req.url === '/') {
           res.end(`{"slackUsername":"Philip Daudu","age": 22,"backend": true ,"bio":" I'm passionate about building, growing and collaborating with teams"}`)
        }
    }
    });

//  if (req.method == 'GET' && req.url == '/' ) 
//         res.setHeader("content-type","application/json")
//         res.write(`{
//             "slackUsername":"Philip Daudu","age": 22,"backend": true, 
//             "bio":" I'm passionate about building, growing and collaborating with teams"
//            }`)
    
//         res.end();
// })

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

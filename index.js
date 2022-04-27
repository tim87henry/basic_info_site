const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


// Commenting out previous vanilla node js code

/*
const server = http.createServer((req,res) => {
    const file = (req.url === "/")? "index.html":req.url+".html";
    fs.readFile(path.join(__dirname,"public",file), (err, content) => {
        res.writeHead(200,{"Content-Type":"text/html"})
        if (err) {
            fs.readFile(path.join(__dirname,"public","404.html"), (err1, not_found) => {
                res.end(not_found)
            })
        } else {
            res.end(content)
        }
    })
});
    
server.listen(5000, () => console.log("Server started ...."))
*/

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/about',function(req, res) {
    res.sendFile(path.join(__dirname,'public/about.html'));
});

app.get('/contact',function(req, res) {
    res.sendFile(path.join(__dirname,'public/contact.html'));
});

app.get('*',function(req, res) {
    res.sendFile(path.join(__dirname,'public/404.html'));
});

app.listen(5000, function() {
    console.log("Start listening on port 5000 ....")
})

/*
 * Configuration
 */
var express = require('express'),
    fs = require('fs'),
    cors = require('cors'),
    https = require('https'),
    band = require('./bandCtrl.js');

var option = {
    key:fs.readFileSync('cert/ssl-key.pem'),
    cert:fs.readFileSync('cert/ssl-cert.pem')
}

/* 
 * CREATE SERVER
 */
var app = express()
app.use(cors({credentials: true, origin: true}));


/*
 * Routes
 */
app.get("/", function(req, res){res.send("hello");console.log("connect")})
app.get("/band", band.post);
app.post("/band", band.post);
app.delete("/band", band.delete);


/*
 * RUN SERVER
 */
https.createServer(option, app).listen(443);

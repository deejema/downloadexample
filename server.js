const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
// Cross-Origin resource sharing
const cors = require('cors');

// Parse server
const ParseServer = require('parse-server').ParseServer;

const request = require('request');

const http = require('http');
const server = http.createServer(app);

// Parsers
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 1337;


// API location
app.use(express.static(path.join(__dirname, 'dist'))); // Opens up app

// Download file from server
router.post('/download', function(req,res,next){
    filepath = path.join(__dirname,'/src/assets') +'/'+ req.body.filename;
    console.log(filepath);
	res.sendFile(filepath);
	
});
	
server.listen(port, () => {
	console.log('Connecting to port: ' + port);
});
	


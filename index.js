var express = require('express');

let app = express();

let port = process.env.port | 3000;

app.listen(3000, function () {
    console.log("server running on port 3000");
});

app.get('/', function (req, res) {
    res.status(200);
    res.send("API Up and Running");
});

app.get('/health',function(req,res){
    res.send("healthy");
});



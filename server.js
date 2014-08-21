var express = require("express");
var logfmt = require("logfmt");
var path = require('path');

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(path.resolve(__dirname + '/public')));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
    console.log("Load http://0.0.0.0:5000 in your browser");
});
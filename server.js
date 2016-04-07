// Node.js Dependencies
const http = require("http");
const path = require("path");

var express = require('express');
var app = express();

var router = {
    index: require("./routes/index")
};

var router1 = {
    message: require("./routes/message")
};




var bodyParser = require('body-parser');
var parser = {
    body: require("body-parser")
};


//var hbs = require('handlebars');
var handlebars = require('express3-handlebars');
// // Database Connection
//
 var mongoose = require('mongoose');
 var db = mongoose.connection;
 mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/cogs121');
 db.on('error', console.error.bind(console, 'Mongo DB Connection Error:'));
 db.once('open', function(callback) {
     console.log("Database connected successfully.");
 });

// Middleware
app.set("port", process.env.PORT || 3000);
app.engine("html", handlebars());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(parser.body.urlencoded({ extended: false }));
app.use(parser.body.json());

// Routes
app.get("/", router.index.view);
app.post("/message", router1.message.send);


// Start Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});

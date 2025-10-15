var express = require('express');
var app = express();
// body-parser is a module or middleware of node js i.e used to post data from users form on server via body-parser
const bodyParser=require("body-parser");
const path=require('path');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
// used express.static('public') to load css | js | images | fonts
app.use(express.static('public'));
// create a middleware to post data via form on node server 
app.use(bodyParser.urlencoded({
    extended:true
}));
// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
res.render('pages/index');
});
// about page
app.get('/about', function(req, res) {
res.render('pages/about');
});
app.listen(8080);
console.log('Server is listening on port http://localhost:8080');

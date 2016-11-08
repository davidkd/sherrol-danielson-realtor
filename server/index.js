//Modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');

//Port
var port = 3000;

//Initialize app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../public'));

var sdrDatabase = massive.connectSync({
  connectionString: "postgres://localhost/SDR"
})
app.set('db', sdrDatabase);

//Controllers
var adminCtrl = require('./controllers/adminCtrl.js');
var newsletterCtrl = require('./controllers/newsletterCtrl.js');
var testimonialsCtrl = require('./controllers/testimonialsCtrl.js');
var usersCtrl = require('./controllers/usersCtrl.js');

//Endpoints
//Testimonials
app.post('/testimonial/post', testimonialsCtrl.createTestimonial);
app.get('/testimonial', testimonialsCtrl.getTestimonial);
app.get('/testimonials', testimonialsCtrl.getTestimonials);
//Users
app.post('/register/user', usersCtrl.createUser);
app.get('/user', usersCtrl.getUser);
app.get('/users', usersCtrl.getUsers);








//Listen
app.listen(port, function() {
  console.log('listening on port ' + port);
});

// MODULES //
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var session = require('express-session');

// PORT //
var port = 3000;

// CONFIG //
var config = require('./config');

// EXPRESS //
var app = module.exports = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(cors());

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var sdrDatabase = massive.connectSync({
  connectionString: "postgres://localhost/SDR"
});
app.set('db', sdrDatabase);
var db = app.get('db');

// CONTROLLERS //
var adminCtrl = require('./controllers/adminCtrl.js');
var newsletterCtrl = require('./controllers/newsletterCtrl.js');
var testimonialsCtrl = require('./controllers/testimonialsCtrl.js');
var usersCtrl = require('./controllers/usersCtrl.js');

// SERVICES //
var passport = require('./services/passport');

// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

// SESSION AND PASSPORT //
app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT ENDPOINTS //
app.post('/login', passport.authenticate('local', {
	successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// USER ENDPOINTS //
app.post('/register', usersCtrl.createUser);
app.get('/user', usersCtrl.getUser);
app.get('/users', usersCtrl.getUsers);
app.get('/me', usersCtrl.getCurrentUser);

// TESTIMONIAL ENDPOINTS //
app.post('/testimonial/post', testimonialsCtrl.createTestimonial);
app.get('/testimonial', testimonialsCtrl.getTestimonial);
app.get('/testimonials', testimonialsCtrl.getTestimonials);

// NEWSLETTER ENDPOINTS //
app.post('/newsletter/post', newsletterCtrl.createNewsletter);
app.get('/newsletters', newsletterCtrl.getNewsletters);






// CONNECTIONS //
app.listen(port, function() {
  console.log('listening on port ' + port);
});

// PASSPORT //
var passport = require('passport');
var LocalStrategy = require('passport-local')
	.Strategy;

// BCRYPT //
var bcrypt = require('bcryptjs');

// APP //
var app = require('./../index');
var db = app.get('db');

// VERIFY PASSWORD //
function verifyPassword(submitedPass, userPass) {
	return bcrypt.compareSync(submitedPass, userPass);
}

// RUN WHEN LOGGING IN //
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(email, password, done) {

	db.users.read_user_email([email], function(err, user) {
		user = user[0];
    console.log(user);

		// If err, return err
		if (err) done(err);

		// If no user if found, return false
		if (!user) return done(null, false);

		// If user is found, check to see if passwords match. If so, return user
		if (verifyPassword(password, user.password)) return done(null, user);

		// If no match, return false
		return done(null, false);
	});
}));

// Puts the user on the session
passport.serializeUser(function(user, done) {
  console.log(user);
	done(null, user.userid);
});
passport.deserializeUser(function(id, done) {
  console.log(id);
	db.users.read_user([id], function(err, user) {
		done(err, user);
	});
});

module.exports = passport;

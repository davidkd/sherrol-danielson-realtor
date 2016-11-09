var app = require('../index.js');
var db = app.get('db');

// BCRYPT
var bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {
  createUser: function(req, res, next) {
    var user = req.body;

    // Hash the users password for security
    user.password = hashPassword(user.password);
    console.log(req);
    db.users.create_user([user.firstname, user.lastname, user.email, user.password], function(err, user) {
      console.log(err, user);
      res.status(200).send(user);
    })
  },
  getUser: function(req, res, next) {
    db.users.read_user([
      req.query.userID
    ], function(err, user) {
      res.status(200).send(user);
    })
  },
  getUsers: function(req, res, next) {
    db.users.read_users(function(err, users) {
      res.status(200).send(users);
    })
  },
  getCurrentUser: function(req, res, next) {
    // If user isnt on the session, then return error status
    if (!req.user) return res.status(401)
      .send('current user not defined');

    // Remove password for security
    var user = req.user[0];
    console.log(user);

    delete user.password;

    // Return user
    return res.status(200)
      .json(user);

      }
};

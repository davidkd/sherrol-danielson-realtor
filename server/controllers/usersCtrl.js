var app = require('../index.js');
var db = app.get('db');

module.exports = {
  createUser: function(req, res, next) {
    console.log(req);
    db.users.create_user([req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.phone], function(err, user) {
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
  }
};

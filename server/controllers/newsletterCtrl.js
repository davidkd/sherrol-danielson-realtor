var app = require('../index.js');
var db = app.get('db');

module.exports = {
  createNewsletter: function(req, res, next) {
    db.newsletters.insert({
      title: req.body.title,
      date: req.body.date,
      newsletter: req.body.newsletter
    }, function(err, newsletter) {
      if(err){res.send(err)}
      res.status(200).send(newsletter);
    })
  },
  getNewsletters: function(req, res, next) {
    db.newsletterQueries.read_newsletters(function(err, newsletter) {
      res.status(200).send(newsletter);
    })
  }

};

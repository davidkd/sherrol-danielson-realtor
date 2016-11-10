var app = require('../index.js');
var db = app.get('db');

module.exports = {

  createTestimonial: function(req, res, next) {
    console.log("log", req.user);
    db.testimonials.insert({
      testimonialcontent: req.body.testimonialcontent,
      testfirstname: req.body.testfirstname,
      testlastname: req.body.testlastname,
      userid: req.user[0].userid
    }, function(err, testimonial) {
      if(err){res.send(err)}
      res.status(200).send(testimonial);
    })
  },

  getTestimonial: function(req, res, next) {
    db.testimonialQueries.read_testimonial([
      req.query.userID
      ], function(err, testimonial) {
      res.status(200).send(testimonial);
    })

    // db.testimonials.find({
    //   userid: req.query.userID
    // }, function(err, testimonial) {
    //   res.status(200).send(testimonial);
    // })
  },

  getTestimonials: function(req, res, next) {
    db.testimonialQueries.read_testimonials(function(err, testimonials) {
      res.status(200).send(testimonials);
    })
  }


};

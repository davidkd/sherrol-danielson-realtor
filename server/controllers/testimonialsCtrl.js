var app = require('../index.js');
var db = app.get('db');

module.exports = {

  createTestimonial: function(req, res, next) {
    console.log([req.body.TestimonialContent, req.body.testFirstName, req.body.testLastName])
    db.testimonials.create_testimonial([req.body.testimonialcontent, req.body.testfirstname, req.body.testlastname], function(err, testimonial) {
      if(err){res.send(err)}
      res.status(200).send(testimonial);
    })
  },

  getTestimonial: function(req, res, next) {
    db.testimonials.read_testimonial([
      req.query.userID
      ], function(err, testimonial) {
      res.status(200).send(testimonial);
    })
  },

  getTestimonials: function(req, res, next) {
    db.testimonials.read_testimonials(function(err, testimonials) {
      res.status(200).send(testimonials);
    })
  }


};

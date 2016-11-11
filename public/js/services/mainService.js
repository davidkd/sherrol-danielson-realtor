angular.module('realEstate').service('mainService', function($http) {

  this.getTestimonial = function() {
    return $http ({
      method: 'GET',
      url: '/testimonial'
    });
  }
  this.getTestimonials = function() {
    return $http ({
      method: 'GET',
      url: '/testimonials',
    });
  }
  this.postTestimonial = function(testimonial, firstname, lastname) {
    return $http ({
      method: 'POST',
      url: '/testimonial/post',
      data: {
        testimonialcontent: testimonial,
        testfirstname: firstname,
        testlastname: lastname
      }
    });
  }
  this.getNewsletters = function() {
    return $http ({
      method: 'GET',
      url: '/newsletters'
    });
  }
  this.postNewsletter = function(title, date, newsletter) {
    return $http ({
      method: 'POST',
      url: '/newsletter/post',
      data: {
        title: title,
        date: date,
        newsletter: newsletter
      }
    });
  }

});

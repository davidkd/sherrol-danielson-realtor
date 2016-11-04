SELECT testimonials.testimonialcontent as testimonial, testimonials.userid, users.firstname, users.lastname
FROM testimonials
INNER JOIN users
ON (testimonials.userid = users.userid);

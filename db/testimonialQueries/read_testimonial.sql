select testimonials.testimonialcontent, testimonials.userid, users.firstname, users.lastname
from testimonials
INNER JOIN users
on (testimonials.userid = users.userid)
WHERE testimonials.userid = $1;

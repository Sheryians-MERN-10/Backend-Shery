var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Book Store' });
});

router.get('/create-book', function (req, res, next) {
  res.render('createBook', {title: "Create Book"})
})

router.get('/library', function (req, res, next) {
  let data = [
    {
      title: "Physics",
      desc: "A comprehensive guide to the fundamentals of physics, covering classical mechanics, electromagnetism, and thermodynamics."
    },
    {
      title: "Organic Chemistry",
      desc: "An in-depth look at the principles of organic chemistry, including reaction mechanisms and the structure of organic compounds."
    },
    {
      title: "Advanced Mathematics",
      desc: "Explores advanced topics in mathematics such as calculus, linear algebra, and differential equations."
    },
    {
      title: "Quantum Physics",
      desc: "An introduction to quantum mechanics, discussing wave-particle duality, the uncertainty principle, and quantum states."
    },
    {
      title: "Physical Chemistry",
      desc: "Combines principles of physics and chemistry to understand the physical properties of molecules and their reactions."
    },
    {
      title: "Discrete Mathematics",
      desc: "Covers topics in discrete mathematics including logic, set theory, combinatorics, and graph theory."
    },
    {
      title: "Thermodynamics",
      desc: "Examines the laws of thermodynamics and statistical methods to study the behavior of systems in thermal equilibrium."
    },
    {
      title: "Inorganic Chemistry",
      desc: "Focuses on the properties and behavior of inorganic compounds, with a special emphasis on transition metals and coordination chemistry."
    },
    {
      title: "Linear Algebra",
      desc: "Discusses vector spaces, linear transformations, matrices, and their applications in various fields."
    },
    {
      title: "Electromagnetism",
      desc: "Studies electric and magnetic fields, their interactions, and applications in modern technology."
    },
    {
      title: "Number Theory",
      desc: "An introduction to number theory, including prime numbers, divisibility, and modular arithmetic."
    },
    {
      title: "Classical Mechanics",
      desc: "Details the motion of bodies under the influence of forces, with applications in engineering and physics."
    }
  ];
  res.render('library', { title: 'Library', data })
})

router.post('/library', function (req, res, next) {
  let data = [
    {
      title: "Physics",
      desc: "A comprehensive guide to the fundamentals of physics, covering classical mechanics, electromagnetism, and thermodynamics."
    },
    {
      title: "Organic Chemistry",
      desc: "An in-depth look at the principles of organic chemistry, including reaction mechanisms and the structure of organic compounds."
    }
  ];
  res.render('library', {title: "Library", data})
})

router.get('/details', function (req, res, next) {
  res.render('details', {title: "Book Details/Update"})
})

router.get('/about', function (req, res, next) {
  let data = [
    {
      heading: "Welcome to Bookstore",
      content: "Welcome to Bookstore, where the love for books and community converge to create an exceptional literary experience. Established in 204, we have dedicated ourselves to nurturing the joy of reading and fostering a vibrant community of book lovers."
    },
    {
      heading: "Our Story",
      content: "Our story began with a simple dream: to create a sanctuary for readers and writers alike. From our modest beginnings as a small, independent bookstore, we have grown into a cherished destination for book enthusiasts. Thanks to the unwavering support of our loyal customers and the commitment of our passionate team, Bookstore has become more than just a bookstore — it’s a community hub where stories come to life."
    }
  ]
  res.render('about', { title: 'About Page', data })
})

module.exports = router;

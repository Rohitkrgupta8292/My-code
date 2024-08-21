
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
  {
    "name": "JavaScript",
    "price": 20000,
    "instructor": "Rohit"
  },
  {
    "name": "Web Development with JavaScript",
    "price": 25000,
    "instructor": "Sarah"
  },
  {
    "name": "Advanced JavaScript Concepts",
    "price": 30000,
    "instructor": "Alex"
  },
  {
    "name": "Node.js Essentials",
    "price": 18000,
    "instructor": "Chris"
  },
  {
    "name": "React.js Fundamentals",
    "price": 22000,
    "instructor": "Jessica"
  },
  {
    "name": "Full Stack JavaScript Development",
    "price": 35000,
    "instructor": "Mark"
  }
]
);

console.log("Done inserting data")
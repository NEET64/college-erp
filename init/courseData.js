const sampleCourse = [
  {
    courseCode: "SESH1070",
    courseName: "Fundamentals of Mathematics",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 2,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 50,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECV1040",
    courseName: "Basics of Civil & Mechanical Engineering",
    teachingScheme: {
      theory: 4,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE1050",
    courseName: "Programming for Problem Solving",
    teachingScheme: {
      theory: 3,
      practical: 4,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 40,
        ese: 60,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SESH1240",
    courseName: "Electrical& Electronics Workshop",
    teachingScheme: {
      theory: 0,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 0,
        ese: 0,
      },
      practical: {
        ce: 50,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEHV1010",
    courseName: "Universal Human Values-I",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 100,
        ese: 0,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SESH1080",
    courseName: "Linear Algebra & Calculus",
    teachingScheme: {
      theory: 3,
      practical: 0,
      tutorial: 2,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 50,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEIT1030",
    courseName: "Object Oriented Programming with Java",
    teachingScheme: {
      theory: 3,
      practical: 4,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 40,
        ese: 60,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEIT1010",
    courseName: "Introduction to Web Designing",
    teachingScheme: {
      theory: 0,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 0,
        ese: 0,
      },
      practical: {
        ce: 50,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEME1020",
    courseName: "Engineering Workshop",
    teachingScheme: {
      theory: 0,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 0,
        ese: 0,
      },
      practical: {
        ce: 50,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEME1040",
    courseName: "Concepts of Engineering Drawing",
    teachingScheme: {
      theory: 2,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SESH1210",
    courseName: "Applied Physics",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "CFLS1010",
    courseName: "Linguistic Proficiency",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SESH2040",
    courseName: "Discrete Mathematics",
    teachingScheme: {
      theory: 3,
      practical: 0,
      tutorial: 2,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 50,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2111",
    courseName: "Database Management System",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2021",
    courseName: "Digital Workshop",
    teachingScheme: {
      theory: 0,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 0,
        ese: 0,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2031",
    courseName: "Data Structures",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2120",
    courseName: "Programming with Python",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEIT2041",
    courseName: "Mobile Application Development",
    teachingScheme: {
      theory: 2,
      practical: 4,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 40,
        ese: 60,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "CFLS1020",
    courseName: "Global Communication Skills",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2910",
    courseName: "Industrial Exposure",
    teachingScheme: {
      theory: 0,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 0,
        ese: 0,
      },
      practical: {
        ce: 100,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SESH2051",
    courseName: "Mathematical Methods for Computation",
    teachingScheme: {
      theory: 3,
      practical: 0,
      tutorial: 2,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 50,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE2040",
    courseName: "Computer Organization",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SECE3011",
    courseName: "Computer Network",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEIT2031",
    courseName: "Operating System",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 20,
        ese: 30,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEIT3010",
    courseName: "Software Engineering",
    teachingScheme: {
      theory: 3,
      practical: 0,
      tutorial: 1,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 50,
        ese: 0,
      },
    },
  },
  {
    courseCode: "CFLS3010",
    courseName: "Foreign Language-I",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
  {
    courseCode: "SEPD3040",
    courseName: "Integrated Personality Development Course-I",
    teachingScheme: {
      theory: 2,
      practical: 0,
      tutorial: 0,
    },
    examinationScheme: {
      theory: {
        ce: 100,
        ese: 0,
      },
      practical: {
        ce: 0,
        ese: 0,
      },
      tutorial: {
        ce: 0,
        ese: 0,
      },
    },
  },
];

module.exports = { data: sampleCourse };

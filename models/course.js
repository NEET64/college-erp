const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  code: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Z]{4}\d{4}$/.test(value);
      },
      message: (props) =>
        `${props.value} is not a valid course code. It should be in the format 4 capital letters and 4 numbers`,
    },
  },
  name: {
    type: String,
    required: true,
  },
  teachingScheme: {
    theory: {
      type: Number,
      default: 0,
    },
    practical: {
      type: Number,
      default: 0,
    },
    tutorial: {
      type: Number,
      default: 0,
    },
    totalHours: {
      type: Number,
      default: 0,
    },
  },
  examinationScheme: {
    theory: {
      ce: {
        type: Number,
        default: 0,
      },
      ese: {
        type: Number,
        default: 0,
      },
    },
    practical: {
      ce: {
        type: Number,
        default: 0,
      },
      ese: {
        type: Number,
        default: 0,
      },
    },
    tutorial: {
      ce: {
        type: Number,
        default: 0,
      },
      ese: {
        type: Number,
        default: 0,
      },
    },
    totalMarks: {
      type: Number,
      default: 0,
    },
  },
  credit: {
    type: Number,
    default: 0,
  },
});

const calculateTotals = function (course) {
  course.teachingScheme.totalHours =
    course.teachingScheme.theory +
    course.teachingScheme.practical +
    course.teachingScheme.tutorial;

  course.examinationScheme.totalMarks =
    course.examinationScheme.theory.ce +
    course.examinationScheme.practical.ce +
    course.examinationScheme.tutorial.ce +
    course.examinationScheme.theory.ese +
    course.examinationScheme.practical.ese +
    course.examinationScheme.tutorial.ese;
};

courseSchema.pre("save", function (next) {
  calculateTotals(this);
  next();
});

courseSchema.pre("findOneAndUpdate", function (next) {
  calculateTotals(this._update);
  next();
});

courseSchema.pre("insertMany", function (next, courses) {
  for (const course of courses) {
    calculateTotals(course);
  }
  next();
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

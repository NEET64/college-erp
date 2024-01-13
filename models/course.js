const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseCode: {
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
  courseName: {
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
  },
  credit: {
    type: Number,
    default: 0,
  },
  totalMarks: {
    type: Number,
    default: 0,
  },
});

courseSchema.pre("save", function (next) {
  this.credit =
    this.teachingScheme.theory +
    this.teachingScheme.practical +
    this.teachingScheme.tutorial;
  this.totalMarks =
    this.examinationScheme.theory.ce +
    this.examinationScheme.practical.ce +
    this.examinationScheme.tutorial.ce +
    this.examinationScheme.theory.ese +
    this.examinationScheme.practical.ese +
    this.examinationScheme.tutorial.ese;
  next();
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const Course = require("./models/course");

const MONGO_URL = "mongodb://localhost:27017/erp";
main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/test", async (req, res) => {
  let sampleCourse = new Course({
    courseCode: "SECE0003",
    courseName: "Sample Course",
    teachingScheme: {
      theory: 3,
      practical: 2,
      tutorial: 1,
    },
    examinationScheme: {
      theory: {
        ce: 40,
        ese: 60,
      },
      practical: {
        ce: 30,
        ese: 70,
      },
      tutorial: {
        ce: 20,
        ese: 80,
      },
    },
  });
  await sampleCourse.save();
  let all = await Course.find();
  console.log("sample was saved");
  console.log(all);
  res.send(sampleCourse);
});

app.get("*", (req, res) => {
  res.send("hello this is the server");
});

app.listen(port, () => {
  console.log("server is running at port: " + port);
});

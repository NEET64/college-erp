const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8000;
const Course = require("./models/course");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://localhost:27017/erp";
main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/course", async (req, res) => {
  let courses = await Course.find({});
  res.render("./courses/course.ejs", { courses });
});

app.post("/course", async (req, res) => {
  let course = req.body.course;
  let newCourse = new Course(course);
  await newCourse.save();
  console.log(newCourse);
  res.redirect("/course");
});

app.get("/course/new", (req, res) => {
  res.render("./courses/new.ejs");
});

app.get("/course/:id/edit", async (req, res) => {
  let { id } = req.params;
  const course = await Course.findOne({ _id: id });
  res.render("./courses/edit.ejs", { course });
});

app.get("/course/:id", async (req, res) => {
  let { id } = req.params;
  const course = await Course.findOne({ _id: id });
  // res.send(course);
  res.render("./courses/detail.ejs", { course });
});

app.put("/course/:id", async (req, res) => {
  let { id } = req.params;
  await Course.findByIdAndUpdate(id, { ...req.body.course });
  res.redirect(`/course/`);
});

app.delete("/course/:id", async (req, res) => {
  let { id } = req.params;
  await Course.findByIdAndDelete(id);
  res.redirect(`/course/`);
});

app.listen(port, () => {
  console.log("server is running at port: " + port);
});

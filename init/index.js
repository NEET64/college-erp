const mongoose = require("mongoose");
const Course = require("../models/course");
const courseData = require("./courseData");

const MONGO_URL = "mongodb://localhost:27017/erp";
main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initData = async () => {
  await Course.deleteMany({});
  await Course.insertMany(courseData.data);
  console.log("data was initialized");
};

initData();

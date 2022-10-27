const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors ());
const blog = require("./data/blog.json");
const FQA = require("./data/faq.json");
const courses = require("./data/courses.json");
const Category = require("./data/category.json");
app.get("/", (req, res) => {
  res.send("Server is Running")
});
app.get("/blog", (req, res) => {
  res.send(blog);
});
app.get("/courses" , (req, res) =>{
  res.send(courses)
});
app.get("/course" , (req, res) =>{
  res.send(Category)
});
app.get('/course/:id', (req, res) => {
	// console.log(req.params.id);
  const id = req.params.id;
  // console.log(req.params.id);
  const selectedCourse = courses.find( course=> course.id == id );
  res.send(selectedCourse);
});
app.get('/checkout/:id', (req, res) => {
	// console.log(req.params.id);
  const id = req.params.id;
  // console.log(req.params.id);
  const selectedCourse = courses.find( course=> course.id == id );
  res.send(selectedCourse);
});
app.get("/faq", (req, res) => {
  res.send(FQA);
})
app.listen(port, () => {
  console.log('Server is running port', port);
})

// module.exports = app;
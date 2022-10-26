const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors ());
const blog = require("./data/blog.json");
const FQA = require("./data/faq.json")
app.get("/", (req, res) => {
  res.send("Server is Running")
});
app.get("/blog", (req, res) => {
  res.send(blog);
})
app.get("/faq", (req, res) => {
  res.send(FQA);
})
app.listen(port, () => {
  console.log('Server is running port', port);
})
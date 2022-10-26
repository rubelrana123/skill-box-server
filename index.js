const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;
app.use(cors ());
app.get("/", (req, res) => {
  res.send("Server is Running")
});
app.listen(port, () => {
  console.log('Server is running port', port);
})
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Allan Gazali</p><h2>Hi</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +6282165757362</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

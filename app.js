const express = require("express");
const app = express();
const port = 3000;

// Respond with Hello World! on the homepage:
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Respond to POST request on the root route (/), the application’s home page:
app.post("/", (req, res) => {
  res.send("Received POST request");
});

// Respond to a PUT request to the /user route:
app.put("/", (req, res) => {
  res.send("Received a PUT at /user");
});

// Respond to a DELETE request to the /user route:
app.delete("/user", (req, res) => {
  res.send("Received a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

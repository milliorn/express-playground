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

// There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.
app.all("/secret", (req, res) => {
  console.log(`Accessing secret endpoint`);
  next(); // pass control to the next handler
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

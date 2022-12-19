const express = require("express");
const app = express();
const port = 3000;

// Respond with Hello World! on the homepage:
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// This route path will match requests to /about.
app.get("/about", (req, res) => {
  res.send("about");
});

// This route path will match requests to /random.text.
app.get("/random.text", (req, res) => {
  res.send("random.text");
});

// This route path will match acd and abcd.
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

// This route path will match /abe and /abcde.
app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});

// This route path will match anything with an "z" in it.
app.get(/z/, (req, res) => {
  res.send("/z/");
});

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, (req, res) => {
  res.send("./*fly$/");
});

// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
app.get("/user/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// A single callback function can handle a route.
app.get("/example/a", (req, res) => {
  res.send("Hello A!");
});

// More than one callback function can handle a route (make sure you specify the next object).
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("Response will be sent by next()");
    next();
  },
  (req, res) => {
    res.send("Hello from B!");
  }
);

// An array of callback functions can handle a route.
const callbackFirst = (req, res, next) => {
  console.log("callback first");
  next();
};

const callbackSecond = (req, res, next) => {
  console.log("callback second");
  next();
};

const callbackThird = (req, res, next) => {
  console.log("callback third");
  next();
};

// A combination of independent functions and arrays of functions can handle a route.
app.get(
  "/example/callback",
  [callbackFirst, callbackSecond, callbackThird],
  (req, res, next) => {
    console.log("response sent by next function");
    next();
  },
  (req, res) => {
    res.send("Hello callbacks!");
  }
);

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
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

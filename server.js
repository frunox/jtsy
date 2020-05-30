// load npm package express, primarily for the router
const express = require("express");
// import npm package mongoose, the ODM for mongo database
const mongoose = require("mongoose");
// set the /routes folder as default for any route declarations (defaults to index.js)
const routes = require("./routes");
// declare variable app to hold express methods
const app = express();
// set the port for mongo connection to 3001 in development mode
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.use(express.static(path.join(__dirname, 'client/build')));
  // app.get('*', function (req, res) {
  //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  // });
  // app.get('*', function (req, res) {
  //   res.sendFile('client/build', 'index.html');
  // });
}

// Add routes, both API and HTML.  Defaults to /routes/index.js
app.use(routes);

// Connect to the Mongo DB (portfolio_db)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio_db",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   // Handle React routing, return all requests to React app
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

// Start the API server on port 3001
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

const cors = require('cors');
const express = require('express');
const app = express();

// Use CORS to allow requests from different origins (adjust settings as needed)
app.use(cors());

// Built-in Express middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes for different API endpoints
const login = require("./api/login.js");
const googleform = require("./api/googleform.js");
const userinfo = require('./api/userrInfo.js');
const contact = require('./api/contact.js');

// Define your API routes
app.use("/login", login);
app.use("/googleform", googleform);  // Route for handling Google form data
app.use("/userinfo", userinfo);
app.use("/contact", contact);

module.exports = app;

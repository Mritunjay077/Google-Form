const cors = require('cors');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

// files
const login = require("./api/login.js");
const googleform = require("./api/googleform.js");
const userinfo = require('./api/userrInfo.js');
const contact = require('./api/contact.js');

// routes
app.use("/login", login);
app.use("/googleform", googleform);  // Updated route to googleform
app.use("/userinfo", userinfo);
app.use("/contact", contact);

module.exports = app;

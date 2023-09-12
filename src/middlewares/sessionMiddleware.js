const session = require('express-session');

module.exports = session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: false,
});

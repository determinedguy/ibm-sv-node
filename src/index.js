const app = require('./app');
const port = 3000;

// Import your controllers here
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const dashboardController = require('./controllers/dashboardController');
const logoutController = require('./controllers/logoutController');

// Home route
app.get('/', homeController.index);

// Authentication routes
app.get('/login', authController.login);
app.get(process.env.REDIRECT_URI_ROUTE, authController.callback);

// Dashboard route
app.get('/dashboard', dashboardController.index);

// Logout route
app.get('/logout', logoutController.logout);

app.listen(port, () => {
  console.log('Server started');
  console.log(`Listening on port ${port}.`);
});

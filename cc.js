const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '_wF09DE02mG0PH7kI1MYtI7rvdDGlHhTu4La2J0Y7jtSy8B1BDHpl8gqyWY1TJMA',
  baseURL: 'http://localhost:3000/', 
  clientID: 'ePfidVU9VytzU1qiVZ8yrmFTu9CjEy2z',
  issuerBaseURL: 'https://demoid.us.auth0.com'
};
const express = require('express');
const app = express();
c
// Định nghĩa các route và middleware của ứng dụng ở đây

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use((req, res, next) => {
  if (!req.oidc.isAuthenticated() && req.originalUrl !== '/login') {
    return res.redirect('/login');
  }
  next();
});
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Log in successfully' : 'Logged out successfully');
});
const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

console.log(config.baseURL);
console.log(config.clientID);
console.log(config.issuerBaseURL);
console.log(config.secret);

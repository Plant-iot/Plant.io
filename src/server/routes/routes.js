const express = require('express');
const router = express.Router();
const passport = require('passport');
const FitbitPassport = require('../authentication/FitbitPassport');
const MovesPassport = require('../authentication/MovesPassport');
const users = require('../controllers/usersCtrl');

router.post('/api/users', users.addUser);

router.get('/auth/fitbit', 
  passport.authenticate('fitbit', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/fitbit/failure'
  })
);

router.get('/auth/fitbit/callback', 
  passport.authenticate('fitbit', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/fitbit/failure'
  })
);

router.get('/auth/fitbit/success', (req, res, next) => {
  res.send(req.user);
});

router.get('/auth/moves',
  passport.authenticate('moves'));

router.get('/auth/moves/callback', 
  passport.authenticate('moves', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
});

module.exports = router;

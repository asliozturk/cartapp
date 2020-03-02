// same passport instance on app.js is imported

var passport = require('passport');
var Users = require('../models/users.js');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    Users.getUserByEmail(email);
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    var user = Users.getUserByEmail(email);
    if (user) {
        return done(null, false, {message: 'Email is already in use.'});
    }
    var newUser = {
        email: email,
        password: Users.encryptPassword(password)
    };
    Users.addUser(newUser);
}));
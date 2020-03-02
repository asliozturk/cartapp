var bcrypt = require('bcrypt-nodejs');

var users = [{
    firstName: 'David',
    lastName: 'Jonhnson',
    email: 'david@gmail.com',
    password: '12345'
}, {
    firstName: 'Renn',
    lastName: 'Mead',
    email: 'renn@gmail.com',
    password: '1234566'
}];

var getUsers = function() {
    return users;
}

var getUserByEmail = function(email) {
    users.find(x => x.email = email);
}

var encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

// this : the user instance which this method is being executed on.
var validPassword = function(password) {
    return bcrypt.compareSync(password. this.password);
}

var addUser = function (email, password, firstName, lastName) {
    var newUser = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };
    users.push(newUser);
}

module.exports = {
    getUsers: getUsers,
    getUserByEmail: getUserByEmail,
    encryptPassword: encryptPassword,
    validPassword: validPassword,
    addUser: addUser
} 

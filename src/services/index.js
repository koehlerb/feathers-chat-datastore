// const messages = require('./messages/messages.service.js');
// const users = require('./users/users.service.js');
const messages = require('./messages/messages-datastore.service.js');
const users = require('./users/users-datastore.service.js');
module.exports = function (app) {
  app.configure(messages);
  app.configure(users);
};

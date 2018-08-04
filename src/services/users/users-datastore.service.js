// Initializes the `users` service on path `/users`
const createService = require('@koehlerb/feathers-datastore');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const kind = 'Users';
  const projectId = process.env.DATASTORE_PROJECT_ID;

  // Initialize our service with any options it requires
  app.use('/users', createService({ kind, projectId }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);
};

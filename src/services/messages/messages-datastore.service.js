// Initializes the `messages` service on path `/messages`
const createService = require('@koehlerb/feathers-datastore');
const hooks = require('./messages.hooks');

module.exports = function (app) {
  const kind = 'Messages';
  const projectId = process.env.DATASTORE_PROJECT_ID;

  // Initialize our service with any options it requires
  app.use('/messages', createService({ kind, projectId }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('messages');

  service.hooks(hooks);
};

Package.describe({
  summary: "Displays the releases per week for a Heroku app",
  version: "1.0.0"
});

Package.on_use(function (api, where) {
  api.use(
    [
      'dashi-panel',
      'jquery',
      'stylus',
      'templating',
      'minimongo',
      'mongo-livedata'
    ], 
    'client'
  );

  api.use(
    [
      'coffeescript',
      'mrt:moment'
    ], 
    [
      'client',
      'server'
    ]
  );

  api.add_files(
    [
      'client/heroku-panel.styl',
      'client/heroku-panel.coffee',
      'client/heroku-panel.html',
      'client/heroku-panel-template.coffee'
    ],
    'client'
  );

  api.add_files(
    [
      'server/heroku-panel-methods.coffee',
      'server/heroku-panel-model.coffee'
    ],
    'server'
  );
});
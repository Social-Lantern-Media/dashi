Package.describe({
  summary: "Displays the current weather for a city."
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
      'momentjs'
    ], 
    [
      'client',
      'server'
    ]
  );

  api.add_files(
    [
      'client/weather-panel.styl',
      'client/weather-panel.coffee',
      'client/weather-panel.html',
      'client/weather-panel-template.coffee'
    ],
    'client'
  );

  api.add_files(
    [
      'server/weather-panel-methods.coffee',
      'server/weather-panel-model.coffee'
    ],
    'server'
  );
});
require.config({
  baseUrl: "./js/",
  paths: {
    jquery: 'libs/jquery-1.11.1',
    underscore: 'libs/underscore-1.6.0',
    backbone: 'libs/backbone-1.1.2',
    'backbone.localStorage': 'libs/backbone.localstorage-1.1.7',
    bootstrap: 'libs/bootstrap.min'
  },
  // shim: {
  //   underscore: {
  //     exports: "_"
  //   },
  //   backbone: {
  //     deps: ['underscore', 'jquery'],
  //     exports: 'Backbone'
  //   },
  //   'backbone.localStorage': {
  //     deps: ['backbone'],
  //     exports: 'Backbone'
  //   },
  //   bootstrap: {
  //     deps: ['jquery']
  //   },
  //   snippet: {
  //     deps: ['jquery']
  //   },
  // }
});

require([
  'app',
], function(App){
  App.initialize();
});
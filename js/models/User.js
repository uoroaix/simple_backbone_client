define([
  'underscore',
  'backbone'
  ], function(_, Backbone) {

  var User = Backbone.Model.extend({
    urlRoot: '/users'
  });
  return User
});



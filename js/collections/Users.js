define([
  'underscore',
  'backbone',
  'models/User'
], function(_, Backbone, UserModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    url: '/users'
  });
  return UsersCollection;
});
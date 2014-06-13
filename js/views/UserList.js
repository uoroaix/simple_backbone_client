define([
'jquery',
'underscore',
'backbone',
'collections/Users',
'text!templates/userlist.html'
], function($, _, Backbone, UsersCollection, userListTemplate) {
  var UserListView = Backbone.View.extend({
      el: $('.page'),
      render: function () {
        var that = this;
        var users = new UsersCollection();
        users.fetch({
          success: function (users) {
            var template = _.template( userListTemplate, {users: users.models});
            that.$el.html(template);
          }
        })
      }
    });
  return UserListView;
});



define([
'jquery',
'underscore',
'backbone',
'models/User',
'collections/Users',
'text!templates/edituser.html',
'text!templates/userlist.html'
], function($, _, Backbone, UserModel, UsersCollection, editUserTemplate, userListTemplate) {

  var EditUserView = Backbone.View.extend({
      el: $('.page'),
      render: function (options) {
        var that = this;
        if(options.id) {
          that.user = new UserModel({id: options.id});
          that.user.fetch({
            success: function (user) {
              var template = _.template( editUserTemplate, {user: user});
              that.$el.html(template);
            }
          })
        } else {
          var template = _.template( editUserTemplate, {user: null});
          this.$el.html(template);
        }
      },
      events: {
        'submit .edit-user-form': 'saveUser',
        'click .delete': 'deleteUser'
      },
      saveUser: function (ev) {
        var that = this;
        var userDetails = $(ev.currentTarget).serializeObject();
        var user = new UserModel();
        user.save(userDetails, {
          success: function (user) {
            Backbone.history.navigate('', {trigger: true});
          }
        });
        return false;
      },
      deleteUser: function (ev) {
        var that = this;
        this.user.destroy({
          success: function () {
            Backbone.history.navigate('', {trigger: true});
          }
        })
        return false;
      }
    });
  return EditUserView;
});

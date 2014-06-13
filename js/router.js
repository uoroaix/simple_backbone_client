define([
  'jquery',
  'underscore',
  'backbone',
  'views/UserList',
  'views/EditUser'
], function($, _, Backbone, UserListView, EditUserView){
  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://localhost:3000/api/v1' + options.url;
  })

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  var Router = Backbone.Router.extend({
    routes: {
      // URL routes
      '': 'home',
      'new' : 'editUser',
      'edit/:id' : 'editUser',

      // Default
      '*actions': 'defaultAction'
    }
  });

  // window.App = new Router();

  var initialize = function(){

    var router = new Router();

    // Backbone.View.prototype.goTo = function (loc) {
    //   router.navigate(loc, true);
    // };
    
    var userList = new UserListView();
    var editUser = new EditUserView();

    router.on('route:home', function(){
      userList.render();
    });

    router.on('route:editUser', function (id) {
      editUser.render({id: id});
    });

    router.on('defaultAction', function(actions){
      console.log('No route:', actions);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
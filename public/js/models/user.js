var Backbone = require('backbone'),
    _ = require('underscore');

window.User =  Backbone.Model.extend({
  urlRoot:'/api/user',
  parse: function(response){
    return JSON.parse(response.response);
  }
}); 

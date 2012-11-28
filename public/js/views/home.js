var Backbone = require('backbone'),
    _ = require('underscore');


window.HomeView = Backbone.View.extend({
  el: "body" ,

  template: 'HomeView',

  initialize: function(){
    this.render();
  },

  render: function(){
    var that = this;
    TemplateManager.get(this.template, function(tmpl){
      $(that.el).html(_.template(tmpl,{}));
    });
    return this;
  }

});

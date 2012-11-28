var _ = require('underscore')._

window.utils = {

    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(view) {
            if (window[view]) {
                console.log(view);
                deferreds.push($.ajax(
                  {url: 'tpl/' + view + '.html',
                   success: function(data) {
                      window[view].template = _.template(data);
                      console.log(window[view].template());
                   }}));
                   console.log(deferreds);
            } else {
                alert(view + " not found");
            }
        });
       _.when(deferreds).done(callback);
      
    }

}

window.TemplateManager = {
  templates: {},

  get: function(id, callback){
    var template = this.templates[id];

    if (template) {
      callback(template);

    } else {

      var that = this;
      $.ajax(
        {
          url:"/tpl/" + id + ".html", 
          success :function(template){
            that.templates[id] = template;
            callback(template);
        }
      });

    }

  }

}


var _ = require('underscore')._



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


var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  routes:{
    "" : "home",

  },

  initialize: function(){
    
  },

  home: function(){
    if(!this.homeView){
      var homeView = new HomeView();
      console.log(homeView.template);
    }
  }

});


function init(){ 
    app = new AppRouter();
    Backbone.history.start();
}
init();

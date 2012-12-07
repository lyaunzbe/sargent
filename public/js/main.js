var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  routes:{
    "" : "home",
    "u/:username": "user_view"

  },

  initialize: function(){
    
  },

  home: function(){
    console.log(this);
    var that = this;
    var user = new User();
    user.fetch({success:function(){
      if(user.get('login')){
        that.user = user;
        app.navigate('u/'+user.get('login'),{trigger:true});
      }else{
        that.homeView = new HomeView();
        console.log(that);
      }
    }});
  },

  user_view:function(username){
    console.log(this.user.toJSON());
  }

});


function init(){ 
    app = new AppRouter();
    Backbone.history.start({pushState:true});
}
init();

var Backbone = require('backbone');

var route = Backbone.Router.extend({
  routes:{
    'home':'renderHome',
    'todoClear':'clearAndRender'
  },
  initilize : function(options){
    this.app = options.app;
  },
  renderHome : function(){
   console.log('this is an action performed on the home');
  }
});

module.exports =  route;

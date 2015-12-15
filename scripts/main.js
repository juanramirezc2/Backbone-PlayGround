var Backbone = require('backbone'),
    $        = require('jquery'),
    _        = require('underscore'),
    todo     = require('./model/todo'),
    todos    = require('./collections/todo'),
    routes   = require('./router/main');

var App =  Backbone.View.extend({
  el:'#myApp',
  initialize : function(options){
    this.router = new routes({app : this});
    this.collection = new todos({
      model:todo
    }); 

  },
  events : function(){
  
  }
});
var application = new App();

//let's start the router
Backbone.history.start();

var singleTodo = Backbone.Model.extend({
  defaults : {title : "",message : "", completion: ""},
  initialize: function(){
    //console.log(this);
  }
});
var todos = Backbone.Collection.extend({
  model : singleTodo,
  initialize : function(){
   //console.log("my first colection",this);
  }
});

module.exports = todos;

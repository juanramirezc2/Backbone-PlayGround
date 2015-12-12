var singleTodo = Backbone.Model.extend({
  defaults : {title : "",message : "", completion: ""},
  initialize: function(){
    //console.log(this);
  }
});

module.exports = singleTodo;

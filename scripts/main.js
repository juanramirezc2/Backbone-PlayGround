var $ = require("jquery");
var _ = require("underscore");

var singleTodo = Backbone.Model.extend({
  defaults : {title : "",message : "", completion: false},
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
var todosView = Backbone.View.extend({
  tagName : "div",
  className : "thisClass",
  id : "ID",
  template :  _.template("<input type='checkbox' name='completion'> <%= title %>,message <%= message %> , completion <%= completion %>"),
  render : function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  initialize : function(){
    this.render();
  }
});

var todoList = new todos();
todoList.add([{title : "todo title",message : "este es mi primer todo"}, {title : "todo title 2",message : "este es mi segundo todo"}]);

var todosColView = Backbone.View.extend({
  el : '#todoApp',
  initialize : function(){
    this.render();
  },
  render : function(){
      todoList.each((modelSingle) => {
      var singleView = new todosView({model : modelSingle});
      this.el.appendChild(singleView.el);
    }); 
  }
});

var instodosCol = new todosColView();

var emptyObj ={};
var emptyListener = {};
Object.assign(emptyObj,Backbone.Events);
Object.assign(emptyListener,Backbone.Events);

//console.log(emptyObj);

setTimeout(()=>{
  for (var i = 0;i<= 10;i++) {
    //console.log(i);
    emptyObj.trigger("seJodio","HHHHHHHHHH");
    if(i===3)
      emptyListener.stopListening(emptyObj);
  }},3000);

/*emptyObj.bind("seJodio",(param)=>{
  console.log(param);
});*/
/*
  emptyObj.once("seJodio",(msn)=>{
    console.log(msn);
  }); 
  */

emptyListener.listenTo(emptyObj,"seJodio",(msn)=>{
  //console.log(msn);
}); 


/*emptyObj.on("change",(el)=>{console.log(el)}); */

emptyObj.gabo="fds";

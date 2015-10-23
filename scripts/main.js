var singleTodo = Backbone.Model.extend({
  initialize: function(){
    console.log(this);
    this.set({title : "",message : "", completion: false});
  }
});
var todos = Backbone.Collection.extend({
  model : singleTodo,
  initialize : function(){
   console.log("my first colection",this);
  }
});

var todosView = Backbone.View.extend({
  className:"todoApp",
  initialize : function(){
  console.log(this.$el.innerHTML="todo list single page app");
  }
});
var todosTEmplate = new todosView();

var todoList = new todos();
todoList.add([{title : "todo 1",message : "este es mi primer todo"}, {title : "todo 2",message : "este es mi segundo todo"}]);

var emptyObj ={};
var emptyListener = {};
Object.assign(emptyObj,Backbone.Events);
Object.assign(emptyListener,Backbone.Events);

console.log(emptyObj);

setTimeout(()=>{
  for (var i = 0;i<= 10;i++) {
    console.log(i);
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
  console.log(msn);
}); 


/*emptyObj.on("change",(el)=>{console.log(el)}); */

emptyObj.gabo="fds";

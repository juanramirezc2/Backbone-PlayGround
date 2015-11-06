var $ = require("jquery");
var todo = require("./model/todo");
var todos = require("./collections/todo");
var taskView = require("./views/todo");

var todosApp = Backbone.View.extend({
  el : '#todoApp',
  initialize:function(){
    var todosCol = new todos({model : todo});
    this.listenTo(this.todosCol,"add",this.renderTask);
    this.listenTo(this.todosCol,"remove",this.deleteTask);
    todosCol.add({title : "task",message : "message", completion: "checked"});
  },
  render: function(){
    this.todosCol.each((modelSingle) => {
      var singleView = new taskView({model : modelSingle});
      this.el.appendChild(singleView.el);
    });
  },
  events : {}
});

var  app = new todosApp();


/*
var emptyObj ={};
var emptyListener = {};
Object.assign(emptyObj,Backbone.Events);
Object.assign(emptyListener,Backbone.Events);
setTimeout(()=>{
  for (var i = 0;i<= 10;i++) {
    //console.log(i);
    emptyObj.trigger("seJodio","HHHHHHHHHH");
    if(i===3)
      emptyListener.stopListening(emptyObj);
  }},3000);

emptyObj.bind("seJodio",(param)=>{
  console.log(param);
});
emptyObj.once("seJodio",(msn)=>{
    console.log(msn);
}); 


emptyListener.listenTo(emptyObj,"seJodio",(msn)=>{
  console.log(msn);
}); 


emptyObj.on("change",(el)=>{console.log(el)}); 

emptyObj.gabo="fds"; */

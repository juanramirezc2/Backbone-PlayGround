var $ = require("jquery");
var todos = require("./models/todo");
var todosColView = require("./views/todo");


var todoList = new todos();
todoList.add([{title : "todo title",message : "este es mi primer todo"}, {title : "todo title 2",message : "este es mi segundo todo"}]);


var instodosCol = new todosColView({collection:todoList});

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

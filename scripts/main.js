var Mymodel = Backbone.Model.extend({
  promtcolor : () => {
    var cssColor = prompt("Please enter a Css Color");
    this.set({color : cssColor});
  }
});
var sidebar = new Mymodel();
sidebar.on('change:color', (model,color) => {
  console.log(model);
  console.log("gabo");
  console.log(color);
});
var myFirstCol = Backbone.Collection.extend({
  model : Mymodel
});
var CssColors = new myFirstCol();
CssColors.on('add',(param1) => {
  console.log(param1.get('color'));
});
sidebar.promtcolor();

CssColors.add([{color:'gray'},{color:'black'},{color:'blue'}]);
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

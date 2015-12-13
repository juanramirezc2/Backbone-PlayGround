var $ = require("jquery");
var todo = require("./model/todo");
var todos = require("./collections/todo");
var taskView = require("./views/todo");
var React = require("react");
var ReactDom = require("react-dom");

/*playing with react */

/*

class otherComponent extends React.Component{
  render(){
   return <h3>compo</h3>;
  }
}
class myComponent extends React.Component{
  render(){
    return <otherComponent />;
  }
}
*/

ReactDom.render(<jg/>,document.getElementById('reactComponent'))

var jg= React.createClass({
  render : function(){
    return (
      <div>
        hola  mundo desde un react component
      </div>
    )
  }
});
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

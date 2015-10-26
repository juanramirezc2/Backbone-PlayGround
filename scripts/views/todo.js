var _ = require("underscore");
var React = require("react");
var ReactDom = require("react-dom");

var todosColView = Backbone.View.extend({
  el : '#todoApp',
  initialize : function(){
    console.log(this);
    this.render();
  },
  render : function(){
      this.collection.each((modelSingle) => {
      var singleView = new todosView({model : modelSingle});
      this.el.appendChild(singleView.el);
    });
  }
});

var todosView = Backbone.View.extend({
  tagName : "div",
  className : "thisClass",
  id : "ID",
  events : {
   "click .checklist" : "handleClick"
  },
  handleClick : function (e){
    var completion = e.toElement.checked ? 'checked' : '';
    this.model.set({completion : completion});
  },
  template :  _.template("<input class='checklist' type='checkbox' name='completion' <%= completion %>> <%= title %>,message <%= message %> , completion <%= completion %>"),
  render : function(){
    var Greetings = React.createClass({
      render : function(){
        return (
          <div className="greetings"> 
            Hello, {this.props.name}!
          </div>
        );
      }
    });
    var body = document.querySelector("#todoApp");
    ReactDom.render(React.createElement(Greetings,{name: "World"}),this.el);
  //this.$el.html(this.template(this.model.attributes));
    return this;
  },
  initialize : function(){
    this.model.on('change',this.render,this);
    this.render();
  }
});

module.exports = todosColView;

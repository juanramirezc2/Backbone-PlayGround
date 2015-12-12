var _ = require("underscore");
var React = require("react");
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
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  initialize : function(){
    this.listenTo(this.model,'change',this.render);
    this.render();
  }
});

module.exports = todosColView;

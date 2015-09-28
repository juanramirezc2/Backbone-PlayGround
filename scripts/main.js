var Mymodel = Backbone.Model.extend({
    promtcolor : () => {
      var cssColor = prompt("Please enter a Css Color");
      this.set({color : cssColor});
    }
});
var sidebar = new Mymodel();
sidebar.on('change:color', (model,color) => {
  console.log(model);
  console.log(color);
});
var myFirstCol = Backbone.Collection.extend({
    model : Mymodel
});
var CssColors = new myFirstCol();
CssColors.on('add',(param1) => {
  console.log(param1.get('color'));
});
CssColors.add([{color:'gray'},{color:'black'}])


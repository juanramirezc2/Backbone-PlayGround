var React = require("react");
var ReactDOM = require("react-dom");

class SubComponent extends React.Component {
 render(){
  return <h2>always upercase names for your react components,at least if you dont want to render an html string</h2>;
 }
}
var App = React.createClass({
  render : function(){
    return  (<div>{this.props.name} hola  mundo desde un react compon<SubComponent/></div> );
  }
});

ReactDOM.render(<App name="gabo" />,document.getElementById('reactComponent'));

var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('test'));

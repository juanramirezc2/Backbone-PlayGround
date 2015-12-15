class SubComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    var result =  this.props.parent.map((elem,index)=>{
      return (<div key={index}>component {elem.component}</div>);
    });
    return <h2>{result}</h2>;
  }
}

var App = React.createClass({
  componentDidMount : function(){
    console.log(this.props);
  },
  render : function(){
    return  (<div>{this.props.name} hola  m<SubComponent parent={this.props.childArray}/> <SubComponent parent={this.props.childArray}/></div> );
  }
});

ReactDOM.render(<App childArray={[{component:1},{component:2},{component:3}]} name="gabo" />,document.getElementById('reactComponent'));

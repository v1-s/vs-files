import Home from "./Components/Home";

class components extends React.Component{
constructor(props){
  super(props);
  this.state={
    counter:0
  };
render(){
  return (
    <div>
      <p>
        <button onClick={this.increement}>click</button>
      </p>
    </div>
  );
}
};
};




export default App;

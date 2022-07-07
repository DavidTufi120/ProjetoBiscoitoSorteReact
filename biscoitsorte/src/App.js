import './App.css';
import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
      this.state={};
    }
  
render(){
  return (
    <div>
     <img src={require('./assets/biscoitoDaSorteLogo.png')} alt="Biscoito da Sorte Logo"/>
    </div>
  );
  }
}
export default App;

import './App.css';
import React, { Component } from 'react';
import Botao from './Botao';
import { frases } from './frases';

class App extends Component{

  constructor(props){
    super(props);
      this.state={
        h4 : ""
      };
      this.quebraBiscoito = this.quebraBiscoito.bind(this);
      this.frases= frases
      }

     quebraBiscoito(){
      let state = this.state;
      let aleatoryNumber = Math.floor(Math.random() * this.frases.length) 
      state.h4 =  '" ' + this.frases[aleatoryNumber] + ' "';
      this.setState(state);

    }
  
render(){
  return (
    <div className='container'>
     <img src={require('./assets/biscoitoDaSorteLogo.png')} alt="Biscoito da Sorte Logo"/>
     <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
     <h3>A sua sorte de hoje é: </h3><br/>
     <h4>{this.state.h4}</h4>
    </div>
  );
  }
}
export default App;

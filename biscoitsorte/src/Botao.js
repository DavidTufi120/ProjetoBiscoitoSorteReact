import React, { Component } from 'react';
import './App.css';

class Botao extends Component{
render(){
    return(
        <>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
         </>
    )
        }
}

export default Botao;
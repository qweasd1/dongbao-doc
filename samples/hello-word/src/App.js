import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {State,connect} from 'dongbao'


let state = State({
  initial:{
    text:"hello world"
  }
})

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default connect({
  map(state){
    return {
      text:state.text
    }
  }
})(App);

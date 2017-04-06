import React, {Component} from 'react';
import {State, connect} from 'dongbao'

let stateConfig = {
  initial: {
    count: 0
  },
  actions: {
    increase(state){
      return {
        count: state.count + 1
      }
    },
    decrease(state){
      return {
        count: state.count - 1
      }
    },
    increaseGivenNumber(state, number){
      return {
        count: state.count + number
      }
    }
  },
  effects: {
    increaseAfterOneSecond(){
      setTimeout(() => {
        this.increase()
      }, 1000)
    }
  }
}

let state = State(stateConfig)

class App extends Component {
  render() {
    return (
      <div >
        <p>count: {this.props.count}</p>
        <div>
          <button onClick={() => state.increase()}>+</button>
          <button onClick={() => state.decrease()}>-</button>
          <button onClick={()=>state.increaseAfterOneSecond()}>+ after 1s</button>
        </div>
      </div>
    );
  }
}


export default connect({
  map: function (state) {
    return {
      count: state.count
    }
  }
})(App);

import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {

  // state =  {
  //   age: 20
  // }

  // ageDecress = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   })
  // }
  // ageIncress = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h2>Simple React Redux App</h2>
        <button onClick={this.props.onAgeDown}>Decress</button>  
        <p>Age: {this.props.age}</p>
        <button onClick={this.props.onAgeUp}>Incress</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    age: state.age
  }
}

const mapDispatchToProps  = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: "AGE_UP"}),
    onAgeDown: () => dispatch({type: "AGE_DOWN"})
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (App);

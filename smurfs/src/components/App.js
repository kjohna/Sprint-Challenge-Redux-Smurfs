import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const smurfs = this.props.smurfs.map(smurf => {
      return (
        <div className="smurf-container">
          <h1>{smurf.name}</h1>
          <p>age: {smurf.age}</p>
          <p>height: {smurf.height}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        {smurfs}
        <form className="add-smurf-form">
        
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);

import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

const emptySmurfFormData = {
  name: '',
  age: '',
  height: ''
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      smurfFormData: emptySmurfFormData
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = e => {
    e.persist();
    this.setState( prevState => {
      return {
        smurfFormData: {
          ...prevState.smurfFormData,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurfFormData);
    this.setState({
      ...this.state,
      smurfFormData: emptySmurfFormData
    })
  }

  render() {
    const smurfs = this.props.smurfs.map(smurf => {
      return (
        <div key={smurf.name} className="smurf-container">
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
        <form 
          className="add-smurf-form"
          onSubmit={this.addSmurf}
        >
          <p>Add SMURF:</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="New SMURF Name"
            value={this.state.smurfFormData.name}
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="age"
            id="age"
            placeholder="New SMURF Age"
            value={this.state.smurfFormData.age}
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="height"
            id="height"
            placeholder="New SMURF Height"
            value={this.state.smurfFormData.height}
            onChange={this.handleInput}
          />
          <button type="submit">Add SMURF</button>
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
    getSmurfs,
    addSmurf
  }
)(App);

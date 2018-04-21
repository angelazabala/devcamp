import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ObjectTest = {
  1: {
      id : 1,
      name:'ABC'
  },
  3: {
      id: 3,
      name:'DEF'
  }
}


class App extends Component {
  _renderObject(){
		return Object.entries(ObjectTest).map(([key, value], i) => {
			return (
				<div key={key}>
					id is: {value.id} ;
					name is: {value.name}
				</div>
			)
		})
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>This is an Object</p>
          {this._renderObject()}
        </div>
      </div>
    );
  }
}


export default App;

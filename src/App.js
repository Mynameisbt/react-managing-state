import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  
  state = {
	  numQuestions: 0,
      numCorrect: 0,
      value1 : Math.floor(Math.random() * 100),
      value2 : Math.floor(Math.random() * 100),
      value3 : Math.floor(Math.random() * 100),
      proposedOffset :  Math.floor(Math.random() * 3)
  }

  gradePick(answer) {
    var isCorrect = false;
    if ((this.state.proposedOffset === 0 && answer === true) ||
        (this.state.proposedOffset !== 0 && answer === false)) {
        	isCorrect = true;
    }
	
	this.setState((currentState) => {
      var numCorrect = currentState.numCorrect;
      if (isCorrect) {
        numCorrect++;
      }
      
      let updated = {
        numQuestions : currentState.numQuestions+1,
        numCorrect: numCorrect,
        value1 : Math.floor(Math.random() * 100),
      	value2 : Math.floor(Math.random() * 100),
      	value3 : Math.floor(Math.random() * 100),
      	proposedOffset :  Math.floor(Math.random() * 3)
      }
      return updated;
    });
	
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedOffset + this.state.value1 + this.state.value2 + this.state.value3}`}</p>
          </div>
          <button onClick={() => this.gradePick(true)}>True</button>
          <button onClick={() => this.gradePick(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

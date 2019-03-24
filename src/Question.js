import React,{Component} from "react";


class Question extends Component {
 
  render() {
    return (
    	<div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
		</div>  	
		)
	}
}
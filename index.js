import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
buttonClick = (e) => {
  this.setState({
    count: (this.state.count + 1)
  })
}
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <button onClick={this.buttonClick}> Button Clicked {this.state.count} No. of times</button>
        <p>
          Click on the Button to Count the No. of Times.
        </p>
      </div>
    );
  }
}

render(<App title='Know the No. of times Clicked' />, document.getElementById('root'));

// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {

  constructor() {
    super();

    // define initial state here:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    }
  } // end constructor

  handleClick = () => {
    // Update our state here
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    }, () =>   console.log(this.state.hasBeenClicked))

  }

  // Class component MUST ALWAYS RENDER AND RETURN
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }

} // end ClickityClick class

export default ClickityClick;

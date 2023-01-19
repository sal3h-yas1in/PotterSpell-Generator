import React from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

class MyButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked(event) {
      this.setState({value: this.state.value+1});
    }
    
    render() {
      return (
          <div>
          <div>{this.state.value}</div>
          <button onClick={this.buttonClicked}>Click</button>
        </div>
      );
    }
  }
  
  export { MyButton };
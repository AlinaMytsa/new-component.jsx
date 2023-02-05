import React from 'react';
import Filler from "./Filler";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: []
    }
  }

  handleClick = (sign) => () => {
    if (sign === '+'){
      let newCount = this.state.count  + 1;
      let array = this.state.value;
      array.unshift(newCount)
      this.setState({
        count: newCount,
        value: array
      })
    }

    if (sign === '-'){
      let newCount = this.state.count - 1;
      let array = this.state.value;
      array.unshift(newCount);
      this.setState({
        count: newCount,
        value: array
      })
    }
  }

  render() {
    const addItem = this.handleClick('+');
    const removeItem = this.handleClick('-');

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button onClick={addItem} type="button" className="btn btn-outline-success">+</button>
          <button onClick={removeItem} type="button" className="btn btn-outline-danger">-</button>
        </div>

        <Filler value={this.state.value}/>
      </div>
    )
  }

}


export default Component;

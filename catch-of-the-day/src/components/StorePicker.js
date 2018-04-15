import React, {Fragment} from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    // 1. stop form onSubmit
    // 2.get text from input
    const storeName = this.myInput.value.value;
    // 3.
    this.props.history.push(`/store/${storeName}`);
  }
componentDidMount(){
  console.log("Mounted!!!");
}
  render(){
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <button onClick={this.handleClick}>Click me!</button>
          <input type="text"
            ref={this.myInput}
            required placeholder="Store Name"
            defaultValue={getFunName()}/>
          <button type="submit"> Visit Store </button>
        </form>

    );
  }
}

export default StorePicker;

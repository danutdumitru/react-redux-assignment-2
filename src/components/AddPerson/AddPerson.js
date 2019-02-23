import React, { Component } from "react";

import "./AddPerson.css";

export class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };

  onChangeNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  onChangeAgeHandler = event => {
    this.setState({
      age: event.target.value
    });
  };

  render() {
    return (
      <div className="AddPerson">
        <input
          name="name"
          type="text"
          onChange={this.onChangeNameHandler}
          value={this.state.name}
        />
        <input
          name="age"
          type="number"
          onChange={this.onChangeAgeHandler}
          value={this.state.age}
        />

        <button
          onClick={() =>
            this.props.personAdded({
              name: this.state.name,
              age: this.state.age
            })
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}
export default AddPerson;

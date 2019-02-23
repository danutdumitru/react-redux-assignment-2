import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../store/actions";
import { connect } from "react-redux";

class Persons extends Component {
  personAddedHandler = ( {name, age}) => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: name,
      age: age
    };
    this.props.onPersonAdd(newPerson);
  };

  personDeletedHandler = personId => {
    this.props.onPersonDelete(personId);
  };

  render() {
    const persons = this.props.pers.map(person => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        clicked={() => this.personDeletedHandler(person.id)}
      />
    ));
    return (
      <div>
        <AddPerson personAdded={this.personAddedHandler} />
        {persons}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pers: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdd: person => dispatch({ type: actionTypes.ADD, person: person }),
    onPersonDelete: personId =>
      dispatch({ type: actionTypes.DELETE, personId: personId })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);

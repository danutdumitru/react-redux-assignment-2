import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  let newPersons = [];
  switch (action.type) {
    case actionTypes.ADD:
      newPersons = state.persons.concat(Array.of(action.person));
      break;
    case actionTypes.DELETE:
      state.persons.filter(elem => elem.id === +action.personId);
      break;
    default:
      return state;
  }
  return {
    persons: newPersons
  };
};

export default reducer;

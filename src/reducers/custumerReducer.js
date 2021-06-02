import CHANGE_INFO from '../actions';
const INITIAL_STATE = {
  clientes: [],
}

function customerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_INFO:
      return {
        ...state,
        clientes: [...state.clientes, action.payload.value],
      };
    default:
      return state;
  }
}

export default customerReducer; 

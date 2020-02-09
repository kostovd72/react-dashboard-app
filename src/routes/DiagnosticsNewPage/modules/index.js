import initialState from 'store/globalState/initialState';

// action type
import {
  GET_NODES,
} from './types';

// reducer functions
export default function diagnosisReducer(state = initialState.diagnosis, action) {
  switch (action.type) {
    case GET_NODES:
      return {
        nodes: action.payload,
      };
    default:
      return state;
  }
}

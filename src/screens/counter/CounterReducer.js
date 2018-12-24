import { CounterActionTypes } from './CounterActions';

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};

export default CounterReducer;

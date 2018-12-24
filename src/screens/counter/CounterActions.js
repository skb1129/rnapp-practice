const CounterActionTypes = {
  INCREMENT_COUNT: 'CounterActions/INCREMENT_COUNT',
};

const CounterActions = {
  incrementCount: payload => ({ type: CounterActionTypes.INCREMENT_COUNT, payload }),
};

export {
  CounterActionTypes,
  CounterActions,
};

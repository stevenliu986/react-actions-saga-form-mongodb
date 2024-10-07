import { createActions, handleActions, combineActions } from "redux-actions";

const counterActions = createActions({
  INCREMENT: (amount) => ({ amount }),
  DECREMENT: (amount) => ({ amount: -amount }),
});

const counterReducer = handleActions(
  {
    [combineActions(counterActions.increment, counterActions.decrement)]: (
      state,
      { payload: { amount } },
    ) => {
      return { ...state, counter: state.counter + amount };
    },
  },
  { counter: 0 },
);

export { counterActions, counterReducer };

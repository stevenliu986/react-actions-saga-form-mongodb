import { createAction, handleActions } from "redux-actions";

const showHello = createAction("SHOW_HELLO");

const helloReducer = handleActions(
  {
    [showHello]: (state, action) => ({ ...state, hello: action.data }),
  },
  { hello: "" },
);

export { showHello, helloReducer };

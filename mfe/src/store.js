import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "./reducer.js";
import { mySaga } from "./hello.saga.js";
import { helloReducer } from "./helloReducer.js";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({
  reducer: helloReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(mySaga);
export default store;

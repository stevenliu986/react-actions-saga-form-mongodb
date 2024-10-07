import { call, put, takeEvery } from "redux-saga/effects";
import { counterActions } from "./reducer.js";
import { showHello } from "./helloReducer.js";

function* getHello({ payload: { amount } }) {
  const baseUrl = "http://localhost:3000";
  const basePath = "/api/hello";
  const response = yield call(fetch, `${baseUrl}${basePath}`);
  // 下面的代码是将获取到的数据更新到store里面，所以put的参数应该是个action，当然，也可以放入相应的payload
  //  这里的参数就可以使用createActions来创建相应的方法来
  const data = yield call([response, "text"]);
  console.log("data", data);
  // yield put(counterActions.increment(amount));
  yield put({ type: showHello, data });
}

export function* mySaga() {
  yield takeEvery("JIA", getHello);
}

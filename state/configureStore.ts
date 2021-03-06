import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./mainReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
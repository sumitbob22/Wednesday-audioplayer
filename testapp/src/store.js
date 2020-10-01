import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()
let initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default function configureStore() {
    return store;
}
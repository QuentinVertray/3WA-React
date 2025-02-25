import { legacy_createStore as createStore, combineReducers } from 'redux';
import denominationReducer from './reducer/denominationReducer.js';

const store = createStore(
    combineReducers({
        denomination: denominationReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

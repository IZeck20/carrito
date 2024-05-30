import { createStore, combineReducers } from 'redux';
import { ShoppingReducer } from './reducers/shoppingreducer';

const rootReducer = combineReducers({
  shopping: ShoppingReducer
});

const store = createStore(rootReducer);

export default store;

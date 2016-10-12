import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

export const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState)
);

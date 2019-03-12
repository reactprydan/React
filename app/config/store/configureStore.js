import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';
import loggingMiddleware from './middleware/logging';

/**
 * Redux Store configuration function
 * appliying middleware
 * @param initialState intial state object
 *  importing middleware and applying here
 * ? should i create seprate middleware file
 */

const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);
  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;

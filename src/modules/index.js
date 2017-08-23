import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import messages from './messages';
import counter from './counter';

export default combineReducers({
  routing: routerReducer,
  messages,
  counter
});

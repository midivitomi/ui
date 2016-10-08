import { combineReducers } from 'redux';
import divisionsChecking from './divisionsChecking';
import routes from './routes';

export default combineReducers({
  divisionsChecking,
  routes
});

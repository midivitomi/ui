import { combineReducers } from 'redux';
import divisionsChecking from './divisionsChecking';
import routes from './routes';
import gameList from './gameList';

export default combineReducers({
  divisionsChecking,
  routes,
  gameList
});

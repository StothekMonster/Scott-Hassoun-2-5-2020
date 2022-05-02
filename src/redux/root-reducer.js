import favoritesReducer from './favorites/favorites.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	favorites: favoritesReducer,
});

export default rootReducer;

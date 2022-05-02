import { favoriteActionTypes } from './favorites.types';
import { removeFavorite, addFavorite } from './favorites.utils';
const INITIAL_STATE = {
	favorites: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case favoriteActionTypes.ADD_ITEM:
			return {
				...state,
				favorites: addFavorite(state.favorites, action.payload),
			};
		case favoriteActionTypes.REMOVE_ITEM:
			return {
				...state,
				favorites: removeFavorite(state.favorites, action.payload),
			};
		default:
			return state;
	}
};

export default favoritesReducer;

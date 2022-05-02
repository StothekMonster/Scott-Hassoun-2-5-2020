import { favoriteActionTypes } from './favorites.types';

export const addItem = (item) => ({
	type: favoriteActionTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: favoriteActionTypes.REMOVE_ITEM,
	payload: item,
});

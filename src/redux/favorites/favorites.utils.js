export const removeFavorite = (favorites, favoriteToRemove) => {
	return favorites.filter((favorite) => favorite.id !== favoriteToRemove);
};

export const addFavorite = (favorites, favoriteToadd) => {
	if (favorites.find((fav) => fav.id === favoriteToadd.id)) {
		return favorites;
	}
	return [...favorites, favoriteToadd];
};

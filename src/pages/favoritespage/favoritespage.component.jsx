import React from 'react';
import { connect } from 'react-redux';
import FavoriteBox from '../../components/favoriteBox/favoriteBox.component';
import './favoritespage.styles.scss';

const FavoritesPage = ({ favorites }) => {
	return (
		<div className='homepage'>
			<div className='favorites'>
				{favorites.favorites.map((favorite) => (
					<FavoriteBox key={favorite.id} data={favorite} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	favorites: state.favorites,
});

export default connect(mapStateToProps)(FavoritesPage);

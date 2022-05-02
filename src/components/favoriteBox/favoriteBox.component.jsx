import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import './favoriteBox.styles.scss';
import { removeItem } from '../../redux/favorites/favorites.actions';
import { useNavigate } from 'react-router-dom';

const FavoriteBox = ({ data: { city, id }, removeItem }) => {
	const navigate = useNavigate();
	//log(history);
	return (
		<div className='favoriteBox' onClick={() => navigate(`/${city}`)}>
			{city}
			<Button
				text={'Remove from Favorites'}
				removeHandler={removeItem}
				id={id}
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(FavoriteBox);

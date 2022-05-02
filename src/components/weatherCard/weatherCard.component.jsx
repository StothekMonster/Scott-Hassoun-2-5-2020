import React from 'react';
import './weatherCard.styles.scss';
import _ from 'lodash';
import Button from '../button/button.component';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/favorites/favorites.actions';

import { FaHeart } from 'react-icons/fa';

const WeatherCard = ({
	weatherData,
	city,
	addItem,
	celcius,
	favorites: { favorites },
}) => {
	let heart = null;
	if (favorites) {
		let match = favorites.find((fav) => fav.city === city);
		if (match) {
			heart = <FaHeart className='heart' />;
		}
	}

	return !_.isEmpty(weatherData.data) ? (
		<div className='weather'>
			<div className='city'>
				{city} {heart}
			</div>
			<div className='weatherinfo'>
				{celcius
					? weatherData.data.Temperature.Metric.Value
					: weatherData.data.Temperature.Imperial.Value}
				˚
				{celcius
					? weatherData.data.Temperature.Metric.Unit
					: weatherData.data.Temperature.Imperial.Unit}{' '}
				{weatherData.data.WeatherText} <div />
			</div>
			<Button
				text={'Add To Favorites'}
				addHandler={addItem}
				city={city}
				id={weatherData.key}
			/>

			{/* <Button
				text={heart ? 'Remove from Favorites' : 'Add To Favorites'}
				addHandler={heart ? false : addItem}
				removeHandler={heart ? removeItem : false}
				favorite={heart}
				city={city}
				id={weatherData.key}
			/> */}
		</div>
	) : null;
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

const mapStateToProps = (state, ownProps) => ({
	favorites: state.favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);

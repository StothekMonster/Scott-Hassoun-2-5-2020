import React from 'react';
import './forecast.styles.scss';
import _ from 'lodash';

const days = {
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday',
};

const ForecastCard = ({ forecastData }) => {
	return !_.isEmpty(forecastData) ? (
		<div className='forecastContainer'>
			{forecastData.map((forecast) => {
				return (
					<div key={forecast.Date} className='forecast'>
						<div className='forecast-details day'>
							<span>{days[new Date(forecast.Date).getDay()]}</span>
						</div>
						<div className='forecast-details'>{forecast.Day.IconPhrase}</div>
						{/* data doesn't provide celcius will not convert based on other formatting way for weather card, would need to write conversion function */}
						<div className='forecast-details'>
							Max: {forecast.Temperature.Maximum.Value}˚
							{forecast.Temperature.Maximum.Unit}
						</div>
						<div className='forecast-details'>
							Min: {forecast.Temperature.Minimum.Value}˚
							{forecast.Temperature.Minimum.Unit}
						</div>
					</div>
				);
			})}
		</div>
	) : (
		<div></div>
	);
};

export default ForecastCard;

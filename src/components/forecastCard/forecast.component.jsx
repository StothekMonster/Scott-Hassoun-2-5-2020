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

function getTemperatureString(celcius, temperature, unitFromApi) {
	if (('C' === unitFromApi && celcius) || ('F' === unitFromApi && !celcius)) {
		return `${temperature}˚${unitFromApi}`;
	}
	if (unitFromApi === 'F' && celcius) {
		let newTemp = (temperature - 32) * 0.5556;
		return `${newTemp.toFixed(0)}˚C`;
	}
	if (unitFromApi === 'C' && !celcius) {
		let newTemp = temperature * 1.8 + 32;
		return `${newTemp.toFixed(0)}˚F`;
	}
}

const ForecastCard = ({ forecastData, celcius }) => {
	return !_.isEmpty(forecastData) ? (
		<div className='forecastContainer'>
			{forecastData.map((forecast) => {
				return (
					<div key={forecast.Date} className='forecast'>
						<div className='forecast-details day'>
							<span>{days[new Date(forecast.Date).getDay()]}</span>
						</div>
						<div className='forecast-details'>{forecast.Day.IconPhrase}</div>
						<div className='forecast-details'>
							<span className='max'>Max </span>
							{getTemperatureString(
								celcius,
								forecast.Temperature.Maximum.Value,
								forecast.Temperature.Maximum.Unit
							)}
						</div>
						<div className='forecast-details'>
							<span className='min'>Min </span>
							{getTemperatureString(
								celcius,
								forecast.Temperature.Minimum.Value,
								forecast.Temperature.Minimum.Unit
							)}
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

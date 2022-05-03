import React, { useEffect, useState } from 'react';
import Search from '../../components/search/search.component';
import WeatherCard from '../../components/weatherCard/weatherCard.component';
import './homepage.styles.scss';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ForecastCard from '../../components/forecastCard/forecast.component';
import { useParams } from 'react-router-dom';
import { generateAPI } from '../../utils/fetch';
const toastOptions = {
	position: toast.POSITION.BOTTOM_RIGHT,
};

const API_KEY = generateAPI();

let defaultCity = 'Tel Aviv';

const HomePage = ({ celcius }) => {
	let params = useParams();

	const [searchString, setsearchString] = useState('');
	const [city, setCity] = useState(params.city);
	const [weatherData, setWeatherData] = useState({});
	const [forecast, setForecast] = useState({});

	useEffect(() => {
		if (!navigator.geolocation || city) {
			defaultCity = city;
		} else {
			// status.textContent = 'Locating…';
			navigator.geolocation.getCurrentPosition(
				async (e) => {
					const res = await fetch(
						`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.coords.latitude}&longitude=${e.coords.longitude}&localityLanguage=en`
					);
					const data = await res.json();
					defaultCity = data.city;
				},
				() => {
					defaultCity = 'Tel Aviv';
					toast.error(
						`Could not find ${searchString}, defaulting to ${defaultCity}`
					);
				}
			);
		}
		const delayPerLetter = 100;
		let count = 1;
		if (defaultCity.length !== 0) {
			let interval = setInterval(() => {
				setsearchString(defaultCity.substring(0, count));
				count++;
				if (count === defaultCity.length + 1) {
					setTimeout(() => {
						findCity(defaultCity);
					}, 500);
					clearInterval(interval);
				}
			}, delayPerLetter);
		}
		// eslint-disable-next-line
	}, []);

	const findCity = async (city = searchString) => {
		try {
			const response = await fetch(
				`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`
			);
			const data = await response.json();
			if (data.length !== 0) {
				let key = data[0].Key;
				setCity(data[0].LocalizedName);
				getWeather(key);
				getForecast(key);
			}
		} catch (error) {
			toast.error('could not find your city', toastOptions);
		}
	};

	const getWeather = async (key) => {
		try {
			const response = await fetch(
				`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`
			);
			const data = await response.json();
			setWeatherData({ key, data: data[0] });
		} catch (error) {
			toast.error('could not get weather', toastOptions);
		}
	};

	const getForecast = async (key) => {
		try {
			const response = await fetch(
				`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
			);
			const data = await response.json();
			setForecast(data.DailyForecasts);
		} catch (error) {
			toast.error('could not get forecast', toastOptions);
		}
	};

	return (
		<div className='homepage'>
			<Search
				weatherSearch={findCity}
				searchTerm={searchString}
				setSearchTerm={setsearchString}
			/>
			<WeatherCard weatherData={weatherData} city={city} celcius={celcius} />
			<ForecastCard forecastData={forecast} celcius={celcius}></ForecastCard>
			<ToastContainer />
		</div>
	);
};

export default HomePage;

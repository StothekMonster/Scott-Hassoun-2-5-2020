// import { Route, Router, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import FavoritesPage from './pages/favoritespage/favoritespage.component';
import HomePage from './pages/homepage/homepage.component';

export const PATHS = { HOME: '/', FAVORITES: '/favorites', LOCATION: '/:city' };
function App() {
	const [dark, setDark] = useState(false);
	const [celcius, setCelcius] = useState(true);

	return (
		<Router>
			<div className={`body ${dark ? 'dark' : ''}`}>
				<Header
					darkToggleHandler={setDark}
					dark={dark}
					tempHandler={setCelcius}
					celcius={celcius}
				/>

				<Routes>
					<Route
						exact
						path={PATHS.HOME}
						element={<HomePage celcius={celcius} />}
					/>
					<Route
						exact
						path={PATHS.LOCATION}
						element={<HomePage location='' celcius={celcius} />}
					/>
					<Route path={PATHS.FAVORITES} element={<FavoritesPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

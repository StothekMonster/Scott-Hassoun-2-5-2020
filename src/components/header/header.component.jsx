import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { PATHS } from '../../App';

const Header = ({ darkToggleHandler, dark, tempHandler, celcius }) => {
	return (
		<nav className='nav'>
			<div className='container'>
				<h1 className='logo'>
					<Link to={PATHS.HOME}>Abra</Link>
				</h1>
				<ul>
					<li className='active'>
						<Link to={PATHS.HOME}>Home</Link>
					</li>

					<li>
						<Link to={PATHS.FAVORITES}>Favorites</Link>
					</li>
					<li>
						<div className='switchContainer'>
							<span className='dark'>{dark ? 'Dark' : 'Light'}</span>
							<label className='switch'>
								<input
									type='checkbox'
									onClick={() => darkToggleHandler(!dark)}
								/>
								<div></div>
							</label>
						</div>
					</li>

					<li>
						<div className='switchContainer'>
							<span className='dark'>{celcius ? '˚C' : '˚F'}</span>
							<label className='switch'>
								<input type='checkbox' onClick={() => tempHandler(!celcius)} />
								<div></div>
							</label>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Header;

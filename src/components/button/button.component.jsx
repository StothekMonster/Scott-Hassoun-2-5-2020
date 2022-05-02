import React, { useState } from 'react';
import '../weatherCard/weatherCard.styles.scss';
const Button = ({ text, addHandler, removeHandler, city, id }) => {
	const [circles, setCircles] = useState([]);
	function clickHandler(e) {
		const x = e.clientX;
		const y = e.clientY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = React.createElement('span', {
			key: Math.random() * 1000000,
			className: 'circle',
			style: { top: yInside + 'px', left: xInside + 'px' },
		});
		if (addHandler) addHandler({ city, id });
		if (removeHandler) {
			removeHandler(id);
		}
		setCircles([...circles, circle]);
		setTimeout(() => {
			setCircles(circles.slice(1));
		}, 500);
	}

	return (
		<button
			className={removeHandler ? 'remove button' : 'button'}
			onClick={clickHandler}>
			{text}
			{circles}
		</button>
	);
};
export default Button;

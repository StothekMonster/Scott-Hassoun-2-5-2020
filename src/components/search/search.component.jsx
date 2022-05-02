import React, { useRef } from 'react';
import './search.styles.scss';

const Search = ({ weatherSearch, searchTerm, setSearchTerm }) => {
	const inputRef = useRef();
	const timeout = useRef();

	const handler = (event) => {
		setSearchTerm(event.target.value);
		clearTimeout(timeout.current);
		if (!inputRef.current.value.trim()) {
			return;
		}
		timeout.current = setTimeout(() => {
			weatherSearch();
		}, 1000);
	};

	return (
		<input
			className='input'
			onChange={handler}
			ref={inputRef}
			value={searchTerm}
			placeholder='Search for a location...'></input>
	);
};
export default Search;

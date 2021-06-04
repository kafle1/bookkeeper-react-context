import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext.js';

function BookDetails({ book }) {
	const { dispatch } = useContext(BookContext);

	return (
		<li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
			<div className="title">{book.title}</div>
			<div className="authhor">{book.author}</div>
		</li>
	);
}

export default BookDetails;

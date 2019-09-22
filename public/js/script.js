function getMovies() {
	const url = 'http://localhost:3000/movies';

	return fetch(url, { method: 'GET',
	headers: {
		Accept: 'application/json, text/plain, */*',
		'Content-type': 'application/json'
	}
	}).then((res) => res.json()
	).then((movies) => {
		let output = '';
		movies.map((movie) => {
			output = output
					+ `<li id="${movie.id}">
						  <div>
							 <p id="title">${movie.title}</p>
							 <p id="language">${movie.originalLanguage}</p>
						  </div>
						  <div>
						  	 <img src="${movie.posterPath}">
						  </div>
						  <button id="addToFavourite" 
							  onclick="addFavourite('${movie.id}'">
							  Add to favourites
						  </button>
					   </li>
					   </br>`;
		});
		document.getElementById('moviesList').innerHTML = output;
		return movies;
	}).catch((error) => error);
}


function getFavourites() {
	const lastUrl = 'http://localhost:3000/favourites';
	return fetch(lastUrl, { method: 'GET',
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json'
	}
	}).then((res) => {
			return res.json();
	}).then((movies) => {
		let output = '';
		movies.forEach((movie) => {
			output = output
					+ `<li id="${movie.id}">
						  <div>
							 <p id="title">${movie.title}</p>
							 <p id="language">${movie.originalLanguage}</p>
						  </div>
						  <div>
						  	 <img src="${movie.posterPath}">
						  </div>
					   </li>
					   </br>`;
		});
		document.getElementById('favouritesList').innerHTML = output;
		return movies;
	}).catch((err) => err);
}

function addFavourite(id) {
	const lastUrl = 'http://localhost:3000/favourites';
	return fetch(lastUrl, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-type': 'application/json'
		},
		body: {
			id
		}
	})
	.then((res) => {
		res.json();
	})
	.then((data) => { 
        return data; 
	})
	.catch((error) =>console.log(error));
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution



---------genner------
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a51592f688msh4266b7ec9c109b5p116d72jsn5e07456a2354',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

fetch('https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
-------title------


fetch('https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/%7Bname%7D/', options)


------moviesbyyear-----

fetch('https://moviesminidatabase.p.rapidapi.com/movie/byYear/%7Byear%7D/', options)


-------id------
fetch('https://moviesminidatabase.p.rapidapi.com/movie/id/%7Bmovie_id%7D/', options)






const TMDBUrl = 'https://api.themoviedb.org/3/movie/550?api_key=00decbdccac0d50538a8bdbf8085ce4a'


function setup(){

	noCanvas();

	getTtitle(TMDBUrl).then(results =>{
		
		let year = results.date
		year = year.slice(0,4)

		createP(year)
		createP(results.title)
	})
}

async function getTtitle (url) {
	let response = await fetch(url)
	let json = await response.json()

	return {
		title: json.title,
		date: json.release_date
	}
}
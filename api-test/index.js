const TMDBUrl = 'https://api.themoviedb.org/3/movie/550?api_key=00decbdccac0d50538a8bdbf8085ce4a'

const localImageUrl1 = './video1.png'
const localImageUrl2 = './video2.png'
const localImageUrl3 = './video3.png'

const imageUrlArray = [localImageUrl1, localImageUrl2, localImageUrl3]

function setup(){

	noCanvas();
	// writeTitle(TMDBUrl)
	insertImage(localImageUrl2)
	// getLocalImage(localImageUrl)
}

async function getMovieJson (url) {
	let response = await fetch(url)
	let json = await response.json()

	return json
}

function writeTitle(url) {
		getMovieJson(url).then(result =>{
		createP(result.title)
	})
}

async function getLocalImage (url) {	
	let response = await fetch(url)
	let blob = await response.blob()
	return blob
}

function insertImage(image) {
	if (typeof image === 'string') {
		getLocalImage(image)
		.then(result => createImg(URL.createObjectURL(result)))
		.catch(error => console.error(error))
	} else if (typeof image === 'object') {
		image.forEach(element => {
			getLocalImage(element)
			.then(result => createImg(URL.createObjectURL(result)))
			.catch(error => console.error(error))
		})
	} else {
		console.log('Please use an array or string with "insertImage function')
	}
}
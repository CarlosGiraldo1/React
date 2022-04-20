const apikey='7AFdRoZ4Erd6Vpqb0Z8ryxuari2Tw7i6';

const pet = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);


pet.then(resp => {
    console.log(resp);
})


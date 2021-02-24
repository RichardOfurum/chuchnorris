const mainJoke = document.getElementById('mainJoke');



mainJoke.addEventListener("click", getJokes);

function getJokes(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response =>{
        // console.log(response.json());
        return response.json();

    })
    .then((data) =>{
        // console.log( "Data is :", data );
        var joke = data.value;
        // console.log(joke)
        mainJoke.innerText = joke;
    });
}

setInterval(getJokes, 10000);
//Variable jokeEl is referred to id='joke'
const jokeEl = document.getElementById('joke')
//Variable jokeBtn is referred to id='jokeBtn'
const jokeBtn = document.getElementById('jokeBtn')

//HTML DOM events allow JS to register different event handlers on elements
//Attach a 'click' listener to activate the function generateJoke()
jokeBtn.addEventListener('click', generateJoke)

//perform generateJoke()
generateJoke()

// USING ASYNC/AWAIT

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const rest = await fetch('https://icanhazdadjoke.com', config)

    const data = await rest.json()

    jokeEl.innerHTML = data.joke
}
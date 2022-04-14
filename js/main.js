//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  

    fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.author
      document.querySelector('h3').innerText = data.en
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


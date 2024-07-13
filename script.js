let caller_btn = document.querySelector('#caller-btn');

caller_btn.addEventListener('click', function() {fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

        let joke = data.joke;

        document.querySelector('.joke').innerHTML = joke;
    });
});

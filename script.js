let caller_btn = document.querySelector('#caller-btn');

caller_btn.addEventListener('click', function() {fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

        let joke = data.joke;

        if(joke === undefined){
            // append an image element to the parent div
            let img = document.createElement('img');
            img.src = "https://i.pinimg.com/564x/57/c2/c1/57c2c16decf4717306c60c159e3faf5b.jpg";
            img.alt = "joke";
            document.querySelector('.joke').innerHTML = "";
            document.querySelector('.joke').appendChild(img);
        }
        else{
            document.querySelector('.joke').innerHTML = joke;
        }
        
    });
});

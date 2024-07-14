let caller_btn = document.querySelector("#caller-btn");

caller_btn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let joke = data.joke;
      let type = data.type;

      // check  if type is single or not 

      if(type === 'single'){
        document.querySelector(".joke").innerHTML = joke;
        
      }
      if(type === 'twopart'){
        let setup, delivery;
        setup = data.setup;
        delivery = data.delivery;
        document.querySelector('.joke').innerHTML = setup + delivery;   
        
      }
    });


}); 
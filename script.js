let caller_btn = document.querySelector("#caller-btn");

caller_btn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let joke = data.joke;

      if (joke === undefined) {
        document.querySelector(".joke").innerHTML =" Bakit ka nag IT ? ME : Mahilig kasi ako mag online games nuon haha";
      }
      document.querySelector(".joke").innerHTML = joke;
    });
});

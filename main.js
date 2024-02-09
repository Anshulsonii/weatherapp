let quote = document.querySelector(".display-5");
let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector(".display-1");
let h2 = document.querySelector(".display-2");
let h3 = document.querySelector(".display-3");
let p = document.querySelector("p");
let img = document.querySelector("#imgs");
let body = document.querySelector("body");
body.style.background = "url(https://akm-img-a-in.tosshub.com/sites/weather/resources/image/bg/clouds.jpg)";
body.style.backgroundSize = "cover";

const fetchQuote = async () => {
    // const response = await fetch("https://quotable.io/random");
    const data = await response.json();
    quote.innerText = data.content + " - " + data.author;
};

setInterval( () => {
    fetchQuote();
}, 10000);

const getWeather = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=ddc55afac81d45e686194516240501&q=${input.value}&aqi=yes`
          );
          
          const data = await response.json();
          console.log(data);
          h1.innerText = data.current.temp_c + "°";
          h2.innerText = data.location.name;
          h3.innerText = data.location.region;
          p.innerText = data.current.condition.text;
          p.className = "display-6";
          img.setAttribute("src", data.current.condition.icon);
          
          fetchQuote();
          
    }   catch{
        window.alert("City not Found");
    }

    form.reset();
};

form.addEventListener("submit", getWeather);
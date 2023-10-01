
var APIweatherKey = "8f3dedb570d3cfba211aba196e599fd2"
var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector("name");
var desc = document.querySelector("desc");
var temp = document.querySelector("temp");

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5f4a5275716254830e22e8be465d345e')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var temp = data['main']['temp'];
    var descValue = data['weather'];

    name.innerHTML =nameValue;
    temp.innerHTML =tempValue;
    desc.innerHTML =descValue;

})

.catch(err => alert("Wrong city name!"))
})



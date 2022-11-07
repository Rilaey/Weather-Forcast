let searchButtonEl = document.getElementById('search-click');
let searchHistoryListEl = document.getElementById('search-list');
let userInputCity = document.getElementById('city-name');
let userSearchEl = document.getElementById('user-search-input');
let cityTemp = document.getElementById('city-temp');
let cityWind = document.getElementById('city-wind');
let cityHumidity = document.getElementById('city-humidity');

//save user search input to local storage
searchButtonEl.addEventListener('click', function() {
    let userSearchElValue = document.getElementById('user-search-input').value;

    localStorage.setItem("userSearchElValue", userSearchElValue)

    let newListItem = localStorage.getItem('userSearchElValue') + '<br>'

    $(searchHistoryListEl).append(newListItem);

    userInputCity.textContent = userSearchElValue + '   ' + moment().format("dddd, MMMM Do");

    // on click fetch weather info and populate html
    // this fetch function generates the current weather information
        const key = 'a7d21723ff40c0e628b4d0449cd0708b';
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ userSearchElValue +'&units=imperial&appid='+ key)  
        .then(function(response) {
            if(response.status === 404) {
                alert("Please input a valid city!")
            }
             return response.json();
             }) // Convert data to json
             

        .then(function(data) {
            let cityTempValue = data['main']['temp'];
            let cityWindValue = data['wind']['speed'];
            let cityHumidityValue = data['main']['humidity'];

            cityTemp.textContent = "Temp: " + cityTempValue + "°F";
            cityWind.textContent = "Wind: " + cityWindValue + "MPH";
            cityHumidity.textContent = "Humidity: " + cityHumidityValue + "%";

            console.log(data)
        })
        .catch(function(err) {
          // catch any errors
            console.log(err);
        });

        
}); 

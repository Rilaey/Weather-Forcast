// global variables
let searchButtonEl = document.getElementById('search-click');
let searchHistoryListEl = document.getElementById('search-list');
let userInputCity = document.getElementById('city-name');
let userSearchEl = document.getElementById('user-search-input');
let cityTemp = document.getElementById('city-temp');
let cityWind = document.getElementById('city-wind');
let cityHumidity = document.getElementById('city-humidity');
const key = 'a7d21723ff40c0e628b4d0449cd0708b';
let userSearchElValue = document.getElementById('user-search-input').value;


//save user search input to local storage
searchButtonEl.addEventListener('click', function() {

    let userSearchElValue = document.getElementById('user-search-input').value;

    userInputCity.textContent = userSearchElValue + '   ' + moment().format("dddd, MMMM Do") 
    // on click fetch weather info and populate html
    // this fetch function generates the current weather information  
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ userSearchElValue +'&units=imperial&appid='+ key)
        .then(function(response) {
            if(response.status === 404) {
                alert("Please input a valid city!")
            }
             return response.json();
             }) // Convert data to json
             

        .then(function(data) {
            console.log(data)
            // getting data from the list of 40 array items and putting it on the html
            let cityTempValue = data['list']['0']['main']['temp'];
            let cityWindValue = data['list']['0']['wind']['speed'];
            let cityHumidityValue = data['list']['0']['main']['humidity'];

            document.getElementById('top-img').src = 'https://openweathermap.org/img/wn/'+ data['list']['0']['weather'][0]['icon'] +'@2x.png'
            cityTemp.textContent = "Temp: " + cityTempValue + "°F";
            cityWind.textContent = "Wind: " + cityWindValue + "MPH";
            cityHumidity.textContent = "Humidity: " + cityHumidityValue + "%";

            document.getElementById('day-1-date').textContent = data['list']['0']['dt_txt'];
            document.getElementById('pic-1').src = 'https://openweathermap.org/img/wn/'+ data['list']['0']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day-1-temp').textContent =  'Temp: ' + data['list']['0']['main']['temp'] + " °F";
            document.getElementById('day-1-humidity').textContent = 'Wind:' + data['list']['0']['wind']['speed'] + " MPH";
            document.getElementById('day-1-wind').textContent = 'Humidity: ' + data['list']['0']['main']['humidity'] + " %";
            
            document.getElementById('day-2-date').textContent = data['list']['8']['dt_txt'];
            document.getElementById('pic-2').src = 'https://openweathermap.org/img/wn/'+ data['list']['8']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day-2-temp').textContent =  'Temp: ' + data['list']['8']['main']['temp'] + " °F";
            document.getElementById('day-2-humidity').textContent = 'Wind:' + data['list']['8']['wind']['speed'] + " MPH";
            document.getElementById('day-2-wind').textContent = 'Humidity: ' + data['list']['8']['main']['humidity'] + " %";

            document.getElementById('day-3-date').textContent = data['list']['16']['dt_txt'];
            document.getElementById('pic-3').src = 'https://openweathermap.org/img/wn/'+ data['list']['16']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day-3-temp').textContent =  'Temp: ' + data['list']['16']['main']['temp'] + " °F";
            document.getElementById('day-3-humidity').textContent = 'Wind:' + data['list']['16']['wind']['speed'] + " MPH";
            document.getElementById('day-3-wind').textContent = 'Humidity: ' + data['list']['16']['main']['humidity'] + " %";

            document.getElementById('day-4-date').textContent = data['list']['24']['dt_txt'];
            document.getElementById('pic-4').src = 'https://openweathermap.org/img/wn/'+ data['list']['24']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day-4-temp').textContent =  'Temp: ' + data['list']['24']['main']['temp'] + " °F";
            document.getElementById('day-4-humidity').textContent = 'Wind:' + data['list']['24']['wind']['speed'] + " MPH";
            document.getElementById('day-4-wind').textContent = 'Humidity: ' + data['list']['24']['main']['humidity'] + " %";

            document.getElementById('day-5-date').textContent = data['list']['32']['dt_txt'];
            document.getElementById('pic-5').src = 'https://openweathermap.org/img/wn/'+ data['list']['32']['weather'][0]['icon'] +'@2x.png'
            document.getElementById('day-5-temp').textContent =  'Temp: ' + data['list']['32']['main']['temp'] + " °F";
            document.getElementById('day-5-humidity').textContent = 'Wind:' + data['list']['32']['wind']['speed'] + " MPH";
            document.getElementById('day-5-wind').textContent = 'Humidity: ' + data['list']['32']['main']['humidity'] + " %";


        })
        .catch(function(err) {
          // catch any errors
            console.log(err);
        });
}); 

// save to local storage
searchButtonEl.addEventListener('click', function(event) {
    event.preventDefault()

    let storedHistoryArr = []

    let storedHistory = document.createElement('button');
    $(storedHistory).css("width", "140px");
    $(storedHistory).css("margin-top", "10px");

   let test = document.getElementById('user-search-input').value;
   localStorage.setItem('test', test);

    storedHistoryArr.pop(test);
    console.log(storedHistoryArr);

   let tester = localStorage.getItem('test');
   storedHistory.textContent = tester;

   searchHistoryListEl.append(storedHistory);
})


const apiID = 'a80aa4f48ddef4e8ac2a4a8c61f931ca'
const cityName = document.getElementById('city')
const SearchButton = document.getElementById('SearchB')
const WeatherInCity = document.getElementById('WinCity')
const WeaterIcon = document.getElementById('Wicon')
const Temp = document.getElementById('Wtemp')
const FTemp = document.getElementById('Ftemp')
const Description = document.getElementById('Wdis')
const humidity = document.getElementById('Whum')
const WindSpeed = document.getElementById('Wwind')
SearchButton.addEventListener('click',()=>{
    let city = cityName.value;
    WeatherData(city);
});
cityName.addEventListener('keyup',(e)=>{
    if (e.key === 'Enter'){
        let city = cityName.value;
        WeatherData(city);
    }
});

async function WeatherData(city){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=metric`);
    const CityData = await response.json();
    const Icon = CityData.weather[0].icon;
    const CityTemp = CityData.main.temp;
    const feelsLike = CityData.main.feels_like;
    const Desc = CityData.weather[0].description;
    const wSpeed = CityData.wind.speed;
    const Humidity = CityData.main.humidity;
    WeatherInCity.innerHTML = `Weather in ${CityData.name}`;
    WeaterIcon.src = `./icons/${Icon}.png`;
    Temp.innerHTML = `${CityTemp}°C`;
    FTemp.innerHTML = `Feels Like: ${feelsLike}°C`;
    Description.innerHTML = `${Desc}`;
    humidity.innerHTML = `Humidity: ${Humidity}%`;
    WindSpeed.innerHTML = `Wind speed: ${wSpeed} km/h`;
    
}

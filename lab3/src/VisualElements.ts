import ICity from "./interfaces/IWeatherData";

export class VisualElements 
{
    city: ICity;

    getIcon(code: string) {
        return `http://openweathermap.org/img/wn/${code}@2x.png`;
    }

    get CityName() {
        const cityName = document.createElement("span");
        cityName.classList.add("cityName");
        cityName.textContent = this.city.name;
        return cityName;
    }

    get WeatherMain() {
        const info = document.createElement("div");
        info.classList.add("weatherMain");
        
        const weather = document.createElement("span");
        weather.textContent = this.city.weather[0].main;
        
        const img = document.createElement("img");
        img.src = this.getIcon(this.city.weather[0].icon);

        info.append(weather);
        info.append(img);
        
        return info;
    }

    get WeatherInfo() {
        const content = document.createElement("div");
        content.classList.add("info");

        const temp = document.createElement("span");
        temp.textContent = `Temp: ${this.city.main.temp}`;

        const humidity = document.createElement("span");
        humidity.textContent = `Humidity: ${this.city.main.humidity}`;

        const pressure = document.createElement("span");
        pressure.textContent = `Pressure: ${this.city.main.pressure}`;

        content.append(temp);
        content.append(humidity);
        content.append(pressure);

        return content;
    }

    constructor(city: ICity) {
        this.city = city;
    }

    //

    build(): HTMLElement
    {
        const card = document.createElement("div");
        card.classList.add("weatherCard");
        card.id = String(this.city.id);
        
        card.append(this.Title);
        card.append(this.WeatherData);
        card.append(this.CardContent);

        return card;
    }
}
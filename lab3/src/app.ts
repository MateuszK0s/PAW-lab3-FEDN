import { WeatherBox } from "./WeatherBox";

export default class App {
    private opwApiKey = '7858c2e898030f631401994d66f54c4a';

    constructor() {
        this.addCityButtonEvent();
    }

    async addCityButtonEvent() {
        document.getElementById('addCityButton').addEventListener('click', () => {
            const input = document.getElementById('inputCity') as HTMLInputElement;
            const cityInfoData = this.getCityInfo(input.value);
        })
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}


export default class App 
{
    private apiKey = "7858c2e898030f631401994d66f54c4a";
    public storageKey = "weatherItems";

    public getItems() {
        const items = this._getItemsAsString();
        return items ? JSON.parse(items) : [];
    }

    private _getItemsAsString(): string | null {
        return localStorage.getItem(this.storageKey);
    }

    public setOrSkip(cityCheck: string) {
        let items = this._getItemsAsString();
        let itemAsArray = items ? JSON.parse(items) : [];

        if(!itemAsArray.includes(cityCheck)) {
            itemAsArray.push(cityCheck);
            localStorage.setItem(this.storageKey, JSON.stringify(itemAsArray));
        }
    }

    public async getCityInfo(cityName: string = "", cityId: null|number = null) {
        return await this._getWeather(cityName, cityId);
    }

    private async _getWeather(cityName: string = "", cityId: null|number = null): Promise<any> {
        const url = cityId != null
            ? `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${this.apiKey}&units=metric`
            : `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.apiKey}&units=metric`;


        const response = await fetch(url);
        return await response.json();
    }
}
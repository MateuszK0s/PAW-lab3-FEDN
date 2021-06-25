import App from "./App";
import ICity from "./interfaces/IWeatherData";
import { VisualElements } from "./VisualElements";

const app = new App();
const result = document.getElementById("result");
const searchBtn = document.getElementById("search");
const cityInput = document.getElementById("cityInput") as HTMLInputElement;

let allItems = app.getItems();
const getCity = () => {
    return cityInput?.value;
}

searchBtn?.addEventListener("click", async function() {
    const cityName = getCity();
    const city: ICity = await app.getCityInfo(cityName);

    allItems = app.getItems();
    let cityCheck = String(city?.id);
    if("id" in city && !allItems.includes(cityCheck)) 
    {
        app.setOrSkip(String(cityCheck));
        const builder = new VisualElements(city);
        result?.append(builder.build());
    }
});

window.addEventListener("load", function() {
    app.getItems().forEach(async (cityCheck: string) => {
        const city = await app.getCityInfo("", Number(cityCheck));
        
        if("weather" in city)
        {
            const builder = new VisualElements(city);
            result?.append(builder.build());
        }
    });
})
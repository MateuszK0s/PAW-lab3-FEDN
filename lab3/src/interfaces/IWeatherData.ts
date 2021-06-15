export interface ICoord {
    lon: string;
    lat: string;
}

export interface IWeather{
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMain{
    temp: number;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
}

export interface IWind {
    speed: string;
    deg: string;
}

export interface IClouds {
    all: number;
}

export interface ISys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface ICityWeather {
    [index: number]: ICityWeather;
    description: string;
    icon: string;
    id: number;
    main: string;
}

export default interface ICity{
    coord: ICoord;
    weather: IWeather;
    base: string;
    main: IMain;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
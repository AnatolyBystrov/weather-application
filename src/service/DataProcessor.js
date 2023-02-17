import { weatherConfig } from "./weatherConfig.js";
export class DataProcessor{
    #url;
    constructor(url){
        this.#url = url;
    }
    async getData(latitude, longitude)
    {
        const responseFromServes =
        await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServes.json();
    }
    async getTemperatureData(city, startDate, endDate) {
        // const latitudeOfCity = weatherConfig.cities[city].latitude;
        // const longitudeofCity = weatherConfig.cities[city].longitude;
        const latitudeOfCity = weatherConfig.cities[city].latitude;
        const longitudeofCity =weatherConfig.cities[city].longitude;
        const responseFromServes =
        await fetch(`${this.#url}&latitude=${latitudeOfCity}&longitude=${longitudeofCity}&start_date=${startDate}
&end_date=${endDate}`);
        return responseFromServes.json();
    }

    async createWeatherObject(city, startDate, endDate, hourFrom, hourTo) {
            const dataFromServer = await this.getTemperatureData(city, startDate, endDate);
            const temperatures = dataFromServer.hourly.temperature_2m;
            const times = dataFromServer.hourly.time;
            const weatherObject = [];
            times.forEach((element, index) => {
                const time = new Date(element).getHours();
                if (time >= hourFrom && time <= hourTo) {
                    const dateForArray = element.split("T")[0];
                    weatherObject.push({ city, date: dateForArray, hour: time, temperature: temperatures[index] })
                }
            });
            return weatherObject;
        
    }
    // dataСhecking(startDate, hourFrom, hourTo) 
    // {
    //     let controlResult = true;
    //     const controlStartDay = this.checkingStartDay(startDate)
    //     if (controlStartDay)
    //     {
    //     if (hourFrom < 0 || hourFrom > 23) { console.log("Error.Start time value can be set from 0 to 23"); return controlResult = false; }
    //     else if (hourTo < 0 || hourTo > 23) {console.log("Error. End time value can be set from 0 to 23"); return controlResult = false;}
    //     return controlResult;}
    // }

    // checkingStartDay(startDate) 
    // {
    //     let controlResult = true;
    //     const now = new Date();
    //     const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    //     const other = new Date(startDate);
    //     const dataDate = new Date(other.getFullYear(), other.getMonth(), other.getDate()).valueOf();
    //     if (currentDate > dataDate) { return console.log("Error! Invalid start date. Start date is less than current date"),controlResult = false; }
    //     return controlResult;
    // }

}
import { weatherConfig } from "./weatherConfig.js";

export class DataProcessor {
    #url;
    constructor(url) {
        this.#url = url;
    }
    async getData(latitude, longitude) {
        const responseFromServes =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServes.json();
    }

    async getTemperatureData(city, startDate, endDate) {
        const latitudeOfCity = weatherConfig.cities[city].latitude;
        const longitude =weatherConfig.cities[city].longitude;
        const responseFromServes =
            await fetch(`${this.#url}&latitude=${latitudeOfCity}&longitude=${longitude}&start_date=${startDate}
&end_date=${endDate}`);
        return responseFromServes.json();
    }

    async createWeatherObject(city, startDate, endDate, hourFrom, hourTo) {
        const controlRes = this.dataСhecking(startDate, hourFrom, hourTo);
        if (controlRes) {
            const dataFromServer = await this.getTemperatureData(city, startDate, endDate);
            if (dataFromServer.error) { return console.log("Error.The end date is less than the start date or the forecast time is exceeded (Maximum forecast time is 16 days)"); }
            const temperatures = dataFromServer.hourly.temperature_2m;
            const times = dataFromServer.hourly.time;
            const weatherObject = [];
            times.forEach((element, index) => {
                const time = new Date(element).getHours();
                if (time >= hourFrom && time <= hourTo) {
                    const dateForArray = element.split("T")[0];
                    weatherObject.push({ date: dateForArray, hour: time, temperature: temperatures[index] })
                }
            });
            return console.log(weatherObject)
        };

    }
    dataСhecking(startDate, hourFrom, hourTo) {
        let controlResult = true;
        const controlStartDay = this.checkingStartDay(startDate)
        if (controlStartDay) {
            if (hourFrom < 0 || hourFrom > 23) { console.log("Error.Start time value can be set from 0 to 23"); return controlResult = false; }
            else if (hourTo < 0 || hourTo > 23) { console.log("Error. End time value can be set from 0 to 23"); return controlResult = false; }
            return controlResult;
        }
    }

    checkingStartDay(startDate) {
        let controlResult = true;
        const now = new Date();
        const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
        const other = new Date(startDate);
        const dataDate = new Date(other.getFullYear(), other.getMonth(), other.getDate()).valueOf();
        if (currentDate > dataDate) { return console.log("Error! Invalid start date. Start date is less than current date"), controlResult = false; }
        return controlResult;
    }

}

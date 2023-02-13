import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./service/weather-config.js";


const dataProcessor = new DataProcessor(weatherConfig.url);
async function displayTemperatures() 
{
const data = await dataProcessor.createWeatherObject("Jerusalem","2023-02-12","2023-03-02",21,23)
}
displayTemperatures()
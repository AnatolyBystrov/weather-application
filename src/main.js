import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./service/weatherConfig.js";
import { DataFormForInput } from "./ui/inputDataForm.js";

import { Table } from "./ui/tables.js";

const schema = [
    {columnName :`Date`,fieldName:`date`},
    {columnName : `Hour`, fieldName:`hour`},
    {columnName : `Temperature`, fieldName: `temperature`},
];
const dataForm = new DataFormForInput(".input_city","inpur_days","input_hours","inpput_buttons");
const dateProcessor =new DataProcessor(weatherConfig.url)
const buttonSubmit = document.querySelector(".submit");
const tableWeather = new Table("table", "period", schema)

buttonSubmit.addEventListener("click",async()=>
{const dataFromClient = dataForm.getDataFromFrom();
const dataFromServer= await displayTemperature(dataFromClient);
tableWeather.addRow(dataFromServer)
});

async function displayTemperature(dataFromClient)
{
    const dataFromServer = await dateProcessor.createWeatherObject(dataFromClient.city,dataFromClient.startDay,
        dataFromClient.finishDay, dataFromClient.fromHour, dataFromClient.toHour);
        return dataFromServer;
}


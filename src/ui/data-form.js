const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id";
export class DataForm{
    #formElement;
    #dataFromElement;
    #dateToElement;
    constructor(parentId,maxDays){
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dataFromElement = document.getElementById(DATE_FROM_ID);
        this.#setMinMaxDates(maxDays);
    }
   #fillForm(parentElement){
    parentElement.innerHTML = `<form id = "${FORM_ID}">
        <input type = "date" id ="${DATE_FROM_ID} required">
        <input type = "date" id ="${DATE_TO_ID} required"
        <button type = "submit">Submit</button>
        <button type = "reset">Reset</button>
        </form> `
   }
   #setMinMaxDates(maxDays){
    const current = new Date();
    const maxDayOfMounth = current.getDate() + maxDays;
    const maxDate = new Date();
    maxDate.setDate(maxDayOfMounth);
    const minDateStr = current.toISOString().split("T")[0];
    const maxDateStr = maxDate.toISOString().split("T")[0];
    this.#dataFromElement.min = minDateStr;
    this.#dateToElement.min = minDateStr;
    this.#dataFromElement.max = maxDateStr;
    this.#dateToElement.max = maxDateStr
   }
}
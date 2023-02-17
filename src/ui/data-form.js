const FORM_ID="data-form-id";
const DATE_FROM_ID ="date-from-id";
const DATE_TO_ID ="date-to-id";

export class DataForm{
#formElement;
#dateFromElement;
#dateToElement;
constructor(parentId, maxDays)
{
    const parentElement = document.getElementById(parentId);
    this.#fillForm(parentElement);
    this.#formElement = document.getElementById(FORM_ID);
    this.#dateToElement = document.getElementById( DATE_TO_ID);
    this.#dateFromElement = document.getElementById(DATE_FROM_ID);
    this.#setMinMaxDates(maxDays);
}
#fillForm(parentElement)
{
   parentElement.innerHTML = 
   `<form_id="${FORM_ID}">
   <input type="date" id="${DATE_FROM_ID}">
   <input type="date" id="${DATE_TO_ID}">
   </form>`
}
#setMinMaxDates(maxDays)
{
    const current = new Date();
    const maxDayOfMonth = current.getDate()+maxDays;
    const maxDate = new Date()
    maxDate.setDate(maxDayOfMonth);
    const minDateStr = current.toISOString().split("T")[0];
    const maxDateStr = maxDate.toISOString().split("T")[0];
    this.#dateFromElement.min = minDateStr;
    this.#dateFromElement.max = maxDateStr;
    this.#dateToElement.min = minDateStr;
    this.#dateToElement.max = maxDateStr;

}


}
Footer

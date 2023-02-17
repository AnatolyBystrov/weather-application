export function reset()
{
const showTable = document.getElementById("table");
showTable.style.display = 'none';
document.getElementById("select-city").value ="";
document.getElementById("date-from-id").value ="";;
document.getElementById("date-to-id").value ="";
document.getElementById("select-from-hour").value ="";
document.getElementById("select-to-hour").value ="";
}
const currentMonthText = document.getElementById("currentMonth");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

const months = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function generateCalendar(date) {
    currentMonthText.textContent = months[date.getMonth()] + " " + date.getFullYear();
    calendarGrid.innerHTML = "";

    // Crea los encabezados de los días de la semana
    for (let day of daysOfWeek) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    }

    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Rellena los días previos al primer día del mes
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day", "empty");
        calendarGrid.appendChild(emptyDay);
    }

    // Rellena los días del mes
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    }
}
let currentMonth = new Date();

function changeMonth(delta) {
    currentMonth.setMonth(currentMonth.getMonth() + delta);
    generateCalendar(currentMonth);
}

prevMonthButton.addEventListener('click', () => changeMonth(-1));
nextMonthButton.addEventListener('click', () => changeMonth(1));

generateCalendar(currentMonth);



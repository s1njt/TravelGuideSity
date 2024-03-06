const prevButtonCalendar = document.querySelector(".calendar-prev");
const nextButtonCalendar = document.querySelector(".calendar-next");
const datesContainerCalendar = document.querySelector(".calendar-dates");
const calendarLabel = document.querySelector('.calendar-label');

let startDateCalendar = null;
let endDateCalendar = null;
const todayCalendar = new Date();
let displayedMonth = new Date();
const daysCalendar = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const monthsCalendar = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const populateCalendarDates = (startDate, monthOffset) => {
  datesContainerCalendar.innerHTML = "";
  const todayCalendar = new Date();
  
  const startOfMonth = new Date(
    todayCalendar.getFullYear(),
    todayCalendar.getMonth() + monthOffset,
    1
  );

  const monthFormatter = new Intl.DateTimeFormat('ru', { month: 'long' });
  const monthName = monthFormatter.format(startOfMonth);

  updateCalendarLabel(`${monthName} ${startOfMonth.getFullYear()}`);

  for (let i = 0; i < 31; i++) {
    const date = new Date(startOfMonth);
    date.setDate(startOfMonth.getDate() + i);
    const day = daysCalendar[date.getDay()];
    const number = date.getDate();
    const dateElement = document.createElement("div");
    dateElement.classList.add("calendar-date");
    dateElement.innerText = `${day} ${number}`;

    
    if (startDate && date.getTime() === startDate.getTime()) {
      dateElement.classList.add("active");
    }
    if (day === "ВС" || day === "СБ") {
      dateElement.classList.add("red-text");
    }
    datesContainerCalendar.appendChild(dateElement);

    dateElement.addEventListener("click", () => {
      const activeDate = datesContainerCalendar.querySelector(
        ".calendar-date.active"
      );
      if (activeDate) {
        activeDate.classList.remove("active");
      }
      if (!startDateCalendar || date < startDateCalendar) {
        startDateCalendar = date;
      } else {
        startDateCalendar = null;
      }
      endDateCalendar = null;
      dateElement.classList.add("active");


     

        var sites = [
          'html/meroprit1.html',
          'html/meroprit2.html',
          'html/meroprit3.html',
          'html/meroprit4.html',
          'html/meroprit5.html',
          'html/meroprit6.html',
          'html/meroprit7.html',
          'html/meroprit8.html'
          
        ];
      
        // Получаем случайный индекс
        var randomIndex = Math.floor(Math.random() * sites.length);
      
        // Открываем случайный сайт
        window.open(sites[randomIndex], '_blank');

      
      
    });
  }
};

let monthOffsetCalendar = 0;

const updateCalendarLabel = (monthYearText) => {
  const capitalizedText = monthYearText.toUpperCase();
  calendarLabel.innerText = capitalizedText;
};

prevButtonCalendar.addEventListener('click', () => {
  if (monthOffsetCalendar === -todayCalendar.getMonth()) {
    monthOffsetCalendar = 11;
  } else {
    monthOffsetCalendar--;
  }
  populateCalendarDates(startDateCalendar, monthOffsetCalendar);
});

nextButtonCalendar.addEventListener('click', () => {
  if (monthOffsetCalendar === 11) {
    monthOffsetCalendar = -todayCalendar.getMonth();
  } else {
    monthOffsetCalendar++;
  }
  populateCalendarDates(startDateCalendar, monthOffsetCalendar);
});

populateCalendarDates(null, monthOffsetCalendar);

document.addEventListener('DOMContentLoaded', function() {
  var calendarDateElement = document.querySelector('.calendar-date');
  
  if (calendarDateElement) {
      calendarDateElement.addEventListener('click', function() {
          window.open('https://ru.wikipedia.org/wiki/Вторник_13');
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarDateElement = document.querySelector('.calendar-date');
  
  if (calendarDateElement) {
      calendarDateElement.addEventListener('click', function() {
          window.open('https://ru.wikipedia.org/wiki/Вторник_13');
      });
  }
});
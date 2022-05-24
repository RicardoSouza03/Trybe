function createDaysOfTheWeek() {
  const weekDays = [
    "Domingueira",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábadão",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const daysMonth = document.createElement("li");
    daysMonth.innerHTML = day;
    daysMonth.className = "day";
    daysList.appendChild(daysMonth);
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      //razão de 7 dps de começar no 5
      daysMonth.classList.add("friday");
    }
    if (index === 25 || index === 26 || index === 32) {
      daysMonth.classList.add("holiday");
    }
  }
}

createDays();

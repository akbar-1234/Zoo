var elements = document.querySelector(".c-calendar-dates span");

// Bugungi kun
var today = new Date().getDate();

// Elementlarni solishtirish
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var elementDate = parseInt(element.textContent);
  console.log(elementDate);

  if (elementDate < today) {
    element.classList.add("is-NG is-nosale is-weekday");
  } else {
    element.classList.add("is-OK is-saturday is-sale");
  }
}



var aylantirish1 = document.getElementById("aylantirish1");
aylantirish1.addEventListener("click", function () {
  is_acc(document.querySelector("#aylantirish").innerHTML * 1 + 1);
});
var aylantirish1 = document.getElementById("aylantirish2");
aylantirish1.addEventListener("click", function () {
  if (document.querySelector("#aylantirish").innerHTML) {
    is_acc(document.querySelector("#aylantirish").innerHTML * 1 - 1);
  }
});


  var data = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];




var this_date = new Date();
var getMonth = this_date.getMonth();
var num1 = getMonth;
var num2 = getMonth + 5;
var this_months = data.slice(num1, num2);
var currentYear1 = this_date.getFullYear();

this_months.map((item, key) => {
  document.querySelector(".swiper-wrapper").innerHTML += `
    <div class="swiper-slide" onclick='is_acc(${key})'> <span class="m-title">${item}</span><a></a></div>
    `;
});

function updateCalendar(selectedMonthIndex = 0) {
  var calendarElement = document.getElementById("calendar");
  calendarElement.innerHTML = "";

  var today = new Date();
  var currentDay = today.getDate();
  var currentMonth = today.getMonth() + selectedMonthIndex + 1;
  var currentYear = today.getFullYear();



    var calendarHTML = '<table class="m-calendar" id="calendar-table">';
  calendarHTML += "<thead>";
  calendarHTML += "<tr>";
  calendarHTML += '<th class="m-sun">Sun</th>';
  calendarHTML += "<th>Mon</th>";
  calendarHTML += "<th>Tue</th>";
  calendarHTML += "<th>Wed</th>";
  calendarHTML += "<th>Thu</th>";
  calendarHTML += "<th>Fri</th>";
  calendarHTML += '<th class="m-sat">Sat</th>';
  calendarHTML += "</tr>";
  calendarHTML += "</thead>";
  calendarHTML += "<tbody>";
  
  

  var totalDays = new Date(currentYear, currentMonth, 0).getDate();

  var firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
  var dayOfWeek = 0;

  calendarHTML += "<tr>";
  for (var i = 0; i < firstDayOfMonth; i++) {
    calendarHTML += "<td></td>";
    dayOfWeek++;
  }

  for (var i = 1; i <= totalDays; i++) {
    var dayClass = "";
    if (
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() + 1 &&
      i < currentDay
    ) {
      dayClass = " smal_today";
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
      calendarHTML += `<td onclick="pasport(${dayOfWeek},${i},${currentYear},${currentMonth})" class="is-OK is-weekday is-sale hello_uzb" data-date="20240221" data-stock="is-sale" data-price="8400" id="hello_uzb">
      <a class="c-calendar-dates">
        <span>${i}</span>
      </a>
    </td>`;
    } else {
      calendarHTML += `<td onclick="pasport1(${dayOfWeek},${i},${currentYear},${currentMonth})" class="is-OK is-weekday is-sale hello_uzb" data-date="20240221" data-stock="is-sale" data-price="8400" id="hello_uzb">
      <a class="c-calendar-dates">
        <span>${i}</span>
      </a>
    </td>`;
    }

    if (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() &&
        currentMonth < today.getMonth() + 1) ||
      (currentYear === today.getFullYear() &&
        currentMonth === today.getMonth() + 1 &&
        i < currentDay)
    ) {
      calendarHTML += `<td class="is-NG is-nosale is-weekday hello_uzb" data-date="20240209" data-stock="is-nosale" data-price="" id="hello_uzb">
<a class="c-calendar-dates">
  <span>${i}</span>
</a>
</td>`;
    }

    dayOfWeek++;
    if (dayOfWeek === 7) {
      calendarHTML += "</tr>";
      if (i < totalDays) {
        calendarHTML += "<tr>";
      }
      dayOfWeek = 0;
    }
  }

  calendarHTML += "</tbody>";
  calendarHTML += "</table>";

  calendarElement.innerHTML = calendarHTML;
}

function is_acc(key) {
  document.querySelector("#aylantirish").innerHTML = key;
  var list = document.querySelectorAll(".swiper-slide");
  list.forEach((item) => item.classList.remove("is-active"));
  list[key].classList.add("is-active");
  updateCalendar(key);
}

function selectDay() {
  var calendarDays = document.querySelectorAll("#calendar .is-OK");
  calendarDays.forEach(function (day) {
    day.addEventListener("click", function () {
      calendarDays.forEach(function (day) {
        day.classList.remove("selected-day");
      });
      this.classList.add("selected-day");
    });
  });
}


updateCalendar();
selectDay();

function getDayOfWeek(dateString) {
  var daysOfWeek = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  var date = new Date(dateString);
  var dayOfWeek = date.getDay();
  return daysOfWeek[dayOfWeek];
}

var today = new Date();
var dayOfWeek = getDayOfWeek(today);

  function pasport(dayOfWeek, i, currentYear, currentMonth) {
    var daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var daysMont = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var weeks = daysWeek.slice(dayOfWeek, dayOfWeek + 1);
    var months = daysMont.slice(currentMonth - 1, currentMonth);
   
      localStorage.setItem('select_data', `${months} ${i}, ${currentYear}`)
      console.log(`${months} ${i}, ${currentYear}`);
    }

    function pasport1(dayOfWeek, i, currentYear, currentMonth) {
      var daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var daysMont = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var weeks = daysWeek.slice(dayOfWeek, dayOfWeek + 1);
      var months = daysMont.slice(currentMonth - 1, currentMonth);
      document.querySelector(
        ".c-calendar-balloon-date"
      ).innerHTML = `${months} ${i}, ${currentYear}`;
      
      
      localStorage.setItem('select_data', `${months} ${i}, ${currentYear}`)
      console.log(`${months} ${i}, ${currentYear}`);
      
      selectDay();

      for (let a = 0; a < document.querySelectorAll("#calendar .is-OK").length; a++) {
        document.querySelectorAll("#calendar .is-OK")[i-1].classList.add("selected-day")
        
      }
    }







  //Get The Result on Button Click
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", validateField);

  function validateField(e) {
    e.preventDefault();

   

    // variable declaration
    let currentCycleStartDate = document.getElementById("date-input");
    const shortestCycle = document.getElementById("short-cycle-option");
    const longestCycle = document.getElementById("long-cycle-option");

    // Get date input value
    let dateInput = currentCycleStartDate.value;
    console.log(dateInput);

    // Check if the date field is selected
    if (dateInput !== "") {
      submitBtn.disabled = true;

     submitBtn.classList.add("hidden");

      const calendarWrapper = document.querySelector('.wrapper')
      calendarWrapper.style.display = "block";

      // Get Shortest Cycle value
      const shortCycle = shortestCycle.value;

      //Get the longest cycle value
      const longCycle = longestCycle.value;

      // Get the Shortest Menstrual Cycle
      const getShortCycle = shortCycle - 18;
      console.log(getShortCycle);

      // Parse dateInput into a Date object
      const selectedDate = new Date(dateInput);

      // Get the first fertile days
      const firstFertileDay = selectedDate.getDate() + (getShortCycle - 1);
      console.log("first fertile day:", firstFertileDay);

      // Get the longest Menstrual Cycle
      const getLongCycle = longCycle - 11;
      console.log(getLongCycle);

      // Get the last fertile days
      const lastFertileDay = selectedDate.getDate() + (getLongCycle - 1);
      console.log("last fertile day:", lastFertileDay);

      // Show the current date in this format =>  August 16, 2023 07:15:05 PM
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      const currentDate = new Date();
      const formattedDate = new Intl.DateTimeFormat("en-UK", options).format(
        currentDate
      );

      // Display the Result on The Browser
      const resultContent = document.getElementById("result-content");
      resultContent.innerHTML += ` 
                             <h2 style="font-weight: 300;">Preview Results - Safe Days Calculator</h2b>
                             <h4 style="margin-top: 2rem">Date: <span style="font-weight: 300;">${formattedDate}</span></h4>  
                             <div class="inputs">
                             <h3>Your Inputs: </h3>
                             <p>Your First day of your last menstrual period (LMP): ${dateInput}</p>

                             <p>Your Shortest Cycle Length: ${shortCycle}</p>
                             <p>Your Shortest Cycle Length: ${longCycle}</p>
                             </div>
                            `;
      // Set date value to empty after displaying the result

      // You result text tag
      const result = document.getElementById("your-result");
      const yourResult = document.createElement("h3");
      yourResult.textContent = "Your Result";
      result.appendChild(yourResult);


        // const calendarContainer = document.querySelector(".calendar-container");
        

        // for(let day = 1; day < 31; day++){

        //   let name = ""
        //   if(day < 7) {
        //     const dayName = getDayName(day);
        //     name = `<div class="name">${dayName}</div>`
        //   }

        //   calendarContainer.insertAdjacentHTML("beforeend", `<div
        //   class="day">${name}${day}</div>`);
        // }




const daysTag = document.querySelector(".days"),
currDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];



   function renderCalendar() {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      // creating li of all days of current month
      // adding active class to li if the current day, month, and year matched
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";

      // Calculate the day number within the 29-day cycle
      let dayNumber = (i - firstFertileDay + 29) % 29;

      // Determine the textContent based on the day number
      let textContent = "";
      if (dayNumber < 0) {
        // Handle days before the safe period
        textContent = "safe";
      } else if (dayNumber === 0) {
        // Handle the 29th day, make the textContent empty
        textContent = "";
      } else if (dayNumber <= lastFertileDay - firstFertileDay) {
        // Handle days within the unsafe period
        textContent = "unsafe";
      } else {
        // Handle days after the unsafe period
        textContent = "safe";
      }

      //  Add a text-content of safe and unsafe to each day
      //    let textContent = "";

      // if (i < selectedDate.getDate()) {
      //   textContent = "";
      // } else if (i < firstFertileDay) {
      //   textContent = "safe";
      // } else if (i <= lastFertileDay) {
      //   textContent = "unsafe";
      // } else if(i > lastFertileDay) {
      //   textContent = "safe";
      // }
      //  else if( selectedDate.getDate() && i === 29) {
      //   textContent = ""
      // }

      // else {
      //   // Calculate the day difference between i and selectedDate
      //   // const dayDifference = i - selectedDate.getDate();

      //   // // Calculate the number of 31-day cycles that have passed
      //   // const fullCycles = Math.floor(dayDifference / 31);
      //   // console.log(fullCycles)

      //   // // Calculate the day within the current 31-day cycle
      //   // const dayWithinCycle = dayDifference % 31;

      //   // // Check if we're within the 31-day cycle limit
      //   // if (dayWithinCycle < 31) {
      //   //   textContent = "safe";
      //   // } else {
      //   //   textContent = "";
      //   // }
      // }

      //  add displayIcon to the safe and unsafe day
      let displayIcon = "";
      if (i < selectedDate.getDate()) {
        textContent = "";
      } else if (i < firstFertileDay) {
        displayIcon = `<i class='bx bx-check'></i>`;
      } else if (i <= lastFertileDay) {
        displayIcon = `<i  class='bx bx-x' ></i>`;
      } else {
        displayIcon = `<i class='bx bx-check'></i>`;
      }

      liTag += `<li class="${isToday}">
        ${i}
        <p class=${
          textContent === "safe" ? "safe-days" : "unsafe-days"
        }>${textContent}</p>
        <p>${displayIcon}</p>
        </li>`;
    }
          
    for (let i = lastDayofMonth; i < 6; i++) { 
      // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach((icon) => {
  // getting prev and next icons
  icon.addEventListener("click", () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); 
  });
});
 



    //   const presentDate = new Date();

    //   // Get the current month and year
    //   const currentMonth = presentDate.getMonth();
    //   const currentYear = presentDate.getFullYear();

    //   // Create an array of month names
    //   const monthNames = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ];

      
    //   // Create an array of day names
    //   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //   // Create a table th element for the days of the week and display on the browser
    //   const daysInweekContainer = document.getElementById('days-in-week')
    //   const daysInweek = document.createElement('th');
    //   daysInweek.textContent = dayNames;
    //   daysInweek.className = ''
    //   daysInweekContainer.appendChild(daysInweek);


    //   // const calendarContainer = document.getElementById('calendar-container')
    //   // calendarContainer.innerHTML = daysInweekContainer
    //   // display the days of the week on the browser
      

    //   // Get the first day of the month
    //   const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    //   const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

    //   // Get the number of days in the current month
    //   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      
    // //  const calendarHeader = document.getElementById("calendar-header");
    // //  calendarHeader.innerHTML = daysInMonth;

    //   // Display the month and year in the calendar header
    //   document.getElementById(
    //     "calendar-month-year"
    //   ).textContent = `${monthNames[currentMonth]} ${currentYear}`;

    //   // Populate the calendar table
    //   const calendarBody = document.getElementById("calendar-body");
    //   let dayCounter = 1;

    //   for (let i = 0; i < 6; i++) {
    //     // Assume a maximum of 6 rows in the calendar
    //     const row = document.createElement("tr");

    //     for (let j = 0; j < 7; j++) {
    //       const cell = document.createElement("td");

    //       if (i === 0 && j < firstDayOfWeek) {
    //         cell.textContent = ""; // Empty cell for days before the first day of the month
    //       } else if (dayCounter <= daysInMonth) {
    //         cell.textContent = dayCounter;

    //         if (
    //           currentDate.getDate() === dayCounter &&
    //           currentDate.getMonth() === currentMonth
    //         ) {
    //           cell.className = "current-date"; // Highlight the current date
    //         }

    //         dayCounter++;
    //       } else {
    //         cell.textContent = ""; // Empty cell for days after the last day of the month
    //       }
  
    //       row.appendChild(cell);
    //     }
        
    //     calendarBody.appendChild(row);

       // Display the calendar User interface on the Page
      //  Get the current date
//   const presentDate = new Date();

// // Get the current month and year
// const currentMonth = presentDate.getMonth();
// const currentYear = presentDate.getFullYear();

// // Get the days of the week
// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// // Get the number of days in the current month
// const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// // Get the day of the week for the first day of the month (0 for Sunday, 1 for Monday, etc.)
// const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

// const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

// // Create the calendar HTML
// const calendarContainer = document.getElementById("calendar-container");
// const month = document.createElement("div");
// month.textContent = `${presentDate.toLocaleString("default", {
//   month: "long",
// })} ${currentYear}`;
// month.className = "current-month";
// calendarContainer.appendChild(month);


// Add the day names (e.g., Sun, Mon, etc.)
// for (const day of daysOfWeek) {
//   const dayElement = document.createElement("li");
//   dayElement.textContent = day;
//   dayElement.className = "week-days";
//   calendarContainer.appendChild(dayElement);
// }

// const calendarContent = document.getElementById("calendar-content");

// for (let i = 0; i < firstDayOfMonth; i++) {
//   const emptyCell = document.createElement("li");
//   emptyCell.textContent = "";
//   emptyCell.className = "empty-cell"; // Apply a class for styling
//   calendarContent.appendChild(emptyCell);
// }

// Create cells for the days of the month
// for (let day = 1; day <= daysInMonth; day++) {
//   const dateElement = document.createElement("li");
//   dateElement.textContent = day;
//   dateElement.className = "current-date";
//   calendarContent.appendChild(dateElement);

// With this code, empty cells are added for the days before the first day of the month, and the days of the month are displayed correctly with respect to the days of the week.







          //  const dayInCycle = day - selectedDate.getDate();
          // Add a text content to each day
          // let textContent = "";
          // if (day < selectedDate.getDate()) {
          //   textContent = "";
          // } else if (day < firstFertileDay) {
          //   textContent = "safe";
          // } else if (day <= lastFertileDay) {
          //   textContent = "unsafe";
          // } else {
          //   textContent = "safe";
          // }

          // let textContent = "";

          // if (dayCount < 30) {
          //   if (dayInCycle === 0) {
          //     textContent = "safe"; // First fertile day is the first safe day
          //   } else if (day < firstFertileDay) {
          //     textContent = "unsafe";
          //   }
          // }

        //   const textElement = document.createElement("p");
        //   textElement.textContent = textContent.toLowerCase();
        //   textElement.className = `${
        //     textContent === "safe" ? "safe-days" : "unsafe-days"
        //   }`;
        //   dateElement.appendChild(textElement);

        //   let displayIcon = "";
        //   if (day < firstFertileDay) {
        //     displayIcon = `<i class='bx bx-check'></i>`;
        //   } else if (day <= lastFertileDay) {
        //     displayIcon = `<i  class='bx bx-x' ></i>`;
        //   } else {
        //     displayIcon = `<i class='bx bx-check'></i>`;
        //   }
        //   // Display the Icon on the browser
        //   const addIcon = document.createElement("span");
        //   addIcon.innerHTML = displayIcon;
        //   dateElement.appendChild(addIcon);
        // }
        //   if(selectedDate.getDate() > 15){

        //     // Get next month
        //     let nextMonth = new Date(selectedDate);
        //     nextMonth.setMonth(nextMonth.getMonth() + 1);
        //     const currentYear = nextMonth.getFullYear();

        //     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        //     const daysInNextMonth = new Date(
        //       nextMonth.getFullYear(),
        //       nextMonth.getMonth() + 1,
        //       0
        //     ).getDate();

        // const nextCalendar = document.getElementById("next-month-calendar");
        // const newMonth = document.createElement("div");
        // newMonth.textContent = `${nextMonth.toLocaleString("default", {
        //   month: "long",
        // })} ${currentYear}`;
        // newMonth.className = "new-month";
        // nextCalendar.appendChild(newMonth);

        // for (const day of daysOfWeek) {
        //   const dayElement = document.createElement("li");
        //   dayElement.textContent = day;
        //   dayElement.className = "new-month-weekdays";
        //   nextCalendar.appendChild(dayElement);
        // }

        // for (let day = 1; day <= daysInNextMonth; day++) {
        //   const dateElement = document.createElement("li");
        //   dateElement.textContent = day;
        //   dateElement.className = "new-month-date";
        //   nextCalendar.appendChild(dateElement)

        //   }

        
} 
}  
    

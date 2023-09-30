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
                             <p>Your Longest Cycle Length: ${longCycle}</p>
                             </div>
                            `;
      // Set date value to empty after displaying the result

      // You result text tag
      const result = document.getElementById("your-result");
      const yourResult = document.createElement("h3");
      yourResult.textContent = "Your Result";
      result.appendChild(yourResult)

// Rendering the Calendar

const daysTag = document.querySelector(".days"),
currDate = document.querySelector(".current-date")

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

 function renderCalendar(){
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), 
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    const fertileDays = 29;
    const middleFertileDay = Math.floor(fertileDays / 2);

    const newfirstFertileDay = selectedDate.getDate() - middleFertileDay;
    const newlastFertileDay = selectedDate.getDate() + (fertileDays - middleFertileDay) - 1;

    console.log("first fertile day:", newfirstFertileDay);
    console.log("last fertile day:", newlastFertileDay);

  //   const resultData = 29 - (selectedDate.getDate() + lastFertileDay + firstFertileDay);
  //   console.log(resultData);
  //  if(resultData){
  //   renderNextMonthCalendar(currYear, currMonth);
  //  }

    for (let i = 1; i <= lastDateofMonth; i++) {
      // creating li of all days of current month
      // adding active class to li if the current day, month, and year matched
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";

  
      // Determine the textContent based on the day number
      //  Add a text-content of safe and unsafe to each day
      // let dayCounter = 1
  // let textContent = "";

  //       if (i < selectedDate.getDate()) {
  //           textContent = "";
  //       } else if (i < selectedDate.getDate() + 29) {
  //           textContent = dayCounter <= selectedDate.getDate() + 14 ? "safe" : "unsafe";
  //       } else {
  //           textContent = "";
        




         let textContent = "";

      if (i < selectedDate.getDate()) {
        textContent = "";
      } else if (i < firstFertileDay) {
        textContent = "safe";
      } else if (i <= lastFertileDay) {
        textContent = "unsafe";
      } else if (i > lastFertileDay + lastDateofMonth) {
        textContent = "safe";
      }
 
      

        // let monthToRender = currMonth; // Initialize the month to render
  // let monthToRender = currMonth; // Initialize the month to render
  // let yearToRender = currYear; // Initialize the year to render

  // // Check if selectedDate is greater than 15
  // if (selectedDate.getDate() > 15) {
  //   // If selectedDate is greater than 15, set the next month to render
  //   monthToRender += 1;

  //   // Check if the next month exceeds 11 (December)
  //   if (monthToRender > 11) {
  //     monthToRender = 0; // January (0) is followed by February (1), and so on.
  //     yearToRender += 1; // Increment the year if necessary
  //   }
  // }

  // // Update currMonth and currYear to match the month and year to render
  // currMonth = monthToRender;
  // currYear = yearToRender;

  // // Calculate the starting day within the 29-day cycle
  // let startDay = date.getDate() - firstFertileDay + 1;

  // for (let i = 1; i <= lastDateofMonth; i++) {
  // //   // Calculate the day number within the 29-day cycle
  //   let dayNumber = (startDay + i - 1) % 29;

  // //   // Determine the textContent based on the day number
  // //   let textContent = "";
  //    if (i < date.getDate()) {
  //     // If i is less than the selected date, textContent is empty
  //     textContent = "";
  //   } else if (i < firstFertileDay) {
  //     // If i is less than firstFertileDay, textContent is "safe"
  //     textContent = "safe";
  //   } else if (i <= lastFertileDay) {
  //     // If i is less than or equal to lastFertileDay, textContent is "unsafe"
  //     textContent = "unsafe";
  //   } else if (i <= lastFertileDay + 10) {
  //     // For the ten days following lastFertileDay, textContent is "safe"
  //     textContent = "safe";
  //   } else {
  //     // After the ten-day period, textContent is empty
  //     textContent = "";
  //   }


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
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }
      currDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
      daysTag.innerHTML = liTag;
    }
renderCalendar();


function renderNextMonthCalendar(year, month) {
  const nextMonthDaysTag = document.querySelector(".next-month-days")
  const nextCurrDate = document.querySelector(".next-month-current-date");
  const nextCalendar = document.querySelector(".next-calendar");

  nextCalendar.style.display = 'block'

  let nextMonth = month + 1;
  let nextYear = year;

  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear++;
  }

  let firstDayOfNextMonth = new Date(nextYear, nextMonth, 1).getDay();
  let lastDateOfNextMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

  let liTag = "";

  for (let i = firstDayOfNextMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfNextMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfNextMonth; i++) {
    let isToday =
      i === date.getDate() &&
      nextMonth === date.getMonth() &&
      nextYear === date.getFullYear()
        ? "active"
        : "";

    let textContent = "";

    // if (i < selectedDate.getDate()) {
    //   textContent = "";
    // } else if (i < firstFertileDay) {
    //   textContent = "safe";
    // } else if (i <= lastFertileDay) {
    //   textContent = "unsafe";
    // } else {
    //   textContent = "";
    // }


 
    let displayIcon = "";
    // if (i < selectedDate.getDate()) {
    //   textContent = "";
    // } else if (i < firstFertileDay) {
    //   displayIcon = `<i class='bx bx-check'></i>`;
    // } else if (i <= lastFertileDay) {
    //   displayIcon = `<i class='bx bx-x'></i>`;
    // } else {
    //   displayIcon = `<i class='bx bx-check'></i>`;
    // }

    liTag += `<li class="${isToday}">
            ${i}
            <p class=${
              textContent === "safe" ? "safe-days" : "unsafe-days"
            }>${textContent}</p>
            <p>${displayIcon}</p>
            </li>`;
  }


  // Create a new ul element for the next month's calendar
  const nextMonthUL = document.createElement("ul");
  nextMonthUL.className = "next-month-ul";
  nextMonthUL.innerHTML = liTag;

  // Append the next month's calendar to the daysTag
  nextMonthDaysTag.appendChild(nextMonthUL);

  nextCurrDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  nextMonthDaysTag.innerHTML = liTag;
}

// Determine when to render the calendars
// if (selectedDate.getDate() > 15) {
//   // Render both current and next month's calendars
//   renderCalendar(currYear, currMonth);
//   renderNextMonthCalendar(currYear, currMonth);
// } else {
//   // Render only the current month's calendar
//   renderCalendar(currYear, currMonth);
// }
  
    function findNumberToAddToGet29(givenNumber) {
      // Calculate the number to add to givenNumber to get 29
      const numberToAdd = 29 - givenNumber;

      const result =  givenNumber + numberToAdd
      result === 29? console.log('yes') : console.log('no')
    }
    findNumberToAddToGet29(2)
    // Example usage:
    // const givenNumber1 = 10;
    // const result1 = findNumberToAddToGet29(givenNumber1);
    // console.log(`For ${givenNumber1}, add ${result1} to get 29.`);

    // const givenNumber2 = 15;
    // const result2 = findNumberToAddToGet29(givenNumber2);
    // console.log(`For ${givenNumber2}, add ${result2} to get 29.`);

  } 
}
  
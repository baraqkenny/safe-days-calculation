// variable declaration
const dateValidation = document.getElementById("date-input");
const shortCycleOption = document.getElementById("short-cycle-option");
const longCycleOption = document.getElementById("long-cycle-option");

// Get The Value of the Date Input Field
dateValidation.addEventListener("input", () => {
  const dateValidationField = dateValidation.value;
  return dateValidationField;
});

// Get The Value of the Short Cycle Option
shortCycleOption.addEventListener("change", () => {
  const selectedInputField = shortCycleOption.value;
  return selectedInputField;
});

// Get The Value of The Long Cycle Option
longCycleOption.addEventListener("change", () => {
  const selectedInputFieldTwo = longCycleOption.value;
  return selectedInputFieldTwo;
});

//Get The Result on Button Click

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateField);

function validateField(e) {
      e.preventDefault();
  // Check if the Date, Short Cycle and Long Cycle Field is Not Empty
    if (
      dateValidation.value !== "" &&
      shortCycleOption.value !== "" &&
      longCycleOption.value !== ""
    ) {
      // const date = new Date(dateValidation.value);
      // const shortCycle = new Date(date);
      // const longCycle = new Date(date);

      // shortCycle.setDate(shortCycle.getDate() + (shortCycleOption.value - 18));
      // longCycle.setDate(longCycle.getDate() + (longCycleOption.value - 10));

      // const unsafeDays = Math.abs(
      //   (longCycle - shortCycle) / (1000 * 60 * 60 * 24)
      // );
      // const safeDays = 30 - unsafeDays;

      const currDate = new Date();
      const firstDayOfLastPeriod = new Date(dateValidation.value);
      firstDayOfLastPeriod.setDate(currDate.getDate() - shortestCycle);
      const x = new Date(firstDayOfLastPeriod);
      x.setDate(x.getDate() + 18);

      const y = new Date(firstDayOfLastPeriod);
      y.setDate(y.getDate() + (longestCycle - 10));

      // Check if a date is between X and Y
      function isUnsafeDay(date) {
        return date >= x && date <= y;
      }

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

      console.log(`Unsafe Days: ${unsafeDays}`);
      console.log(`Safe Days: ${safeDays}`);

      // Display the Result on The Browser
      const resultContent = document.getElementById("result-content");
      resultContent.innerHTML += ` 
                             <h2 style="font-weight: 300;">Preview Results - Safe Days Calculator</h2b>
                             <h4 style="margin-top: 2rem">Date: <span style="font-weight: 300;">${formattedDate}</span></h4>  
                             <div class="inputs">
                             <h3>Your Inputs: </h3>
                             <p>Your First day of your last menstrual period (LMP): ${dateValidation.value}</p>
                             <p>Your Shortest Cycle Length: ${shortCycleOption.value}</p>
                             <p>Your Shortest Cycle Length: ${longCycleOption.value}</p>
                             </div>
                            `;
      // Set date value to empty after displaying the result
      if (resultContent) {
        dateValidation.value = "";
      }

      // Display the calendar User interface on the Page for a a better User Experience
      // Get the current date
      const presentDate = new Date();

      //   // Get the current month and year
      const currentMonth = presentDate.getMonth();
      const currentYear = presentDate.getFullYear();

      //   // Get the days of the week
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      //   // Get the number of days in the current month
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // You result text tag
      const result = document.getElementById("your-result");
      const yourResult = document.createElement("h3");
      yourResult.textContent = "Your Result";
      result.appendChild(yourResult);

      // Create the calendar HTML
      const calendarContainer = document.getElementById("calendar-container");
      const month = document.createElement("div");
      month.textContent = `${presentDate.toLocaleString("default", {
        month: "long",
      })} ${currentYear}`;
      month.className = "current-month";
      calendarContainer.appendChild(month);

      for (const day of daysOfWeek) {
        const dayElement = document.createElement("li");
        dayElement.textContent = day;
        dayElement.className = "week-days";
        calendarContainer.appendChild(dayElement);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement("li");
        dateElement.textContent = day;
        dateElement.className = "current-date";
        calendarContainer.appendChild(dateElement);

        // Add text content to each days
          const daysBetweenSafeAndUnsafe = daysInMonth - unsafeDays; 
          
          const textElement = document.createElement("p");
          textElement.textContent = `${
            daysBetweenSafeAndUnsafe ? "safe day" : "unsafe"
          }`;
          textElement.className = "safe";
          dateElement.appendChild(textElement);

        
      }
    }
  }





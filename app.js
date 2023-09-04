
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

        // Add a text content to each day
        let textContent = "";
        if (day < firstFertileDay) {
          textContent = "safe";
        } else if (day <= lastFertileDay) {
          textContent = "unsafe";
        } else {
          textContent = "safe";
        }
        // <i class="bx bx-x"></i>;
        // <i class="bx bx-check"></i>;
     const textElement = document.createElement("p");
     textElement.textContent = textContent.toLowerCase();
     textElement.className = `${textContent === "safe" ? "safe-days" : "unsafe-days"}`;
     dateElement.appendChild(textElement);


        let displayIcon = "";
        if (day < firstFertileDay) {
          displayIcon = `<i class='bx bx-check'></i>`;
        } else if (day <= lastFertileDay) {
          displayIcon = `<i  class='bx bx-x' ></i>`;
        } else {
          displayIcon = `<i class='bx bx-check'></i>`;
        }

        const addIcon = document.createElement("span");
        addIcon.innerHTML = displayIcon;
        dateElement.appendChild(addIcon);

      }
    }
  }



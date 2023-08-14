// variable declaration
const dateValidation = document.getElementById("date-input");
const selectedInput = document.getElementById("selected-input");
const selectedInputTwo = document.getElementById("selected-input-two");

// Get The Value of the Date Input Field
dateValidation.addEventListener("input", () => {
  const dateValidationField = dateValidation.value;
  return dateValidationField;
});

// Get The Value of the Short Cycle Option
selectedInput.addEventListener("change", () => {
  const selectedInputField = selectedInput.value;
  return selectedInputField;
});

// Get The Value of The Long Cycle Option
selectedInputTwo.addEventListener("change", () => {
  const selectedInputFieldTwo = selectedInputTwo.value;
  return selectedInputFieldTwo;
});

//Get The Result on Button Click

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateField);

function validateField(e) {
      e.preventDefault();
  // Check if the Date, Short Cycle and Long Cycle Field is Not Empty
    if(dateValidation.value  !== "" && selectedInput.value !== "" && selectedInputTwo.value !== ""){
      const date = new Date(dateValidation.value);
      const shortCycle = new Date(date);
      const longCycle = new Date(date);

      shortCycle.setDate(shortCycle.getDate() + (selectedInput.value - 18));
      longCycle.setDate(longCycle.getDate() + (selectedInputTwo.value - 10));

      const unsafeDays = Math.abs((longCycle - shortCycle) / (1000 * 60 * 60 * 24));
      const safeDays = 30 - unsafeDays;

      console.log(`Unsafe Days: ${unsafeDays}`);
      console.log(`Safe Days: ${safeDays}`);
      const resultBox = document.querySelector('.result-box');
      resultBox.style.display = 'block';
      resultBox.innerHTML += ` 
                              <p>Unsafe Days: ${unsafeDays}</p>   
                              <p>Safe Days: ${safeDays}</p>    
                            `;
    }
}
   




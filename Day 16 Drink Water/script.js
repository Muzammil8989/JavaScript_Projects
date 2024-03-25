// Select all elements with the class 'cup-small'
const smallCups = document.querySelectorAll(".cup-small");

// Select the elements with the ids 'percentage' and 'remained'
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");

// Add a click event listener to each small cup
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

// Function to handle the highlighting of cups
function highlightCups(idx) {
  // Adjust the index to handle clicking on a cup that is already full
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  

  // Loop through all small cups and add or remove the 'full' class based on the index
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  // Update the big cup based on the highlighted small cups
  updateBigCup();
}

// Function to update the big cup and display the percentage and remaining liters
function updateBigCup() {
  // Get the number of small cups that are full
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  // Get the total number of small cups
  const totalCups = smallCups.length;

  // Update the visibility and height of the percentage element
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // Update the visibility and height of the remained element
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    // Update the remaining liters based on the total capacity (2 liters) and the filled cups
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

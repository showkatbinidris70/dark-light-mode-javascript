// dark mode start
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var isDarkMode = element.classList.contains("dark-mode");
  localStorage.setItem("bg_color", isDarkMode);
}

// Function to set initial dark mode based on localStorage
function setInitialDarkMode() {
  var element = document.body;
  var storedDarkMode = localStorage.getItem("bg_color");
  if (storedDarkMode === "true") {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}

// Set initial dark mode on page load
document.addEventListener("DOMContentLoaded", function () {
  setInitialDarkMode();
});
// dark mode end



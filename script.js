document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#444";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  }

  // Event listener for scroll event
  window.addEventListener("scroll", handleScroll);

  // Optional: Add more scripts or functionalities here as needed
});

function darkMode() {
    let element = document.body;
    let services = document.querySelectorAll(".card");
    element.classList.toggle("light-theme");
    services.classList.toggle("card-light-theme");
  }
document.getElementById("darkMode").addEventListener("click", darkMode);
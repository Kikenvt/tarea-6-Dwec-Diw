function darkMode() {
    let element = document.body;
    element.classList.toggle("light-theme");
  }
document.getElementById("darkMode").addEventListener("click", darkMode);
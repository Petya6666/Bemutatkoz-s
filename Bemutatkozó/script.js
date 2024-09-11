document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transition = "opacity 1s";
    });
    window.addEventListener("scroll", function() {
    sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
    section.style.opacity = "1";
    }
    });
    });
   });
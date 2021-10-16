const hamburger = document.querySelector(".hamburger");

const navContainer = document.querySelector(".nav-container");

let displayCheck = 0;

hamburger.addEventListener('click', function() {
    if (displayCheck === 0) {
        navContainer.style.display = "block";
        displayCheck = 1;
    } else {
        navContainer.style.display = "none";
        displayCheck = 0;
    }
})
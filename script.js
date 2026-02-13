let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function sayYes() {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("slider").classList.remove("hidden");
    document.getElementById("bgMusic").play();
}

function sayNo() {
    document.getElementById("tryAgain").innerText = "Try again 😜";
}

function moveButton() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

function prevSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

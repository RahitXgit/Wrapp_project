// Image Slider JavaScript

let slideIndex = 0; // Start with the first slide
showSlides(); // Function call to display the slides

// Function to display each slide and move to the next
function showSlides() {
    let slides = document.querySelectorAll('.slides img'); // Select all slide images
    slides.forEach((slide, index) => {
        // Display the current slide and hide others
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
    setTimeout(showSlides, 10000); // Change image every 3 seconds
}

// Sale Timer JavaScript

let countDownDate = new Date("Oct 31, 2024 23:59:59").getTime(); // Set sale end date

// Update the timer every 1 second
let timer = setInterval(function() {
    let now = new Date().getTime(); // Get current time
    let distance = countDownDate - now; // Find the time difference

    if (distance < 0) {
        // If the sale time is over, show "EXPIRED"
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    } else {
        // Calculate the remaining days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the timer element
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000); // Timer updates every second

// JavaScript to handle login and toggle menu
const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const verticalMenu = document.getElementById('vertical-menu');
const exerciseSection = document.getElementById('exercise-section');
const workoutSection = document.getElementById('workout-section');
const exerciseBtn = document.getElementById('exercise-btn');
const workoutBtn = document.getElementById('workout-btn');

const validUsername = "group 5";
const validPassword = "webdeveloper";

// Show the navbar and hide the login form after successful login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        loginContainer.style.display = 'none';
        navbar.style.display = 'block';
    } else {
        alert("Invalid username or password!");
    }
});

// Toggle vertical menu visibility
menuBtn.addEventListener('click', function() {
    verticalMenu.style.display = verticalMenu.style.display === "none" || verticalMenu.style.display === "" ? "block" : "none";
});

// Show exercises
exerciseBtn.addEventListener('click', function() {
    exerciseSection.style.display = "block";
    workoutSection.style.display = "none";
});

// Show workout plans
workoutBtn.addEventListener('click', function() {
    workoutSection.style.display = "block";
    exerciseSection.style.display = "none";
});

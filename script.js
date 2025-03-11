document.addEventListener("DOMContentLoaded", () => {
    console.log("Script running...");

    // LOGIN HANDLER
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const navbar = document.querySelector('.navbar');

    const validUsername = "group 4";
    const validPassword = "webdeveloper";

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            loginContainer.style.display = 'none';
            navbar.classList.remove('d-none');
        } else {
            alert("Invalid login!");
        }
    });

    // THEME TOGGLE
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // TIMER LOGIC
    let countdown;
    const startButton = document.getElementById("startButton");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    function validateInput() {
        startButton.disabled = !(minutesInput.value || secondsInput.value);
    }

    minutesInput.addEventListener('input', validateInput);
    secondsInput.addEventListener('input', validateInput);

    startButton.addEventListener('click', () => {
        let totalTime = (parseInt(minutesInput.value) || 0) * 60 + (parseInt(secondsInput.value) || 0);
        countdown = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(countdown);
                alert("Time's up!");
                return;
            }
            totalTime--;
        }, 1000);
    });
});

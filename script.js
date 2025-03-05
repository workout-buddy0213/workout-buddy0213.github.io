document.addEventListener("DOMContentLoaded", function () {
    // Login functionality
    const loginForm = document.getElementById("login-form");
    const loginContainer = document.getElementById("login-container");
    const navbar = document.getElementById("navbar");
    const verticalMenu = document.getElementById("vertical-menu");
    const mainContent = document.querySelector(".main-content"); 
    const timerContainer = document.getElementById("timer");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loginContainer.style.display = "none"; // Hide login screen
        navbar.classList.add("show"); // Show navbar
        verticalMenu.classList.add("show"); // Show vertical menu
        mainContent.style.display = "block"; // Show main content
    });

    // Timer functionality
    let timer, totalSeconds = 0, isRunning = false;
    const display = document.querySelector(".timer-display");
    const startBtn = document.getElementById("start");
    const pauseBtn = document.getElementById("pause");
    const resetBtn = document.getElementById("reset");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    function updateDisplay() {
        let mins = Math.floor(totalSeconds / 60);
        let secs = totalSeconds % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startTimer() {
        if (!isRunning) {
            let mins = parseInt(minutesInput.value) || 0;
            let secs = parseInt(secondsInput.value) || 0;
            if (mins === 0 && secs === 0) {
                alert("Please enter a valid time!");
                return;
            }

            totalSeconds = mins * 60 + secs;
            isRunning = true;
            updateDisplay();
            timer = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        totalSeconds = 0;
        display.textContent = "00:00";
        minutesInput.value = "";
        secondsInput.value = "";
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    // Workout section handling
    const workoutPlans = {
        "morning": {
            title: "Morning Workout",
            description: "A quick workout to kickstart your day and energize you.",
            exercises: [
                { name: "Jumping Jacks", detail: "3 minutes" },
                { name: "Push-ups", detail: "3 sets of 10" },
                { name: "Plank", detail: "1 minute" },
                { name: "High Knees", detail: "3 minutes" }
            ]
        },
        "daily": {
            title: "Daily Workout",
            description: "A well-rounded workout to do every day for general fitness.",
            exercises: [
                { name: "Squats", detail: "3 sets of 15" },
                { name: "Lunges", detail: "3 sets of 12 per leg" },
                { name: "Push-ups", detail: "3 sets of 10" },
                { name: "Mountain Climbers", detail: "3 minutes" },
                { name: "Sit-ups", detail: "3 sets of 20" }
            ]
        },
        "sevenDays": {
            title: "7 Days Workout",
            description: "A weekly workout plan for balanced fitness across the entire week.",
            exercises: [
                { name: "Monday", detail: "Full Body Strength Training" },
                { name: "Tuesday", detail: "Cardio and Core Workouts" },
                { name: "Wednesday", detail: "Yoga and Flexibility" },
                { name: "Thursday", detail: "Upper Body Strength" },
                { name: "Friday", detail: "Lower Body Strength" },
                { name: "Saturday", detail: "Cardio and HIIT" },
                { name: "Sunday", detail: "Rest and Recovery" }
            ]
        }
    };

    function showWorkout(workoutType) {
        const workout = workoutPlans[workoutType];
        document.getElementById('workoutTitle').textContent = workout.title;
        document.getElementById('workoutDescription').textContent = workout.description;

        const exercisesList = document.getElementById('exercises');
        exercisesList.innerHTML = "";
        workout.exercises.forEach(function (exercise) {
            const li = document.createElement('li');
            li.textContent = `${exercise.name}: ${exercise.detail}`;
            exercisesList.appendChild(li);
        });
        document.getElementById('workoutDetails').style.display = "block";
    }

    // Navbar event listeners
    document.getElementById("show-timer").addEventListener("click", function () {
        timerContainer.style.display = timerContainer.style.display === "none" ? "block" : "none";
    });
});

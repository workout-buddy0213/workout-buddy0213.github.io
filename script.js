document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and script running...");

    const exerciseSection = document.getElementById("exercise-section");
    const workoutSection = document.getElementById("workout-section");
    const exerciseBtn = document.getElementById("exercise-btn");
    const workoutBtn = document.getElementById("workout-btn");

    if (exerciseBtn) {
        exerciseBtn.addEventListener("click", function() {
            exerciseSection.style.display = "block";
            workoutSection.style.display = "none";
        });
    }

    if (workoutBtn) {
        workoutBtn.addEventListener("click", function() {
            workoutSection.style.display = "block";
            exerciseSection.style.display = "none";
        });
    }
});

let timer;
let seconds = 0;
let isRunning = false;

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById("timer-display").textContent = formatTime(seconds);
}

document.getElementById("start-btn").addEventListener("click", function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop-btn").addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
});

document.getElementById("timer-btn").addEventListener("click", function() {
    document.getElementById("timer-section").style.display = "block";
    document.getElementById("exercise-section").style.display = "none";
    document.getElementById("workout-section").style.display = "none";
});

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    themeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

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
    document.getElementById("workoutTitle").textContent = workout.title;
    document.getElementById("workoutDescription").textContent = workout.description;

    const exercisesList = document.getElementById("exercises");
    exercisesList.innerHTML = "";
    workout.exercises.forEach(function(exercise) {
        const li = document.createElement("li");
        li.textContent = `${exercise.name}: ${exercise.detail}`;
        exercisesList.appendChild(li);
    });
    document.getElementById("workoutDetails").style.display = "block";
}

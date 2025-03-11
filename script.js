document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and script running...");

    const navbar = document.querySelector('.navbar');
    const exerciseSection = document.getElementById('exercise-section');
    const workoutSection = document.getElementById('workout-section');
    const exerciseBtn = document.getElementById('exercise-btn');
    const workoutBtn = document.getElementById('workout-btn');

    }

    // LOGIN HANDLER
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const navbar = document.querySelector('.navbar');

    const validUsername = "group 4";
    const validPassword = "webdeveloper";

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            loginContainer.style.display = 'none';
            navbar.classList.remove('d-none'); // Show the navbar
        } else {
            alert("Invalid login!");
        }

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

    // Toggle workout and exercise section
    if (exerciseBtn) {
        exerciseBtn.addEventListener('click', function() {
            exerciseSection.style.display = "block";
            workoutSection.style.display = "none";
        });
    }

    if (workoutBtn) {
        workoutBtn.addEventListener('click', function() {
            workoutSection.style.display = "block";
            exerciseSection.style.display = "none";
        });
    }

    <!-- Timer JavaScript -->
    let countdown;
    const startButton = document.getElementById("startButton");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    minutesInput.addEventListener('input', validateInput);
    secondsInput.addEventListener('input', validateInput);

    function validateInput() {
        startButton.disabled = (!minutesInput.value && !secondsInput.value);
    }

    startButton.addEventListener('click', () => {
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;
        let totalTime = minutes * 60 + seconds;

        countdown = setInterval(() => {
            if (totalTime <= 0) {
                clearInterval(countdown);
                alert("Time's up!");
                return;
            }
            totalTime--;
            updateTimerDisplay(totalTime);
        }, 1000);
    });

    function updateTimerDisplay(totalTime) {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = formattedTime;
        document.getElementById('nav-timer').textContent = formattedTime;
    }

    function resetTimer() {
        clearInterval(countdown);
        document.getElementById('timer').textContent = "00:00";
    }



    // Update both the main timer and the navbar timer
        document.getElementById('timer').textContent = formattedTime;
        document.getElementById('nav-timer').textContent = formattedTime;

        updateProgressBar(totalTimeInSeconds, totalTime);
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById('timer').textContent = "00:00";
    document.getElementById('nav-timer').textContent = "00:00";
    minutesInput.value = '';
    secondsInput.value = '';
    progressBar.style.width = '0%';
}


    // Toggle theme
    const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
});



// Workout Plans Data
function showWorkout(plan) {
    const details = document.getElementById("workoutDetails");
    const title = document.getElementById("workoutTitle");
    const description = document.getElementById("workoutDescription");
    const exercisesList = document.getElementById("exercises");

    if (!workoutPlans[plan]) {
        details.style.display = "none";
        return;
    }

    const selectedPlan = workoutPlans[plan];
    title.textContent = selectedPlan.title;
    description.textContent = selectedPlan.description;
    exercisesList.innerHTML = selectedPlan.exercises
        .map(ex => `<li>${ex.name}: ${ex.detail}</li>`)
        .join('');

    details.style.display = "block";
  }

    const workoutPlans = {
    "morning": {
        title: "Morning Workout",
        description: "A quick workout to kickstart your day and energize you.",
        exercises: [
            { name: "Jumping Jacks", detail: "3 minutes" },
            { name: "Push-ups", detail: "3 sets of 10" },
            { name: "Squats", detail: "3 sets of 12" }
        ]
    },
    "daily": {
        title: "Daily Workout",
        description: "Daily workout to maintain strength and endurance.",
        exercises: [
            { name: "Burpees", detail: "3 sets of 10" },
            { name: "Mountain Climbers", detail: "2 minutes" },
            { name: "Lunges", detail: "3 sets of 10 each leg" }
        ]
    },
    "sevenDays": {
        title: "7 Days Workout",
        description: "Weekly routine for balanced fitness.",
        exercises: [
            { name: "Push-ups", detail: "3 sets of 10" },
            { name: "Plank", detail: "30 seconds" },
            { name: "Squats", detail: "3 sets of 12" },
            { name: "Jump Rope", detail: "2 minutes" }
        ]
    }
};


function showWorkout(workoutType) {
    const workout = workoutPlans[workoutType];
    document.getElementById('workoutTitle').textContent = workout.title;
    document.getElementById('workoutDescription').textContent = workout.description;

    const exercisesList = document.getElementById('exercises');
    exercisesList.innerHTML = "";
    workout.exercises.forEach(function(exercise) {
        const li = document.createElement('li');
        li.textContent = `${exercise.name}: ${exercise.detail}`;
        exercisesList.appendChild(li);
    });
    document.getElementById('workoutDetails').style.display = "block";
}

function updateProgressBar(remaining, total) {
    const percent = (1 - remaining / total) * 100;
    progressBar.style.width = `${percent}%`;
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginContainer = document.getElementById("login-container");
    const navbar = document.getElementById("navbar");
    const menuBtn = document.getElementById("menu-btn");
    const verticalMenu = document.getElementById("vertical-menu");
    const exerciseSection = document.getElementById("exercise-section");
    const workoutSection = document.getElementById("workout-section");
    const exerciseBtn = document.getElementById("exercise-btn");
    const workoutBtn = document.getElementById("workout-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    const validUsername = "group 5";
    const validPassword = "webdeveloper";

    // Handle login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === validUsername && password === validPassword) {
            loginContainer.style.display = "none";
            navbar.style.display = "block";
        } else {
            alert("Invalid username or password!");
        }
    });

    // Handle logout
    logoutBtn.addEventListener("click", function () {
        loginContainer.style.display = "block";
        navbar.style.display = "none";
    });

    // Toggle vertical menu
    menuBtn.addEventListener("click", function () {
        verticalMenu.style.display = verticalMenu.style.display === "none" || verticalMenu.style.display === "" ? "block" : "none";
    });

    // Toggle dark mode
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Show exercise section
    exerciseBtn.addEventListener("click", function () {
        exerciseSection.style.display = "block";
        workoutSection.style.display = "none";
    });

    // Show workout section
    workoutBtn.addEventListener("click", function () {
        workoutSection.style.display = "block";
        exerciseSection.style.display = "none";
    });

    // Workout plans
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
                { name: "Saturday", detail: "Cardio Intervals" },
                { name: "Sunday", detail: "Rest and Recovery" }
            ]
        }
    };

    // Show selected workout plan
    document.querySelectorAll(".workout-select").forEach(button => {
        button.addEventListener("click", function () {
            const plan = this.getAttribute("data-plan");
            const workout = workoutPlans[plan];

            document.getElementById("workoutTitle").textContent = workout.title;
            document.getElementById("workoutDescription").textContent = workout.description;
            
            const exercisesContainer = document.getElementById("exercises");
            exercisesContainer.innerHTML = "";
            workout.exercises.forEach(exercise => {
                const listItem = document.createElement("li");
                listItem.textContent = `${exercise.name}: ${exercise.detail}`;
                exercisesContainer.appendChild(listItem);
            });

            document.getElementById("workoutDetails").style.display = "block";
        });
    });
});

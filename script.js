$(document).ready(function() {
    const validUsername = "group 5";
    const validPassword = "webdeveloper";

    // Handle login
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        if (username === validUsername && password === validPassword) {
            $('#login-container').addClass('d-none');
            $('#navbar').removeClass('d-none');
        } else {
            alert("Invalid username or password!");
        }
    });

    // Handle logout
    $('#logout-btn').click(function() {
        $('#login-container').removeClass('d-none');
        $('#navbar').addClass('d-none');
    });

    // Toggle vertical menu
    $('#menu-btn').click(function() {
        $('#vertical-menu').toggle();
    });

    // Toggle dark mode
    $('#dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });

    // Show exercises section
    $('#exercise-btn').click(function() {
        $('#exercise-section').show();
        $('#workout-section').hide();
    });

    // Show workout plans section
    $('#workout-btn').click(function() {
        $('#workout-section').show();
        $('#exercise-section').hide();
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
    $('.workout-select').click(function() {
        const plan = $(this).data('plan');
        const workout = workoutPlans[plan];

        $('#workoutTitle').text(workout.title);
        $('#workoutDescription').text(workout.description);
        
        const exercisesContainer = $('#exercises');
        exercisesContainer.empty();
        workout.exercises.forEach(exercise => {
            exercisesContainer.append(`<li>${exercise.name}: ${exercise.detail}</li>`);
        });

        $('#workoutDetails').show();
    });
});

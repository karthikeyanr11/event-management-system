// Function to show the Sign Up section
function showSignup() {
    document.getElementById('signupSection').style.display = 'block';
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'none';
}

// Function to show the Login section
function showLogin() {
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('welcomeSection').style.display = 'none';
}

// Function to show the Welcome & Event Management section
function showWelcome() {
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
}

// Handle Sign Up form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showLogin();
});

// Handle Login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showWelcome();
});

// Handle adding an event
document.getElementById('addEventBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const eventTitle = document.getElementById('eventTitle').value;
    const eventType = document.getElementById('eventType').value;
    const eventDate = document.getElementById('eventDate').value;

    if (eventTitle && eventType && eventDate) {
        const eventList = document.getElementById('eventList');

        const newEvent = document.createElement('li');
        newEvent.textContent = `${eventTitle} - ${eventType} - ${eventDate}`;
        eventList.appendChild(newEvent);

        // Clear the form after adding the event
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventType').value = 'Music Concert';
        document.getElementById('eventDate').value = '';
    }
});

// Handle registering for an event
document.getElementById('registerBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        // Clear the registration form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    }
});


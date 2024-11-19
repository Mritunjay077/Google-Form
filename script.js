document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    await registerUser();
});

async function registerUser() {
    // Collecting form data
    const name = document.getElementById('name').value.trim();
    const rollno = document.getElementById('rollno').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const hostelstatus = document.getElementById('hostelstatus').value.trim();
    const institute = document.getElementById('institute').value.trim();
    const course = document.getElementById('course').value.trim();
    const semester = document.getElementById('semester').value.trim();
    const section = document.getElementById('section').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate the inputs
    if (!name || !rollno || !email || !phone || !hostelstatus || !institute || !course || !semester || !section || !password || !confirmPassword) {
        showMessage("All fields are required.", "error");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "error");
        return;
    }

    // Creating the data object to send to the server
    const data = {
        name,
        rollno,
        email,
        phone,
        hostelstatus,
        institute,
        course,
        semester,
        section,
        password
    };

    try {
        // Replace 'your-app-name' with your Railway app's name
        const response = await fetch('junction.proxy.rlwy.net:18602/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            showMessage(result.message || "Registration Successful!", "success");
        } else {
            showMessage(result.error || "Registration Failed. Please try again.", "error");
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage("An error occurred. Please try again later.", "error");
    }
}

// Function to display messages to the user
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}

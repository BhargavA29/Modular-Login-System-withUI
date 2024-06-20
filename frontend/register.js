const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm['confirm-password'].value;
    
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.msg || 'Registration failed.');
        }

        const data = await response.json();
        // Handle successful registration, e.g., redirect to login page or display success message
        console.log('Registration successful:', data);
        window.location.href = 'login.html'; // Redirect to login page
    } catch (error) {
        errorMessage.textContent = error.message;
        console.error('Registration error:', error);
    }
});

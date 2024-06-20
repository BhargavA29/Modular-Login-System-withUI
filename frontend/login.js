const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.msg || 'Login failed.');
        }

        const data = await response.json();
        // Handle successful login, e.g., redirect to dashboard or display success message
        console.log('Login successful:', data);
    } catch (error) {
        errorMessage.textContent = error.message;
        console.error('Login error:', error);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const passwordToggle = document.getElementById("password-toggle");
    const passwordInput = document.getElementById("password");
    const owlImage = document.getElementById("owl");
    const verifyEmailBtn = document.getElementById("verify-email");
    const emailInput = document.getElementById("email");
    const form = document.querySelector('form');
    const passwordSection = document.getElementById("password-section");
    const box = document.querySelector('.box');
    const firstNameInput = document.getElementById("firstName");
    const signupText = document.querySelector('.signup-text');

    // Initial setup
    let isVerified = false;
    const emojis = ['✨', '🚀', '🎯'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Add emoji to title
    const title = document.querySelector('.title h2');
    title.textContent += ` ${randomEmoji}`;

    // Password toggle functionality
    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            owlImage.src = "owl-show.png";
        } else {
            passwordInput.type = "password";
            owlImage.src = "owl-hide.png";
        }
    }

    if (passwordToggle) {
        passwordToggle.addEventListener('click', togglePassword);
    }

    // Adjust box height dynamically
    function adjustBoxHeight() {
        const formHeight = form.scrollHeight;
        box.style.height = `${formHeight + 40}px`;
    }

    // Email verification functionality
    function verifyEmail() {
        if (!emailInput.value || !emailInput.checkValidity()) {
            showAlert('🚨 Please enter a valid email address');
            return;
        }

        verifyEmailBtn.disabled = true;
        verifyEmailBtn.innerHTML = '<span class="spinner">⏳</span> Verifying...';
        
        setTimeout(() => {
            isVerified = true;
            verifyEmailBtn.innerHTML = '✅ Verified ✓';
            verifyEmailBtn.classList.add("verified");
            
            passwordSection.style.display = 'block';
            setTimeout(() => {
                passwordSection.style.opacity = '1';
                passwordSection.style.transform = 'translateY(0)';
                setTimeout(adjustBoxHeight, 300);
                createConfetti();
            }, 10);
            
            sessionStorage.setItem('emailVerified', 'true');
            sessionStorage.setItem('verifiedEmail', emailInput.value);
        }, 1500);
    }

    verifyEmailBtn.addEventListener('click', verifyEmail);

    // Form submission handler
    async function submitForm(formData) {
        const submitBtn = document.querySelector('.submit-btn');
    
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner">⏳</span> Creating Account...';
    
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const result = await response.json();
    
            if (response.ok) {
                showAlert('🎉 Account created successfully!', 'success');
                createConfetti();
    
                setTimeout(() => {
                    showAlert('⏳ Redirecting to login page...', 'info');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                }, 1000);
            } else {
                showAlert(`❌ ${result.error}`);
            }
        } catch (error) {
            showAlert('😢 Failed to create account. Please try again.');
        } finally {
            submitBtn.textContent = "Create Account";
            submitBtn.disabled = false;
        }
    }    

    // Form validation
    function validateForm(firstName, email, password, confirmPassword, termsCheckbox) {
        if (!firstName) {
            showAlert('👤 Please enter your first name');
            return false;
        }

        if (!email || !emailInput.checkValidity()) {
            showAlert('📧 Please enter a valid email address');
            return false;
        }

        if (!isVerified) {
            showAlert('🔐 Please verify your email first');
            return false;
        }

        if (password.length < 8) {
            showAlert('🔒 Password must be at least 8 characters long');
            return false;
        }

        if (password !== confirmPassword) {
            showAlert('⚠️ Passwords do not match');
            return false;
        }

        if (!termsCheckbox.checked) {
            showAlert('📝 Please accept the Terms & Conditions');
            return false;
        }

        return true;
    }

    // Form submission to server - MODIFIED SECTION
    async function submitForm(formData) {
        const submitBtn = document.querySelector('.submit-btn');
    
        try {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner">⏳</span> Creating Account...';
    
            await new Promise(resolve => setTimeout(resolve, 2000));
    
            // Send the data to backend
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                showAlert('🎉 Account created successfully!', 'success');
                createConfetti();
    
                // Reset session data
                sessionStorage.removeItem('emailVerified');
                sessionStorage.removeItem('verifiedEmail');
    
                // Redirect after success
                setTimeout(() => {
                    showAlert('⏳ Redirecting to login page...', 'info');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                }, 1000);
            } else {
                showAlert(`❌ ${result.error || 'Something went wrong'}`);
            }
        } catch (error) {
            showAlert('😢 Failed to create account. Please try again.');
        } finally {
            submitBtn.textContent = "Create Account";
            submitBtn.disabled = false;
        }
    }
    

    // Show alert messages
    function showAlert(message, type = 'error') {
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        const alert = document.createElement('div');
        alert.className = `form-alert ${type}`;
        alert.innerHTML = message;
        
        const title = document.querySelector('.title');
        title.insertAdjacentElement('afterend', alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }

    // Create confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.innerHTML = ['✨', '🎉', '🌟', '💫', '🎊'][Math.floor(Math.random() * 5)];
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            confettiContainer.appendChild(confetti);
        }
        
        setTimeout(() => {
            confettiContainer.remove();
        }, 3000);
    }

    // Reset verification if email changes
    emailInput.addEventListener('input', function() {
        if (isVerified && emailInput.value !== sessionStorage.getItem('verifiedEmail')) {
            resetVerification();
        }
    });

    // Reset verification state
    function resetVerification() {
        isVerified = false;
        verifyEmailBtn.textContent = "Verify Email";
        verifyEmailBtn.classList.remove("verified");
        verifyEmailBtn.disabled = false;
        
        passwordSection.style.display = 'none';
        passwordSection.style.opacity = '0';
        passwordSection.style.transform = 'translateY(20px)';
        
        setTimeout(adjustBoxHeight, 300);
        
        sessionStorage.removeItem('emailVerified');
        sessionStorage.removeItem('verifiedEmail');
    }

    // Check if email was previously verified
    function checkPreviousVerification() {
        if (sessionStorage.getItem('emailVerified')) {
            const storedEmail = sessionStorage.getItem('verifiedEmail');
            if (storedEmail && emailInput.value === storedEmail) {
                isVerified = true;
                verifyEmailBtn.innerHTML = '✅ Verified ✓';
                verifyEmailBtn.classList.add("verified");
                verifyEmailBtn.disabled = true;
                
                passwordSection.style.display = 'block';
                passwordSection.style.opacity = '1';
                passwordSection.style.transform = 'translateY(0)';
                
                setTimeout(adjustBoxHeight, 10);
            }
        }
    }

    // Initialize
    checkPreviousVerification();
    async function handleSubmit(e) {
        e.preventDefault();
    
        const firstName = firstNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const termsCheckbox = document.getElementById("terms");
        console.log("🚀 Submitting form...");

        if (!validateForm(firstName, email, password, confirmPassword, termsCheckbox)) {
            return;
        }
    
        await submitForm({
            firstName,
            email,
            password
        });
    }
    
    form.addEventListener('submit', handleSubmit);
    
    const signupBtn = document.getElementById('signupSubmit'); // your form's button

signupBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, password })
    })
    .then(res => res.json())
.then(data => {
    if (data.message) {
        console.log("✅ Email captured for storage:", email);
        
        // ✅ Save login info only after success
        localStorage.setItem('userEmail', email);      // Store email
        localStorage.setItem('isLoggedIn', 'true');    // Set login status to true

        alert('Signup successful!');
        window.location.href = 'homepage.html'; // Go to homepage
    } else {
        alert(data.error || 'Signup failed');
    }
})

    
    .catch(err => alert('Error: ' + err));
});

    setTimeout(adjustBoxHeight, 100);
    
});
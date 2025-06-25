document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const passwordToggle = document.getElementById("password-toggle");
    const passwordInput = document.getElementById("password");
    const owlImage = document.getElementById("owl");
    const form = document.querySelector('form');
    const loginBtn = document.querySelector('button[type="submit"]');
    const title = document.querySelector('.title h2');

    // Add random emoji to title
    const loginEmojis = ['🚀', '🎯', '✨'];
    const randomEmoji = loginEmojis[Math.floor(Math.random() * loginEmojis.length)];
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

    passwordToggle.addEventListener('click', togglePassword);

    // Form submission handler
    async function handleSubmit(e) {
        e.preventDefault();
        
        const username = document.querySelector('.inputBox input[type="text"]').value.trim();
        const password = passwordInput.value;
        const rememberMe = document.querySelector('.remember-forgot input[type="checkbox"]').checked;

        // Validation checks
        if (!username) {
            showFloatingEmoji('👆', 'error');
            showAlert('👤 Please enter your username or email');
            return;
        }

        if (!password) {
            showFloatingEmoji('🔒', 'error');
            showAlert('🔐 Please enter your password');
            return;
        }

        // Submit the form
        await loginUser({
            username,
            password,
            rememberMe
        });
    }

    // Login function
    async function loginUser(userData) {
        try {
            loginBtn.disabled = true;
            loginBtn.innerHTML = '<span class="spinner">⏳</span> Logging in...';
    
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: userData.username,
                    password: userData.password
                })
            });
    
            const result = await response.json();
    
            if (response.ok) {
                showFloatingEmoji('🎉', 'success');
                showAlert('🌟 Login successful! Redirecting...', 'success');
                createEmojiRain(['✨', '🌟', '🎉', '💫', '🚀']);
                localStorage.setItem("userEmail", result.email); // Add this line
                localStorage.setItem("userId", result.user_id);
                localStorage.setItem("isLoggedIn", 'true');
                
                setTimeout(() => {
                    window.location.href = "homepage.html";
                }, 2500);
            }
            
             else {
                showFloatingEmoji('😢', 'error');
                showAlert(`❌ ${result.error || "Login failed. Please try again."}`);
            }
        } catch (error) {
            console.error("Login error:", error);
            showFloatingEmoji('😢', 'error');
            showAlert("⚠️ Server error. Please try again later.");
        } finally {
            loginBtn.textContent = "Login";
            loginBtn.disabled = false;
        }
    }
    

    // Show alert messages
    function showAlert(message, type = 'error') {
        // Remove any existing alerts
        const existingAlert = document.querySelector('.form-alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        const alert = document.createElement('div');
        alert.className = `form-alert ${type}`;
        alert.innerHTML = message;
        
        // Insert after the form title
        const title = document.querySelector('.title');
        title.insertAdjacentElement('afterend', alert);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }

    // Create emoji rain effect
    function createEmojiRain(emojis) {
        const container = document.querySelector('.container');
        const rainContainer = document.createElement('div');
        rainContainer.className = 'emoji-rain';
        container.appendChild(rainContainer);
        
        // Create 50 emoji elements
        for (let i = 0; i < 50; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random positioning and animation
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.animationDuration = `${Math.random() * 2 + 1}s`;
            emoji.style.animationDelay = `${Math.random() * 0.5}s`;
            emoji.style.fontSize = `${Math.random() * 20 + 15}px`;
            
            rainContainer.appendChild(emoji);
        }
        
        // Remove after animation completes
        setTimeout(() => {
            rainContainer.remove();
        }, 3000);
    }

    // Show floating emoji feedback
    function showFloatingEmoji(emoji, type) {
        const floatingEmoji = document.createElement('div');
        floatingEmoji.className = `floating-emoji ${type}`;
        floatingEmoji.textContent = emoji;
        
        // Position near the login button
        const buttonRect = loginBtn.getBoundingClientRect();
        floatingEmoji.style.left = `${buttonRect.left + buttonRect.width/2}px`;
        floatingEmoji.style.top = `${buttonRect.top}px`;
        
        document.body.appendChild(floatingEmoji);
        
        // Animate and remove
        setTimeout(() => {
            floatingEmoji.style.transform = 'translateY(-50px)';
            floatingEmoji.style.opacity = '0';
            
            setTimeout(() => {
                floatingEmoji.remove();
            }, 500);
        }, 10);
    }
    form.addEventListener('submit', handleSubmit);
});
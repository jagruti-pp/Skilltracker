document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });

    // Create animated particles background
    createParticles();

    // Initialize skills carousel
    initSkillsCarousel();

    // Initialize course carousel
    initCourseCarousel();

    // DOM elements
    const darkModeToggle = document.getElementById('darkModeToggle');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const footer = document.querySelector('.footer');
    const navLinks = document.querySelectorAll('.sidebar a');

    // Dark Mode Toggle functionality
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    // Sidebar toggle functionality
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('expanded');
        if (footer) {
            footer.style.marginLeft = sidebar.classList.contains('collapsed') ? '60px' : '220px';
        }
    });

    // Auth State Management
    function setLoggedIn(isLoggedIn) {
        if (isLoggedIn) {
            loginBtn.classList.add('hidden');
            signupBtn.classList.add('hidden');
            logoutBtn.classList.remove('hidden');
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            loginBtn.classList.remove('hidden');
            signupBtn.classList.remove('hidden');
            logoutBtn.classList.add('hidden');
            localStorage.setItem('isLoggedIn', 'false');
        }
    }

    // Login button click handler
    loginBtn.addEventListener('click', () => {
        navigateTo('login.html');
    });

    // Signup button click handler
    signupBtn.addEventListener('click', () => {
        navigateTo('signup.html');
    });

    // Logout button click handler
    logoutBtn.addEventListener('click', () => {
        setLoggedIn(false);
    });

    // Check login state from localStorage
    if (localStorage.getItem('isLoggedIn') === 'true') {
        setLoggedIn(true);
    }

    // Navigation for sidebar links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Handle different navigation cases
            if (href === '#dashboard') {
                e.preventDefault();
                navigateTo('dashboard.html');
            } 
            else if (href === '#courses') {
                e.preventDefault();
                // Get required elements
                const coursesHeading = document.getElementById('explore-courses');
                const header = document.querySelector('header');
                
                if (coursesHeading && header) {
                    // Calculate scroll position accounting for fixed header
                    const headerHeight = header.offsetHeight;
                    const headingPosition = coursesHeading.getBoundingClientRect().top;
                    const offsetPosition = headingPosition + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to position
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Visual feedback
                    coursesHeading.classList.add('highlight');
                    setTimeout(() => {
                        coursesHeading.classList.remove('highlight');
                    }, 2000);
                }
            }
            else if (href === '#contact') {
                e.preventDefault();
                const contactSection = document.querySelector('.contact-section');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            else if (href === '#progress' || href === '#certifications') {
                e.preventDefault();
                navigateTo('dashboard.html' + href);
            }
            else if (href === '#home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            else if (href === '#roadmap') {
                e.preventDefault();
                alert('Learning Roadmaps feature coming soon!');
            }
        });
    });

    // Chatbot bubble click handler
    const chatbotBubble = document.querySelector('.chatbot-bubble');
    if (chatbotBubble) {
        chatbotBubble.addEventListener('click', () => {
            alert('Chatbot feature coming soon!');
        });
    }
});

// Function to create animated particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.floor(Math.random() * 100) + '%';
        particle.style.top = Math.floor(Math.random() * 100) + '%';
        const size = Math.floor(Math.random() * 10) + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        
        container.appendChild(particle);
    }
}

// Function to initialize skills carousel
function initSkillsCarousel() {
    const skillsGrid = document.querySelector('.skills-grid');
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (!skillsGrid || skillCards.length === 0) return;

    skillCards.forEach(card => {
        skillsGrid.appendChild(card.cloneNode(true));
    });
    
    let skillsPosition = 0;
    const skillsSpeed = 0.5;
    let skillsPaused = false;
    
    function animateSkills() {
        if (!skillsPaused) {
            skillsPosition -= skillsSpeed;
            
            if (skillsPosition <= -(skillCards.length * skillCards[0].offsetWidth)) {
                skillsPosition = 0;
            }
            
            skillsGrid.style.transform = `translateX(${skillsPosition}px)`;
        }
        requestAnimationFrame(animateSkills);
    }
    
    animateSkills();
    
    skillsGrid.addEventListener('mouseenter', () => {
        skillsPaused = true;
    });
    
    skillsGrid.addEventListener('mouseleave', () => {
        skillsPaused = false;
    });
}

// Function to initialize course carousel
function initCourseCarousel() {
    const carouselPrev = document.querySelector('.carousel-btn.prev');
    const carouselNext = document.querySelector('.carousel-btn.next');
    const courseCarousel = document.querySelector('.course-carousel');
    
    if (!courseCarousel || !carouselPrev || !carouselNext) return;

    let scrollAmount = 0;
    const cardWidth = document.querySelector('.course-card')?.offsetWidth + 20 || 320;
    
    carouselNext.addEventListener('click', () => {
        scrollAmount += cardWidth * 2;
        if (scrollAmount > courseCarousel.scrollWidth - courseCarousel.clientWidth) {
            scrollAmount = courseCarousel.scrollWidth - courseCarousel.clientWidth;
        }
        courseCarousel.scroll({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    carouselPrev.addEventListener('click', () => {
        scrollAmount -= cardWidth * 2;
        if (scrollAmount < 0) {
            scrollAmount = 0;
        }
        courseCarousel.scroll({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}
// Single event listener for enroll buttons
document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const courseId = btn.dataset.courseId;
        const userEmail = localStorage.getItem('userEmail');
        
        if (!userEmail) {
            alert("Please log in or sign up first!");
            return;
        }

        fetch('http://127.0.0.1:5000/enroll', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: userEmail, 
                course_id: courseId 
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                btn.innerHTML = '✅ Enrolled';
                
                // Redirect to course page after 1.5 seconds
                setTimeout(() => {
                    window.location.href = `course.html?course_id=${courseId}`;
                }, 1500);
            } else {
                alert(data.error || 'Enrollment failed');
            }
        })
        .catch(err => alert("Error: " + err));
    });
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userEmail');
    setLoggedIn(false);
    window.location.href = 'homepage.html'; // or index.html if you prefer
});

// Function to handle page navigation
function navigateTo(url) {
    window.location.href = url;
}

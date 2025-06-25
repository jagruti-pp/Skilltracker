class Dashboard {
    constructor() {
        this.currentSection = 'dashboard';
        this.init();
    }
  
    init() {
        this.checkTheme();
        this.setupEventListeners();
        this.initDashboardComponents();
        this.startAnimations();
        this.initGSAPAnimations();
        this.highlightNavItem(document.querySelector('.sidebar a[href="#dashboard"]')); // Highlight dashboard on load
    }
  
    setupEventListeners() {
        // Dark mode toggle
        document.getElementById('darkModeToggle')?.addEventListener('click', () => this.toggleDarkMode());
        
        // Quick access buttons
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', () => this.animateButtonClick(btn));
        });
        
        // Certificate preview buttons
        document.querySelectorAll('.cert-preview').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.openCertificateModal(btn.closest('.certificate-card'));
            });
        });
  
        // Modal close button
        document.getElementById('modalClose')?.addEventListener('click', () => {
            this.closeCertificateModal();
        });
  
        // Close modal when clicking outside
        document.getElementById('certificateModal')?.addEventListener('click', (e) => {
            if (e.target === document.getElementById('certificateModal')) {
                this.closeCertificateModal();
            }
        });
  
        // Date selection in streak calendar
        document.querySelectorAll('.day-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                const dateStr = cell.getAttribute('data-date');
                document.querySelector('.selected-date').textContent = `Selected: ${dateStr || 'Today'}`;
                document.querySelectorAll('.day-cell').forEach(c => c.classList.remove('selected'));
                cell.classList.add('selected');
            });
        });
  
        // Sidebar toggle
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            document.getElementById('sidebar')?.classList.toggle('collapsed');
            document.querySelector('main')?.classList.toggle('expanded');
        });
  
        // Continue learning buttons
        document.querySelectorAll('.continue-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const courseCard = btn.closest('.course-card');
                this.animateCourseSelection(courseCard);
            });
        });
  
        // Badge hover effects
        document.querySelectorAll('.badge.unlocked').forEach(badge => {
            badge.addEventListener('mouseenter', () => this.createConfetti(badge));
        });
  
        // Handle sidebar navigation
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href === 'homepage.html') {
                    return; // Let browser handle homepage navigation
                }
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    this.showSection(href.substring(1));
                    this.highlightNavItem(link);
                }
            });
        });
    }
  
    highlightNavItem(link) {
        document.querySelectorAll('.sidebar li').forEach(item => {
            item.classList.remove('active');
        });
        link?.parentElement.classList.add('active');
    }
  
    showSection(sectionId) {
        // Hide all sections
        const sections = [
            document.querySelector('.welcome-banner'),
            document.getElementById('dashboard'),
            document.getElementById('progress'),
            document.getElementById('certifications')
        ].filter(Boolean);
  
        sections.forEach(section => {
            section.style.display = 'none';
        });
  
        // Show requested section
        switch(sectionId) {
            case 'dashboard':
                document.querySelector('.welcome-banner').style.display = 'flex';
                document.getElementById('dashboard').style.display = 'grid';
                break;
            case 'progress':
            case 'certifications':
                const section = document.getElementById(sectionId);
                if (section) {
                    section.style.display = 'block';
                    window.scrollTo({
                        top: section.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
                break;
            default:
                // Default to dashboard
                document.querySelector('.welcome-banner').style.display = 'flex';
                document.getElementById('dashboard').style.display = 'grid';
        }
  
        this.currentSection = sectionId;
    }
  
    // Dashboard Components Initialization
    initDashboardComponents() {
        this.initUpcomingGoals();
        this.initMiniCalendar();
        this.initStreakCalendar();
        this.initSkillProgress();
        this.initAchievements();
    }
  
    initUpcomingGoals() {
        const goals = [
            { title: "Complete JavaScript Quiz", due: "Tomorrow", type: "quiz", priority: "high" },
            { title: "React Challenge Level 3", due: "In 2 days", type: "challenge", priority: "medium" },
            { title: "Database Design Project", due: "Next week", type: "project", priority: "low" }
        ];
  
        const goalsList = document.querySelector('.goals-list');
        if (!goalsList) return;
  
        goalsList.innerHTML = '';
        
        goals.forEach((goal, index) => {
            const goalItem = document.createElement('div');
            goalItem.className = `goal-item priority-${goal.priority} animate-slide-up`;
            goalItem.style.animationDelay = `${0.1 + (index * 0.1)}s`;
            goalItem.innerHTML = `
                <div class="goal-icon"><i class="fas fa-${this.getGoalIcon(goal.type)}"></i></div>
                <div class="goal-details">
                    <h4>${goal.title}</h4>
                    <p>Due ${goal.due}</p>
                </div>
                <button class="goal-action remind">Remind Me</button>
            `;
            goalsList.appendChild(goalItem);
            
            goalItem.querySelector('.remind')?.addEventListener('click', (e) => {
                const button = e.target;
                button.innerHTML = '<i class="fas fa-check"></i> Reminder Set';
                button.style.backgroundColor = 'var(--success)';
                button.style.color = 'white';
                setTimeout(() => {
                    goalItem.style.opacity = '0';
                    setTimeout(() => goalItem.remove(), 300);
                }, 1000);
            });
        });
    }
  
    initMiniCalendar() {
        const miniCalendar = document.querySelector('.mini-calendar');
        if (!miniCalendar) return;
        
        const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        const today = new Date();
        const currentDate = today.getDate();
        const currentDay = today.getDay();
        
        miniCalendar.innerHTML = '';
        
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day-header';
            dayHeader.textContent = day;
            miniCalendar.appendChild(dayHeader);
        });
        
        const startDate = new Date(today);
        startDate.setDate(currentDate - currentDay);
        
        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = dayDate.getDate();
            
            if (dayDate.getDate() === currentDate) {
                dayElement.classList.add('current');
            }
            
            miniCalendar.appendChild(dayElement);
        }
    }
  
    initStreakCalendar() {
        const calendar = document.querySelector('.streak-calendar');
        if (!calendar) return;
        
        const today = new Date();
        calendar.innerHTML = '';
        
        for (let i = 0; i < 84; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - (83 - i));
            
            const dayCell = document.createElement('div');
            dayCell.className = 'day-cell';
            dayCell.setAttribute('data-date', this.formatDate(date));
            
            const random = Math.random();
            if (random > 0.7) {
                dayCell.classList.add('completed');
            } else if (random > 0.5) {
                dayCell.classList.add('missed');
            }
            
            if (date.toDateString() === today.toDateString()) {
                dayCell.classList.add('selected');
            }
            
            calendar.appendChild(dayCell);
        }
    }
  
    initSkillProgress() {
        const skills = [
            { name: "HTML", value: 85, color: "#4A6FA5" },
            { name: "CSS", value: 70, color: "#FF7E5F" },
            { name: "JavaScript", value: 50, color: "#2ecc71" },
            { name: "React", value: 30, color: "#9b59b6" }
        ];
        
        const pieChart = document.querySelector('.pie-chart');
        if (!pieChart) return;
        
        pieChart.innerHTML = '';
        
        let cumulativePercent = 0;
        skills.forEach((skill) => {
            const percent = skill.value / 100;
            const segment = document.createElement('div');
            segment.className = 'pie-segment';
            segment.style.backgroundColor = skill.color;
            segment.style.transform = `rotate(${cumulativePercent * 360}deg)`;
            
            const endAngle = cumulativePercent + percent;
            
            if (percent > 0.5) {
                segment.style.clipPath = `polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%, ${50 + (endAngle - 0.5) * 100}% ${(endAngle - 0.5) * 200}%)`;
            } else {
                segment.style.clipPath = `polygon(50% 50%, 50% 0, ${50 + percent * 100}% 0, ${50 + percent * 100}% 0%, 50% 50%)`;
            }
            
            pieChart.appendChild(segment);
            
            const middleAngle = (cumulativePercent + endAngle) / 2 * 360;
            const labelDistance = 35;
            const labelX = 50 + Math.sin(middleAngle * Math.PI / 180) * labelDistance;
            const labelY = 50 - Math.cos(middleAngle * Math.PI / 180) * labelDistance;
            
            const label = document.createElement('div');
            label.className = 'pie-label';
            label.textContent = `${skill.value}%`;
            label.style.left = `${labelX}%`;
            label.style.top = `${labelY}%`;
            pieChart.appendChild(label);
            
            cumulativePercent = endAngle;
        });
        
        const centerText = document.createElement('div');
        centerText.className = 'pie-label';
        centerText.textContent = 'Skills';
        centerText.style.left = '50%';
        centerText.style.top = '50%';
        centerText.style.transform = 'translate(-50%, -50%)';
        centerText.style.fontWeight = 'bold';
        centerText.style.fontSize = '1rem';
        centerText.style.color = 'var(--text)';
        pieChart.appendChild(centerText);
    }
  
    initAchievements() {
        // Handled in HTML
    }
  
    startAnimations() {
        const streakCount = document.querySelector('.streak-count.animate-count-up');
        if (streakCount) {
            const target = parseInt(streakCount.getAttribute('data-target'));
            this.animateCountUp(streakCount, target, 1500);
        }
    }
  
    initGSAPAnimations() {
        gsap.from('.pie-segment', {
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1
        });
  
        document.querySelectorAll('.course-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    duration: 0.3
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "var(--shadow)",
                    duration: 0.3
                });
            });
        });
  
        document.querySelectorAll('.badge.unlocked').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                gsap.to(badge, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "back.out"
                });
            });
            badge.addEventListener('mouseleave', () => {
                gsap.to(badge, {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.in"
                });
            });
        });
    }
  
    animateCourseSelection(courseCard) {
        gsap.to(courseCard, {
            boxShadow: "0 0 20px rgba(74, 111, 165, 0.5)",
            duration: 0.5,
            yoyo: true,
            repeat: 1
        });
  
        gsap.to(courseCard.querySelector('.continue-btn i'), {
            x: 5,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });
  
        this.createConfetti(courseCard);
    }
  
    openCertificateModal(certCard) {
        const modal = document.getElementById('certificateModal');
        const modalContent = modal.querySelector('.modal-content');
        
        const title = certCard.querySelector('h4').textContent;
        const date = certCard.querySelector('.cert-meta span').textContent;
        const level = certCard.querySelector('.cert-level').textContent;
        const isGold = certCard.classList.contains('gold');
        const isSilver = certCard.classList.contains('silver');
        
        modal.querySelector('.modal-title h3').textContent = title;
        modal.querySelector('.modal-title p').textContent = `Issued on ${date.split('on ')[1]}`;
        modal.querySelector('.modal-body p:nth-of-type(2)').innerHTML = 
            `Course completion level: <strong>${level}</strong>`;
        
        const modalIcon = modal.querySelector('.modal-icon');
        modalIcon.className = 'modal-icon';
        if (isGold) modalIcon.classList.add('gold');
        if (isSilver) modalIcon.classList.add('silver');
        if (!isGold && !isSilver) modalIcon.classList.add('bronze');
        
        modal.classList.add('active');
        
        gsap.from(modalContent, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "back.out"
        });
    }
  
    closeCertificateModal() {
        const modal = document.getElementById('certificateModal');
        const modalContent = modal.querySelector('.modal-content');
        
        gsap.to(modalContent, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            ease: "back.in",
            onComplete: () => {
                modal.classList.remove('active');
            }
        });
    }
  
    animateCountUp(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    }
  
    createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const colors = ['#4A6FA5', '#FF7E5F', '#2ecc71', '#f39c12', '#9b59b6'];
        const confettiContainer = document.getElementById('confetti-container');
        
        if (!confettiContainer) return;
        
        confettiContainer.innerHTML = '';
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${centerX}px`;
            confetti.style.top = `${centerY}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 8 + 4}px`;
            confetti.style.height = `${Math.random() * 8 + 4}px`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            confettiContainer.appendChild(confetti);
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = 5 + Math.random() * 5;
            const rotation = Math.random() * 360;
            
            confetti.style.transform = `rotate(${rotation}deg)`;
            confetti.style.opacity = '1';
            
            const animation = confetti.animate([
                { 
                    transform: `translate(0, 0) rotate(${rotation}deg)`,
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.sin(angle) * 200}px, ${Math.cos(angle) * 200 + 100}px) rotate(${rotation + 360}deg)`,
                    opacity: 0 
                }
            ], {
                duration: 1000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }
    }
  
    animateButtonClick(button) {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 300);
    }
  
    getGoalIcon(type) {
        const icons = {
            quiz: 'question-circle',
            challenge: 'bolt',
            project: 'project-diagram',
            assessment: 'clipboard-check'
        };
        return icons[type] || 'bullseye';
    }
  
    toggleDarkMode() {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            document.getElementById('darkModeToggle').textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            document.getElementById('darkModeToggle').textContent = '☀️';
        }
    }
  
    checkTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            document.getElementById('darkModeToggle').textContent = '☀️';
        }
    }
  
    formatDate(date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
  }
  
  // Initialize dashboard
  document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
  });
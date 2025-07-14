// Hexagon connections functionality
function createHexagonConnections() {
    const hexagons = document.querySelectorAll('.hexagon');
    const connectionsContainer = document.getElementById('hexConnections');
    
    // Clear existing connections
    connectionsContainer.innerHTML = '';
    
    // Create connections between adjacent hexagons
    const connections = [
        [0, 1], [1, 2], [2, 3], // Top row connections
        [4, 5], [5, 6], [6, 7], // Bottom row connections
        [0, 4], [1, 5], [2, 6], [3, 7] // Vertical connections
    ];
    
    connections.forEach(([start, end]) => {
        const startHex = hexagons[start];
        const endHex = hexagons[end];
        
        if (startHex && endHex) {
            const startRect = startHex.getBoundingClientRect();
            const endRect = endHex.getBoundingClientRect();
            const containerRect = connectionsContainer.getBoundingClientRect();
            
            const startX = startRect.left + startRect.width / 2 - containerRect.left;
            const startY = startRect.top + startRect.height / 2 - containerRect.top;
            const endX = endRect.left + endRect.width / 2 - containerRect.left;
            const endY = endRect.top + endRect.height / 2 - containerRect.top;
            
            const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
            
            const line = document.createElement('div');
            line.className = 'connection-line';
            line.style.width = length + 'px';
            line.style.left = startX + 'px';
            line.style.top = startY + 'px';
            line.style.transform = `rotate(${angle}deg)`;
            line.style.transformOrigin = '0 50%';
            
            connectionsContainer.appendChild(line);
        }
    });
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '☀️';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

// Language toggle functionality
function toggleLanguage() {
    const currentPath = window.location.pathname;
    const langToggle = document.querySelector('.lang-toggle');
    
    if (currentPath.endsWith('index-fa.html')) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index-fa.html';
    }
}

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Language info display
const languageDescriptions = {
    en: {
        'JavaScript': 'Dynamic programming language for web development',
        'Python': 'Versatile language for web development, data science, and AI',
        'React': 'Popular JavaScript library for building user interfaces',
        'Node.js': 'JavaScript runtime for server-side development',
        'Java': 'Object-oriented programming language for enterprise applications',
        'C++': 'High-performance language for system programming',
        'Go': 'Fast and efficient language for cloud services',
        'Rust': 'Systems programming language focused on safety and performance'
    },
    fa: {
        'JavaScript': 'زبان برنامه‌نویسی پویا برای توسعه وب',
        'Python': 'زبان همه‌کاره برای توسعه وب، علوم داده و هوش مصنوعی',
        'React': 'کتابخانه محبوب جاوااسکریپت برای ساخت رابط‌های کاربری',
        'Node.js': 'محیط اجرای جاوااسکریپت برای توسعه سمت سرور',
        'Java': 'زبان برنامه‌نویسی شیءگرا برای برنامه‌های سازمانی',
        'C++': 'زبان برنامه‌نویسی با کارایی بالا برای برنامه‌نویسی سیستم',
        'Go': 'زبان سریع و کارآمد برای سرویس‌های ابری',
        'Rust': 'زبان برنامه‌نویسی سیستم با تمرکز بر امنیت و کارایی'
    }
};

function showLanguageInfo(language) {
    const lang = document.documentElement.lang === 'fa' ? 'fa' : 'en';
    alert(`${language}: ${languageDescriptions[lang][language]}`);
}

// Modal functionality
function openModal(memberData) {
    const modal = document.getElementById('memberModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${memberData.image}" alt="${memberData.name}" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem;">
        <h2>${memberData.name}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1rem;">${memberData.role}</p>
        <p style="margin-bottom: 1rem;">${memberData.description}</p>
        <div>
            ${memberData.skills.map(skill => `<span class="skills-tag">${skill}</span>`).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
}

// Team members data
const teamMembers = [
    {
        name: 'Abol',
        role: 'Full Stack Developer',
        description: 'Passionate about creating seamless user experiences and robust backend systems.',
        skills: ['JavaScript', 'React', 'Node.js', 'Python'],
        image: 'images/abol.jpg'
    },
    {
        name: 'Araz',
        role: 'UI/UX Designer',
        description: 'Creative designer focused on intuitive interfaces and exceptional user experiences.',
        skills: ['Figma', 'Adobe XD', 'CSS', 'Prototyping'],
        image: 'images/araz.jpg'
    },
    {
        name: 'M',
        role: 'Backend Engineer',
        description: 'Nothing Speacial.',
        skills: ['Any', 'F#', 'Data', 'Py'],
        image: 'images/m.jpg'
    },
    {
        name: 'MIGILI',
        role: 'full-stack',
        description: 'Expert in Everything.',
        skills: ['WEB', 'SOFTWARE', 'Python', 'JavaScript'],
        image: 'images/migili.jpg'
    },
    {
        name: 'Zahra',
        role: 'Web Designer',
        description: 'Specialized in Web and user experience.',
        skills: ['Flutter', 'CSS', 'HTML', 'Kotlin'],
        image: 'images/zahra.jpg'
    },
    {
        name: 'Mahdieh',
        role: 'Data Scientist',
        description: 'Expert in machine learning algorithms and data analytics solutions.',
        skills: ['C#', 'MySQL', 'Rust', 'SQL'],
        image: 'images/mahdieh.jpg'
    }
];

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Create hexagon connections after DOM is loaded
    setTimeout(createHexagonConnections, 100);
    
    // Recreate connections on window resize
    window.addEventListener('resize', function() {
        setTimeout(createHexagonConnections, 100);
    });
    
    // Add click handlers to team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            openModal(teamMembers[index]);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('memberModal');
    if (event.target === modal) {
        closeModal();
    }
};
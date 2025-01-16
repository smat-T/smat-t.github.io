// Project data
const projectsData = {
    'expense-tracker': {
        title: 'GraceNet Social Network',
        description: 'A comprehensive expense tracking application that helps users manage their personal finances. Features include expense categorization, budget planning, and detailed financial reports.',
        images: [
            'images/gracenet/gNet01.png',
            'images/gracenet/gNet02.png',
            'images/gracenet/gNet03.png',
            'images/gracenet/gNet04.png',
            'images/gracenet/gNet05.png',
            'images/gracenet/gNet06.png',
            'images/gracenet/gNet07.png',
            'images/gracenet/gNet08.png',
            'images/gracenet/gNet09.png',
            'images/gracenet/gNet10.png',
            'images/gracenet/gNet11.png',
            'images/gracenet/gNet12.png',
            'images/gracenet/gNet13.png'
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
        liveDemo: '#',
        sourceCode: '#'
    },
    'greeny-earth': {
        title: 'H4k3r Ch47 S9h3r3',
        description: 'An environmental awareness platform that connects eco-conscious individuals with sustainable initiatives. Includes features for tracking carbon footprint and finding local green events.',
        images: [
            'images/hcs/hcs1.png',
            'images/hcs/hcs2.png',
            'images/hcs/hcs3.png',
            'images/hcs/hcs4.png',
            'images/hcs/hcs5.png',
            'images/hcs/hcs6.png',
            'images/hcs/hcs7.png',
            'images/hcs/hcs8.png'
        ],
        technologies: ['React', 'PHP', 'HTML', 'MySQL', 'CSS', 'JS'],
        liveDemo: '#',
        sourceCode: '#'
    },
    'netflix-clone': {
        title: 'Netflix Clone',
        description: 'A streaming platform clone featuring a modern UI, user authentication, and dynamic content loading. Implements video playback and personalized recommendations.',
        images: [
            'images/ecaf/ecaf01.png',
            'images/ecaf/ecaf02.png',
            'images/ecaf/ecaf03.png',
            'images/ecaf/ecaf04.png',
            'images/ecaf/ecaf05.png',
            'images/ecaf/ecaf06.png',
            'images/ecaf/ecaf07.png',
            'images/ecaf/ecaf08.png',
            'images/ecaf/ecaf09.png',
            'images/ecaf/ecaf10.png',
            'images/ecaf/ecaf11.png',
            'images/ecaf/ecaf12.png',
            'images/ecaf/ecaf13.png',
            'images/ecaf/ecaf14.png'
        ],
        technologies: ['JavaScript', 'MySQL', 'PHP', 'CSS', 'HTML'],
        liveDemo: '#',
        sourceCode: 'https://github.com/smat-T/ecaf'
    },
    'budget-system': {
        title: 'Budget Management System',
        description: 'A comprehensive budgeting system for businesses and organizations. Features include expense tracking, budget allocation, and financial reporting tools.',
        images: [
            'images/projects/budget-system/dashboard.png',
            'images/projects/budget-system/reports.png',
            'images/projects/budget-system/analytics.png'
        ],
        technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'AWS'],
        liveDemo: 'https://budget-system-demo.com',
        sourceCode: 'https://github.com/username/budget-system'
    },
    'eco-monitor': {
        title: 'Environmental Monitoring',
        description: 'An IoT-based environmental monitoring system that tracks air quality, temperature, and humidity. Includes real-time data visualization and alerts.',
        images: [
            'images/projects/eco-monitor/dashboard.png',
            'images/projects/eco-monitor/analytics.png',
            'images/projects/eco-monitor/alerts.png'
        ],
        technologies: ['Python', 'Flask', 'InfluxDB', 'Grafana', 'MQTT'],
        liveDemo: 'https://eco-monitor-demo.com',
        sourceCode: 'https://github.com/username/eco-monitor'
    },
    'stream-platform': {
        title: 'Streaming Platform',
        description: 'A custom streaming platform with features like live streaming, chat, and content management. Supports multiple video quality options and adaptive streaming.',
        images: [
            'images/projects/stream-platform/home.png',
            'images/projects/stream-platform/stream.png',
            'images/projects/stream-platform/chat.png'
        ],
        technologies: ['Node.js', 'WebRTC', 'Socket.io', 'FFmpeg', 'Redis'],
        liveDemo: 'https://stream-platform-demo.com',
        sourceCode: 'https://github.com/username/stream-platform'
    }
};

// Modal functionality
const initializePortfolioModal = () => {
    const modal = document.querySelector('.project-details-modal');
    const closeBtn = document.querySelector('.close-modal');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    let currentImageIndex = 0;
    let currentImages = [];

    if (!modal || !closeBtn || portfolioItems.length === 0) {
        console.error('Required modal elements not found');
        return;
    }

    // Open modal with project details
    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) {
            console.error('Project data not found for:', projectId);
            return;
        }

        try {
            // Update modal content
            document.querySelector('.modal-title').textContent = project.title;
            document.querySelector('#project-description-text').textContent = project.description;
            
            // Update technologies
            const techList = document.querySelector('.technologies-list');
            techList.innerHTML = project.technologies
                .map(tech => `<li>${tech}</li>`)
                .join('');

            // Update links
            const demoLink = document.querySelector('.live-demo');
            const sourceLink = document.querySelector('.source-code');
            demoLink.href = project.liveDemo;
            sourceLink.href = project.sourceCode;

            // Setup gallery
            currentImages = project.images;
            currentImageIndex = 0;
            updateGallery();

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error('Error updating modal content:', error);
        }
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Update gallery images
    function updateGallery() {
        const galleryContainer = document.querySelector('.gallery-images');
        if (!galleryContainer) return;

        galleryContainer.innerHTML = currentImages
            .map((src, index) => `
                <img src="${src}" 
                    alt="Project screenshot ${index + 1}" 
                    class="${index === currentImageIndex ? 'active' : ''}"
                    onerror="this.src='images/placeholder.png'"
                >
            `)
            .join('');
    }

    // Navigate gallery
    function navigateGallery(direction) {
        currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
        updateGallery();
    }

    // Event Listeners
    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = item.getAttribute('data-project');
            console.log('Opening project:', projectId);
            openModal(projectId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    const prevBtn = document.querySelector('.gallery-nav.prev');
    const nextBtn = document.querySelector('.gallery-nav.next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => navigateGallery(-1));
        nextBtn.addEventListener('click', () => navigateGallery(1));
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
};

// Initialize modal when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolioModal);
} else {
    initializePortfolioModal();
}

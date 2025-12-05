/**
 * Rallio SPA Application
 * Sports-Tech SaaS Platform by Tresio
 * 
 * Object-Oriented Single Page Application Framework
 */

// ============================================
// Base View Class
// ============================================
class View {
    constructor(app) {
        this.app = app;
        this.container = null;
    }

    /**
     * Render the view content
     * @returns {string} HTML content
     */
    render() {
        throw new Error('render() must be implemented by subclass');
    }

    /**
     * Called after the view is mounted to the DOM
     */
    afterMount() {
        // Override in subclass if needed
    }

    /**
     * Called before the view is unmounted from the DOM
     */
    beforeUnmount() {
        // Override in subclass if needed
    }

    /**
     * Simulate AJAX data fetch
     * @param {string} endpoint 
     * @param {number} delay 
     * @returns {Promise}
     */
    async fetchData(endpoint, delay = 500) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.getMockData(endpoint));
            }, delay);
        });
    }

    /**
     * Get mock data for simulated API calls
     * @param {string} endpoint 
     * @returns {Object}
     */
    getMockData(endpoint) {
        const data = {
            features: [
                {
                    id: 1,
                    icon: '🎯',
                    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop',
                    title: 'Smart Booking System',
                    shortDesc: 'Intelligent scheduling that eliminates conflicts',
                    fullDesc: 'Our AI-powered booking system analyzes court availability, player preferences, and historical data to provide optimal scheduling recommendations. Say goodbye to double bookings and scheduling conflicts forever.',
                    benefits: [
                        'Real-time availability updates',
                        'Conflict detection & prevention',
                        'Automated waitlist management',
                        'Smart time slot recommendations'
                    ]
                },
                {
                    id: 2,
                    icon: '📋',
                    image: 'https://www.roller.software/hubfs/Understanding%20%26%20Choosing%20Queue%20Management%20Systems_Social(2_1)-1.png',
                    title: 'Queue Management',
                    shortDesc: 'Fair and transparent queue system',
                    fullDesc: 'Revolutionary queue management that ensures every player gets fair access to courts. Our transparent system shows real-time positions and estimated wait times.',
                    benefits: [
                        'Live queue position tracking',
                        'Estimated wait time display',
                        'Priority queue options',
                        'SMS/Push notifications'
                    ]
                },
                {
                    id: 3,
                    icon: '📊',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                    title: 'Analytics Dashboard',
                    shortDesc: 'Insights for players and court owners',
                    fullDesc: 'Comprehensive analytics that help court owners optimize operations and players track their playing patterns. Make data-driven decisions with beautiful visualizations.',
                    benefits: [
                        'Court utilization reports',
                        'Peak hours analysis',
                        'Revenue tracking',
                        'Player engagement metrics'
                    ]
                },
                {
                    id: 4,
                    icon: '💳',
                    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                    title: 'Seamless Payments',
                    shortDesc: 'Multiple payment options integrated',
                    fullDesc: 'Accept payments through various channels including credit cards, e-wallets, and bank transfers. Automated invoicing and receipt generation included.',
                    benefits: [
                        'Multiple payment gateways',
                        'Auto-generated invoices',
                        'Refund management',
                        'Payment history tracking'
                    ]
                },
                {
                    id: 5,
                    icon: '🔔',
                    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop',
                    title: 'Smart Notifications',
                    shortDesc: 'Never miss a booking or update',
                    fullDesc: 'Stay informed with intelligent notifications that alert you about bookings, cancellations, and special promotions without overwhelming your inbox.',
                    benefits: [
                        'Customizable alert preferences',
                        'Multi-channel delivery',
                        'Booking reminders',
                        'Promotional updates'
                    ]
                },
                {
                    id: 6,
                    icon: '👥',
                    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
                    title: 'Community Features',
                    shortDesc: 'Connect with fellow players',
                    fullDesc: 'Build your badminton community with features like player profiles, match history, and social connections. Find partners and organize tournaments easily.',
                    benefits: [
                        'Player profiles & ratings',
                        'Match history tracking',
                        'Tournament organization',
                        'Social connections'
                    ]
                }
            ],
            pricing: [
                {
                    id: 1,
                    name: 'Court Owner',
                    subtitle: 'For courts, venues & clubs',
                    price: 5000,
                    period: 'month per court',
                    featured: true,
                    features: [
                        'Complete booking management',
                        'Real-time court availability',
                        'Queue management system',
                        'Full analytics dashboard',
                        'Payment processing',
                        'Staff account management',
                        'Custom branding options',
                        'SMS & email notifications',
                        'Priority customer support',
                        'Mobile app integration'
                    ]
                }
            ]
        };

        return data[endpoint] || null;
    }
}

// ============================================
// Home View Class
// ============================================
class HomeView extends View {
    constructor(app) {
        super(app);
    }

    render() {
        return `
            <!-- Hero Section -->
            <section class="hero" id="hero">
                <div class="container hero-container">
                    <div class="hero-content">
                        <div class="hero-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>Powered by Tresio</span>
                        </div>
                        <h1 class="hero-title">
                            Book Courts with <span>Fairness</span> & <span>Transparency</span>
                        </h1>
                        <p class="hero-description">
                            The ultimate solution for Zamboanga City's badminton community. 
                            Say goodbye to double bookings, manual scheduling headaches, and long queue times.
                        </p>
                        <div class="hero-buttons">
                            <a href="#cta" class="btn btn-primary">
                                Launch App
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a href="#features" class="btn btn-glass">Learn More</a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="hero-card float-animation">
                            <div class="hero-card-content">
                                <div class="hero-card-header">
                                    <div class="hero-card-icon">🏸</div>
                                    <div>
                                        <div class="hero-card-title">Available Courts</div>
                                        <div class="hero-card-subtitle">Today's Schedule</div>
                                    </div>
                                </div>
                                <div class="booking-preview">
                                    <div class="booking-slot">
                                        <div class="slot-info">
                                            <span class="slot-court">Court A - Premium</span>
                                            <span class="slot-time">9:00 AM - 10:00 AM</span>
                                        </div>
                                        <span class="slot-status available">Available</span>
                                    </div>
                                    <div class="booking-slot">
                                        <div class="slot-info">
                                            <span class="slot-court">Court B - Standard</span>
                                            <span class="slot-time">9:00 AM - 10:00 AM</span>
                                        </div>
                                        <span class="slot-status booked">Booked</span>
                                    </div>
                                    <div class="booking-slot">
                                        <div class="slot-info">
                                            <span class="slot-court">Court C - Premium</span>
                                            <span class="slot-time">10:00 AM - 11:00 AM</span>
                                        </div>
                                        <span class="slot-status available">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="hero-carousel">
                <p class="carousel-label">Trusted by Top Courts in Zamboanga City</p>
                <div class="carousel-track">
                    <div class="carousel-slide">
                        <div class="court-logo">🏸 ZC Sports Hub</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">🏆 Champions Arena</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">⭐ Premier Courts</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">🎯 Ace Badminton</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">🏅 Elite Sports Center</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">🏸 ZC Sports Hub</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">🏆 Champions Arena</div>
                    </div>
                    <div class="carousel-slide">
                        <div class="court-logo">⭐ Premier Courts</div>
                    </div>
                </div>
            </div>

            <!-- Curved Divider -->
            <div class="curve-divider">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            <!-- CTA Section -->
            <section class="cta-section" id="cta">
                <div class="container">
                    <div class="cta-wrapper">
                        <div class="cta-content">
                            <span class="cta-label">Ready to Play?</span>
                            <h2 class="cta-title">Experience the Future of Court Booking</h2>
                            <p class="cta-description">
                                Join hundreds of players who have already transformed their booking experience. 
                                No more waiting in line or dealing with scheduling conflicts.
                            </p>
                            <div class="cta-features">
                                <div class="cta-feature">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Instant booking confirmation</span>
                                </div>
                                <div class="cta-feature">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Real-time queue updates</span>
                                </div>
                                <div class="cta-feature">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Fair and transparent system</span>
                                </div>
                            </div>
                            <a href="#" class="btn btn-primary" id="launch-app-btn">
                                Launch App Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <div class="cta-visual">
                            <div class="phone-mockup">
                                <div class="phone-screen">
                                    <div class="phone-notch"></div>
                                    <div class="phone-content">
                                        <div class="phone-header">
                                            <h4>🏸 Rallio</h4>
                                            <p>Smart Court Booking</p>
                                        </div>
                                        <div class="phone-card">
                                            <div class="phone-card-title">Quick Book</div>
                                            <div class="phone-mini-slots">
                                                <div class="mini-slot">
                                                    <span>Court A</span>
                                                    <span style="color: #4ade80;">Book →</span>
                                                </div>
                                                <div class="mini-slot">
                                                    <span>Court B</span>
                                                    <span style="color: #fbbf24;">Queue</span>
                                                </div>
                                                <div class="mini-slot">
                                                    <span>Court C</span>
                                                    <span style="color: #4ade80;">Book →</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="phone-card">
                                            <div class="phone-card-title">Your Position</div>
                                            <div style="text-align: center; padding: 10px;">
                                                <span style="font-size: 2rem; font-weight: bold; color: #4ade80;">#3</span>
                                                <p style="font-size: 0.7rem; color: rgba(255,255,255,0.6);">~15 min wait</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="features-section" id="features">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">What We Offer</span>
                        <h2 class="section-title">Feature Highlights</h2>
                        <p>Discover how Rallio transforms your badminton experience with cutting-edge features designed for players and court owners alike.</p>
                    </div>
                    <div class="features-grid" id="features-grid">
                        <!-- Features will be loaded dynamically -->
                    </div>
                </div>
            </section>

            <!-- Curved Divider -->
            <div class="curve-divider">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,50 C360,0 1080,100 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>

            <!-- Pricing Section -->
            <section class="pricing-section" id="pricing">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Simple Pricing</span>
                        <h2 class="section-title">For Court Owners</h2>
                        <p>One simple plan to manage your court, venue, or club. Players use Rallio for free!</p>
                    </div>
                    <div class="pricing-preview pricing-single" id="pricing-preview">
                        <!-- Pricing card will be loaded dynamically -->
                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section class="team-section" id="team">
                <div class="container">
                    <div class="section-header">
                        <span class="section-label">Our Team</span>
                        <h2 class="section-title">Meet the People Behind Rallio</h2>
                        <p>A passionate team dedicated to revolutionizing badminton court booking in Zamboanga City.</p>
                    </div>
                    <div class="team-grid">
                        <div class="team-card glass-card">
                            <div class="team-avatar">
                                <img src="./assets/images/Jelaine.jpg" alt="Jelaine Macias">
                            </div>
                            <div class="team-info">
                                <h3 class="team-name">Jelaine Macias</h3>
                                <p class="team-role">Project Manager</p>
                            </div>
                        </div>
                        <div class="team-card glass-card">
                            <div class="team-avatar">
                                <img src="./assets/images/Margie.jpg" alt="Margie Marie Clarion">
                            </div>
                            <div class="team-info">
                                <h3 class="team-name">Margie Marie Clarion</h3>
                                <p class="team-role">UI/UX</p>
                            </div>
                        </div>
                        <div class="team-card glass-card">
                            <div class="team-avatar">
                                <img src="./assets/images/Vhan.jpg" alt="Vhan Louie Bulanadi">
                            </div>
                            <div class="team-info">
                                <h3 class="team-name">Vhan Louie Bulanadi</h3>
                                <p class="team-role">Quality Assurance</p>
                            </div>
                        </div>
                        <div class="team-card glass-card">
                            <div class="team-avatar">
                                <img src="./assets/images/Ahmad.jpg" alt="Ahmad Yahiya">
                            </div>
                            <div class="team-info">
                                <h3 class="team-name">Ahmad Yahiya</h3>
                                <p class="team-role">Lead Programmer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    async afterMount() {
        await this.loadFeatures();
        await this.loadPricingPreview();
        this.setupEventListeners();
    }

    async loadFeatures() {
        const grid = document.getElementById('features-grid');
        if (!grid) return;

        grid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

        const features = await this.fetchData('features', 300);
        const previewFeatures = features.slice(0, 3);

        grid.innerHTML = previewFeatures.map(feature => `
            <div class="feature-card glass-card">
                <div class="feature-image">
                    <img src="${feature.image}" alt="${feature.title}" loading="lazy">
                </div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.shortDesc}</p>
                <a href="#" class="feature-link" data-nav="features" data-feature="${feature.id}">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        `).join('');
    }

    async loadPricingPreview() {
        const container = document.getElementById('pricing-preview');
        if (!container) return;

        container.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';

        const pricing = await this.fetchData('pricing', 300);
        const plan = pricing[0];

        container.innerHTML = `
            <div class="pricing-card featured single-plan">
                <span class="pricing-badge">Court Owner Plan</span>
                <div class="pricing-header">
                    <h3 class="pricing-title">${plan.name}</h3>
                    <p class="pricing-subtitle">${plan.subtitle}</p>
                </div>
                <div class="pricing-price">
                    ₱${plan.price.toLocaleString()}
                    <span>/${plan.period}</span>
                </div>
                <ul class="pricing-features">
                    ${plan.features.map(f => `
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            ${f}
                        </li>
                    `).join('')}
                </ul>
                <a href="#" class="btn btn-primary">Get Started</a>
                <p class="pricing-note">Players always use Rallio for free</p>
            </div>
        `;
    }

    setupEventListeners() {
        // Feature links
        document.querySelectorAll('[data-nav="features"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.app.navigate('features');
            });
        });

        // Pricing links
        document.querySelectorAll('[data-nav="pricing"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.app.navigate('pricing');
            });
        });
    }
}

// ============================================
// Features View Class
// ============================================
class FeaturesView extends View {
    constructor(app) {
        super(app);
    }

    render() {
        return `
            <section class="view-container">
                <div class="container">
                    <a href="#" class="back-button" data-nav="home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                    <div class="view-header">
                        <span class="section-label">Our Features</span>
                        <h1 class="section-title">Everything You Need</h1>
                        <p>Comprehensive tools designed to revolutionize how you book and manage badminton courts.</p>
                    </div>
                    <div class="features-full-grid" id="features-full-grid">
                        <div class="loading-spinner"><div class="spinner"></div></div>
                    </div>
                </div>
            </section>
        `;
    }

    async afterMount() {
        await this.loadFullFeatures();
        this.setupEventListeners();
    }

    async loadFullFeatures() {
        const grid = document.getElementById('features-full-grid');
        if (!grid) return;

        const features = await this.fetchData('features', 500);

        grid.innerHTML = features.map((feature, index) => `
            <div class="feature-full-card ${index % 2 === 1 ? 'reverse' : ''}">
                <div class="feature-full-image">
                    <img src="${feature.image}" alt="${feature.title}" loading="lazy">
                </div>
                <div class="feature-full-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.fullDesc}</p>
                    <ul class="feature-benefits">
                        ${feature.benefits.map(b => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                ${b}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.querySelectorAll('[data-nav="home"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.app.navigate('home');
            });
        });
    }
}

// ============================================
// Pricing View Class
// ============================================
class PricingView extends View {
    constructor(app) {
        super(app);
    }

    render() {
        return `
            <section class="view-container">
                <div class="container">
                    <a href="#" class="back-button" data-nav="home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                    <div class="view-header">
                        <span class="section-label">Pricing</span>
                        <h1 class="section-title">For Court Owners</h1>
                        <p>One simple plan to manage your court, venue, or club. Players use Rallio for free!</p>
                    </div>
                    <div class="pricing-full-wrapper" id="pricing-full-grid">
                        <div class="loading-spinner"><div class="spinner"></div></div>
                    </div>
                </div>
            </section>
        `;
    }

    async afterMount() {
        await this.loadFullPricing();
        this.setupEventListeners();
    }

    async loadFullPricing() {
        const grid = document.getElementById('pricing-full-grid');
        if (!grid) return;

        const pricing = await this.fetchData('pricing', 500);
        const plan = pricing[0];

        grid.innerHTML = `
            <div class="pricing-full-card featured">
                <div class="pricing-full-header">
                    <span class="pricing-badge">Court Owner Plan</span>
                    <div class="pricing-icon">🏸</div>
                    <h3 class="pricing-title">${plan.name}</h3>
                    <p class="pricing-subtitle">${plan.subtitle}</p>
                    <div class="pricing-price-large">
                        <span class="currency">₱</span>
                        <span class="amount">${plan.price.toLocaleString()}</span>
                        <span class="period">/${plan.period}</span>
                    </div>
                </div>
                <div class="pricing-full-body">
                    <h4 class="features-heading">Everything you need to manage your courts</h4>
                    <ul class="pricing-features-grid">
                        ${plan.features.map(f => `
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                ${f}
                            </li>
                        `).join('')}
                    </ul>
                    <div class="pricing-full-cta">
                        <a href="#" class="btn btn-primary btn-large">Get Started Now</a>
                        <p class="pricing-note">Players always use Rallio for free</p>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        document.querySelectorAll('[data-nav="home"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.app.navigate('home');
            });
        });
    }
}

// ============================================
// Main Application Class
// ============================================
class App {
    constructor() {
        this.currentView = null;
        this.views = {
            home: HomeView,
            features: FeaturesView,
            pricing: PricingView
        };
        this.mainContent = null;
        this.navbar = null;
        this.footer = null;
    }

    /**
     * Initialize the application
     */
    init() {
        this.mainContent = document.getElementById('main-content');
        this.navbar = document.getElementById('navbar');
        this.footer = document.getElementById('footer');

        if (!this.mainContent) {
            console.error('Main content container not found');
            return;
        }

        // Setup navigation scroll effect
        this.setupNavbarScroll();

        // Setup navigation links
        this.setupNavigation();

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            const route = e.state?.route || 'home';
            this.navigate(route, false);
        });

        // Initial route
        const initialRoute = this.getRouteFromHash() || 'home';
        this.navigate(initialRoute, true);
    }

    /**
     * Get route from URL hash
     */
    getRouteFromHash() {
        const hash = window.location.hash.replace('#', '');
        // Map section hashes to valid routes
        const sectionHashes = ['hero', 'cta'];
        if (sectionHashes.includes(hash)) {
            return 'home';
        }
        return hash || null;
    }

    /**
     * Setup navbar scroll effect
     */
    setupNavbarScroll() {
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 50) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }
        });
    }

    /**
     * Setup navigation links
     */
    setupNavigation() {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.getAttribute('href').replace('#', '');
                
                if (route === 'hero' || route === 'cta') {
                    // Scroll to section if on home
                    if (this.currentView instanceof HomeView) {
                        const section = document.getElementById(route);
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        this.navigate('home');
                    }
                } else {
                    this.navigate(route);
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        let overlay = document.querySelector('.mobile-menu-overlay');
        
        // Create overlay if it doesn't exist
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);
        }
        
        const toggleMobileMenu = () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('mobile-active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('mobile-active') ? 'hidden' : '';
        };
        
        const closeMobileMenu = () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('mobile-active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', closeMobileMenu);
        
        // Close menu when clicking a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    /**
     * Navigate to a route
     * @param {string} route 
     * @param {boolean} updateHistory 
     */
    async navigate(route, updateHistory = true) {
        const ViewClass = this.views[route];
        
        if (!ViewClass) {
            console.error(`Route "${route}" not found`);
            return;
        }

        // Unmount current view
        if (this.currentView && typeof this.currentView.beforeUnmount === 'function') {
            this.currentView.beforeUnmount();
        }

        // Page exit animation
        this.mainContent.classList.add('page-exit');
        this.mainContent.classList.add('page-exit-active');

        await this.delay(200);

        // Create and render new view
        this.currentView = new ViewClass(this);
        this.mainContent.innerHTML = this.currentView.render();

        // Update active nav link
        this.updateActiveNavLink(route);

        // Page enter animation
        this.mainContent.classList.remove('page-exit', 'page-exit-active');
        this.mainContent.classList.add('page-enter');

        await this.delay(50);

        this.mainContent.classList.add('page-enter-active');
        this.mainContent.classList.remove('page-enter');

        await this.delay(300);

        this.mainContent.classList.remove('page-enter-active');

        // Call afterMount
        if (typeof this.currentView.afterMount === 'function') {
            await this.currentView.afterMount();
        }

        // Update URL
        if (updateHistory) {
            history.pushState({ route }, '', `#${route}`);
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Update active navigation link
     * @param {string} route 
     */
    updateActiveNavLink(route) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            const linkRoute = link.getAttribute('href').replace('#', '');
            if (linkRoute === route || (route === 'home' && (linkRoute === 'hero' || linkRoute === ''))) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Utility delay function
     * @param {number} ms 
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ============================================
// Initialize Application on DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});



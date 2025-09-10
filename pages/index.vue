<template>
  <Head>
    <Title>Miami Exotic Cars</Title>
    <Meta
      name="description"
      content="Discover Miami's largest fleet of exotic cars, luxury yachts, and exclusive properties for rent. Enjoy premium service and seamless booking with Miami Exotic Rents."
    />
  </Head>
  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="hero-title">
        <span class="text-white">Drive</span>
        <span class="text-gold glow">Luxury</span>
      </h1>
      <h2 class="hero-subtitle">
        <span class="text-white">Live Miami</span>
      </h2>

      <p class="hero-description">
        Experience Miami's most exclusive fleet of exotic cars, luxury yachts, and premium properties
      </p>

      <!-- CTA Buttons -->
      <div class="hero-buttons">
        <a href="/exotic_cars" class="btn btn-gold">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
            />
          </svg>
          Rent a Car
        </a>
        <a href="/yachts" class="btn btn-white">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13.5L12 8L21 13.5V19.5C21 20.3 20.3 21 19.5 21H4.5C3.7 21 3 20.3 3 19.5V13.5Z" />
            <path d="M12 8L3 13.5L12 19L21 13.5L12 8Z" />
          </svg>
          Charter a Yacht
        </a>
        <a href="/houses" class="btn btn-outline">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21L12 12L21 21V3C21 2.4 20.6 2 20 2H4C3.4 2 3 2.4 3 3V21Z" />
          </svg>
          Luxury Stays
        </a>
      </div>

      <!-- Search Bar -->
      <!-- <div class="search-container">
        <div class="search-grid">
          <div class="search-item">
            <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
              />
            </svg>
            <div>
              <p class="search-label">Pick Date</p>
              <p class="search-value">Select dates</p>
            </div>
          </div>

          <div class="search-item">
            <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"
              />
            </svg>
            <div>
              <p class="search-label">Vehicle Type</p>
              <p class="search-value">All Categories</p>
            </div>
          </div>

          <div class="search-item">
            <svg class="search-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <div>
              <p class="search-label">Pickup Location</p>
              <p class="search-value">Miami Beach</p>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </section>

  <!-- About Us -->
  <section id="about" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">About</span>
          <span class="text-gold">Us</span>
        </h2>
        <p class="section-description">
          At Miami Exotic Rents, we curate Miami's most exclusive fleet of exotic cars, luxury yachts, and premium
          properties — delivering white-glove experiences tailored to your lifestyle.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5 2-4z" />
            </svg>
          </div>
          <h3 class="feature-title">Our Story</h3>
          <p class="feature-description">
            Born in Miami, we’ve grown from a boutique rental service into a full-service luxury concierge brand trusted
            by discerning clients worldwide.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 5 6 .9-4.5 4.4 1.1 6.3L12 16.9 6.4 18.6l1.1-6.3L3 7.9 9 7l3-5z" />
            </svg>
          </div>
          <h3 class="feature-title">Luxury Standards</h3>
          <p class="feature-description">
            Impeccably maintained assets, verified partners, and a commitment to excellence in every detail.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 1C8.13 1 5 4.13 5 8v3H4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4v-8H7V8a5 5 0 0 1 10 0v4h-1v8h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-1V8c0-3.87-3.13-7-7-7z"
              />
            </svg>
          </div>
          <h3 class="feature-title">White-Glove Service</h3>
          <p class="feature-description">
            From seamless bookings to 24/7 concierge, we handle every request with precision and privacy.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V16h-2v-3.17A3.001 3.001 0 0 1 12 7z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Trusted & Insured</h3>
          <p class="feature-description">
            Fully insured rentals, transparent policies, and a reputation built on reliability.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Fleet Showcase -->
  <section id="fleet" class="fleet-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">Exotic</span>
          <span class="text-gold">Fleet</span>
        </h2>
        <p class="section-description">
          Miami's most exclusive collection of supercars and luxury vehicles, ready for your ultimate driving experience
        </p>
      </div>

      <div class="fleet-grid" id="fleetGrid">
        <!-- Cars will be populated by JavaScript -->
      </div>

      <div class="section-cta">
        <a href="/exotic_cars" class="btn btn-gold btn-large">
          View Complete Fleet
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Yacht Section -->
  <section id="yachts" class="yacht-section">
    <div class="yacht-hero">
      <div class="yacht-overlay"></div>
      <div class="yacht-content">
        <h2 class="yacht-title">
          <span class="text-white">Luxury</span>
          <span class="text-gold">Yachts</span>
        </h2>
        <p class="yacht-subtitle">Experience Miami's finest yacht charter collection</p>
      </div>
    </div>

    <div class="container">
      <div class="yacht-grid" id="yachtGrid">
        <!-- Yachts will be populated by JavaScript -->
      </div>

      <div class="section-cta">
        <a href="/yachts" class="btn btn-gold btn-large">
          View All Yachts
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Properties Section -->
  <section id="properties" class="properties-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">Luxury</span>
          <span class="text-gold">Properties</span>
        </h2>
        <p class="section-description">
          Exclusive villas, penthouses, and waterfront estates in Miami's most prestigious locations
        </p>
      </div>

      <div class="properties-grid" id="propertiesGrid">
        <!-- Properties will be populated by JavaScript -->
      </div>

      <div class="section-cta">
        <a href="/properties" class="btn btn-gold btn-large">
          View All Properties
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section id="why-choose" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">Why Choose</span>
          <span class="text-gold">Miami Exotic</span>
        </h2>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
              />
            </svg>
          </div>
          <h3 class="feature-title">1 Hour Delivery</h3>
          <p class="feature-description">Lightning-fast delivery to any location in Miami</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Fully Insured</h3>
          <p class="feature-description">Complete coverage for your peace of mind</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M5,16L3,14V9A2,2 0 0,1 5,7H7.5L9.5,3H14.5L16.5,7H19A2,2 0 0,1 21,9V14L19,16H18A3,3 0 0,1 15,19A3,3 0 0,1 12,16A3,3 0 0,1 15,13A3,3 0 0,1 18,16V14L19,13V9H16L14,5H10L8,9H5V13L6,14V16M15,17A1,1 0 0,0 16,16A1,1 0 0,0 15,15A1,1 0 0,0 14,16A1,1 0 0,0 15,17Z"
              />
            </svg>
          </div>
          <h3 class="feature-title">Largest Fleet</h3>
          <p class="feature-description">Miami's most extensive luxury vehicle collection</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12,3C17.5,3 22,6.58 22,11C22,13.4 20.84,15.5 19,16.9V21L17,19H12C6.5,19 2,15.42 2,11C2,6.58 6.5,3 12,3M12,5C7.59,5 4,7.69 4,11C4,14.31 7.59,17 12,17H16V18.5L18.5,16C19.87,15 21,13.13 21,11C21,7.69 17.41,5 12,5Z"
              />
            </svg>
          </div>
          <h3 class="feature-title">24/7 Concierge</h3>
          <p class="feature-description">Round-the-clock premium customer service</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ftco-degree-bg {
  background-image: url("https://miamiexotics.b-cdn.net/img/bg_1.jpg");
}
</style>

<script>
export default {
  created: function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
};
</script>

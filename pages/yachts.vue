<template>
  <Head>
    <Title>Yachts</Title>
    <Meta
      name="description"
      content="Browse Miami's best selection of luxury yachts for rent. Enjoy premium vessels, expert service, and seamless booking with Miami Exotic Rents."
    />
  </Head>

  <section class="yacht-section">
    <div class="yacht-hero">
      <div class="yacht-overlay"></div>
      <div class="yacht-content">
        <h1 class="yacht-title">
          <span class="text-white">Luxury</span>
          <span class="text-gold">Yachts</span>
        </h1>
        <p class="yacht-subtitle">Experience Miami's finest yacht charter collection</p>
      </div>
    </div>

    <!-- Yacht Controls -->
    <!-- <div class="yacht-controls">
      <div class="container">
        <div class="controls-container">
          <div class="filter-group">
            <select class="filter-select" id="categoryFilter">
              <option value="all">All Categories</option>
              <option value="Italian Luxury Yacht">Italian Luxury</option>
              <option value="British Motor Yacht">British Motor</option>
              <option value="High-Performance Yacht">High-Performance</option>
            </select>
            <select class="filter-select" id="sizeFilter">
              <option value="all">All Sizes</option>
              <option value="small">Under 90 ft</option>
              <option value="medium">90-100 ft</option>
              <option value="large">Over 100 ft</option>
            </select>
          </div>
          <div class="filter-group">
            <select class="sort-select" id="sortSelect">
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="size-small">Size: Small to Large</option>
              <option value="size-large">Size: Large to Small</option>
            </select>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Yacht Cards Grid (ftco-section merged) -->
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row">
          <div v-if="pending">Loading...</div>
          <div v-else v-for="(yacht, index) in yachts" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
            <div
              class="car-card"
              :data-aos="'fade-up'"
              :data-aos-delay="yacht.id ? yacht.id * 100 : index * 100"
              @click="$router.push({ path: '/custom_request', query: { vehicle: yacht.title } })"
              style="cursor: pointer;"
            >
              <div class="car-image">
                <img
                  :src="`https:${yacht.frontImage?.fields?.file?.url + '?w=683&h=1024' || yacht.image}`"
                  :alt="yacht.title || yacht.name"
                  loading="lazy"
                />
                <div class="car-badge">{{ yacht.category || "Luxury" }}</div>
                <div class="car-price">${{ yacht.cost4Hours }}/4 hours</div>
              </div>
              <div class="car-details">
                <h3 class="car-name">{{ yacht.title || yacht.name }}</h3>
                <div class="">${{ yacht.cost6Hours }}/6 hours</div>
                <div class="">${{ yacht.cost8Hours }}/8 hours</div>
                <br />
                <div class="car-specs" v-if="yacht.specs">
                  <div class="spec-item">
                    <div class="spec-label">
                      <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>
                      Length
                    </div>
                    <span class="spec-value">{{ yacht.specs.length }}</span>
                  </div>
                  <div class="spec-item">
                    <div class="spec-label">
                      <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.83 3.83C10.5 13.5 9.5 14 8.5 14H7v2h1.5c1.54 0 2.96-.71 3.93-1.93L13.5 12.5c.2-.27.52-.5.85-.5h2.65L19 18h1z"
                        />
                      </svg>
                      Passengers
                    </div>
                    <span class="spec-value">{{ yacht.specs.passengers }}</span>
                  </div>
                  <div class="spec-item">
                    <div class="spec-label">
                      <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        />
                      </svg>
                      Crew
                    </div>
                    <span class="spec-value">{{ yacht.specs.crew }}</span>
                  </div>
                </div>
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${yacht.title}`}}"
                  class="btn btn-outline py-2 mr-1"
                  >Charter Now
                </nuxt-link>
                <nuxt-link
                  :to="`/yacht/${yacht.title ? yacht.title.toLowerCase().replace(/\s+/g, '-') : ''}`"
                  class="btn btn-outline py-2 mr-1"
                >
                  Details
                  <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Yachts Section -->
    <section class="why-choose-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Our Yachts</h2>
          <div class="luxury-divider"></div>
          <p class="section-subtitle">
            Discover the unparalleled luxury and exceptional service that sets our yacht collection apart from the rest
          </p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-ship"></i>
            </div>
            <h3 class="feature-title">Premium Fleet</h3>
            <p class="feature-description">
              Our meticulously maintained fleet features the world's most prestigious yacht brands, ensuring
              uncompromising quality and luxury for every charter.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-user-tie"></i>
            </div>
            <h3 class="feature-title">Professional Crew</h3>
            <p class="feature-description">
              Experienced captains and attentive crew members provide exceptional service, ensuring your safety and
              comfort throughout your maritime journey.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-crown"></i>
            </div>
            <h3 class="feature-title">Luxury Amenities</h3>
            <p class="feature-description">
              From gourmet galleys to spa facilities, our yachts are equipped with world-class amenities to create
              unforgettable experiences on the water.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-water"></i>
            </div>
            <h3 class="feature-title">Miami Waters</h3>
            <p class="feature-description">
              Explore Miami's stunning coastline, pristine beaches, and exclusive destinations with our intimate
              knowledge of local waters and hidden gems.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-concierge-bell"></i>
            </div>
            <h3 class="feature-title">Personalized Service</h3>
            <p class="feature-description">
              Every charter is tailored to your preferences, from custom itineraries to specialized catering, ensuring a
              truly personalized luxury experience.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3 class="feature-title">Safety First</h3>
            <p class="feature-description">
              All our yachts meet the highest safety standards with regular inspections, modern navigation equipment,
              and comprehensive insurance coverage.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">
            <span class="text-gold glow">Embark on Unparalleled Luxury</span>
          </h2>
          <p class="cta-description">
            Where sophistication meets the sea. Discover Miami's most exclusive yacht charter experience, crafted for
            the discerning few who demand nothing less than perfection.
          </p>
          <div class="cta-buttons">
            <a
              href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20chartering%20a%20luxury%20yacht.%20Can%20you%20please%20provide%20me%20with%20more%20information%20about%20your%20available%20yachts%20and%20pricing?"
              class="btn btn-gold btn-large"
              target="_blank"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
              Charter a Yacht
            </a>
            <a
              href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'd%20like%20to%20learn%20more%20about%20your%20yacht%20charter%20packages%20and%20available%20dates%20for%20booking."
              class="btn btn-outline btn-large"
              target="_blank"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                />
              </svg>
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import "../assets/css/yachts.css";

let yachts = [];
console.log("setup yacht");

const {data, pending, error} = await useFetch("/api/get/yachts/", {
  onResponse({request, response, options}) {
    yachts = response._data.data;
  },
});
</script>

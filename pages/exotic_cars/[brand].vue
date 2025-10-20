<template>
  <Head>
    <Title>{{ capitalizedBrand }} Cars - Miami Exotic Cars</Title>
    <Meta
      name="description"
      :content="`Rent luxury ${capitalizedBrand} vehicles in Miami. Premium ${capitalizedBrand} car rental service with the finest selection of exotic cars.`"
    />
  </Head>
  
  <!-- Fleet Section -->
  <section class="fleet-section">
    <div class="fleet-hero">
      <div class="fleet-overlay"></div>
      <div class="fleet-content">
        <h1 class="fleet-title">
          <span class="text-white">{{ capitalizedBrand }}</span>
          <span class="text-gold">Collection</span>
        </h1>
        <p class="fleet-subtitle">Experience Miami's finest {{ capitalizedBrand }} supercars</p>
      </div>
    </div>
    <div class="filter-container">
      <div class="container">
        <div class="controls-container">
          <div class="filter-group">
            <div class="brand-filter-buttons">
              <button 
                class="btn btn-outline-primary filter-btn me-2 mb-2" 
                :class="{ 'btn-primary text-white': !brand, 'btn-outline-primary': brand }"
                @click="navigateToBrand('')"
              >
                All Brands
              </button>
              <button 
                v-for="maker in makers" 
                :key="maker" 
                class="btn btn-outline-primary filter-btn me-2 mb-2"
                :class="{ 'btn-primary text-white': brand === maker.toLowerCase(), 'btn-outline-primary': brand !== maker.toLowerCase() }"
                @click="navigateToBrand(maker.toLowerCase())"
              >
                {{ maker }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="brandCars.length === 0" class="col-12 text-center py-5">
          <div class="alert alert-info">
            <h4>No {{ capitalizedBrand }} cars available</h4>
            <p>We currently don't have any {{ capitalizedBrand }} vehicles in our fleet.</p>
          </div>
        </div>
        <div
          v-else
          v-for="(car, index) in brandCars"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-4"
        >
          <div
            class="car-card"
            :data-aos="'fade-up'"
            :data-aos-delay="car.id ? car.id * 100 : index * 100"
            @click="$router.push({ path: '/custom_request', query: { vehicle: `${car.model} ${car.maker}` } })"
            style="cursor: pointer;"
          >
            <div class="car-image">
              <img
                :src="car.image"
                :alt="`${car.maker} ${car.model}`"
                loading="lazy"
              />
              <div class="car-badge">{{ car.year }}</div>
              <div class="car-price">${{ car.price }}/day</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ car.maker }} - {{ car.model }}</h3>
              <div class="car-specs" v-if="car.specs">
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                      />
                    </svg>
                    Engine
                  </div>
                  <span class="spec-value">{{ car.specs.engine }}</span>
                </div>
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                    Power
                  </div>
                  <span class="spec-value">{{ car.specs.horsepower }} HP</span>
                </div>
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                    Transmission
                  </div>
                  <span class="spec-value">{{ car.specs.transmission }}</span>
                </div>
              </div>
              <div class="car-actions">
                <button class="btn-primary-custom" @click.stop="$router.push({ path: '/custom_request', query: { vehicle: `${car.model} ${car.maker}` } })">
                  Book Now
                </button>
                <button class="btn-secondary-custom" @click.stop="$router.push(`/car-details/${car.model.toLowerCase().replace(/\s+/g, '-')}`)">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Get the brand from the route parameter
const route = useRoute();
const router = useRouter();

// Get brand directly from route params - this is reactive by default in Nuxt 3
const brand = computed(() => route.params.brand);

// Capitalize the brand name for display
const capitalizedBrand = computed(() => {
  if (!brand.value) return 'All Brands';
  return brand.value.charAt(0).toUpperCase() + brand.value.slice(1).toLowerCase();
});

// Get unique makers for filter buttons
const makers = computed(() => {
  const uniqueMakers = [...new Set(allCars.value.map(car => car.maker))];
  return uniqueMakers.sort();
});

// Filter cars by the brand from URL
const brandCars = computed(() => {
  if (!brand.value) {
    return allCars.value;
  }
  
  const filtered = allCars.value.filter(car => 
    car.maker.toLowerCase() === brand.value.toLowerCase()
  );
  
  return filtered.sort((a, b) => {
    const aOrder = Number.isFinite(parseInt(a.order)) ? parseInt(a.order) : null;
    const bOrder = Number.isFinite(parseInt(b.order)) ? parseInt(b.order) : null;
    if (aOrder === null && bOrder === null) return 0;
    if (aOrder === null) return 1;
    if (bOrder === null) return -1;
    return aOrder - bOrder;
  });
});

// Navigation function
const navigateToBrand = (brandName) => {
  if (!brandName) {
    router.push('/exotic_cars');
  } else {
    router.push(`/exotic_cars/${brandName}`);
  }
};

// Set page title and meta
useHead({
  title: `${capitalizedBrand.value} Luxury Car Rentals - Miami Exotic Cars`,
  meta: [
    {
      name: 'description',
      content: `Rent luxury ${capitalizedBrand.value} vehicles in Miami. Premium ${capitalizedBrand.value} car rental service with the finest selection of exotic cars.`
    }
  ]
});
</script>

<script>
export default {
  created: function () {},
};
</script>

<style scoped>
.filter-btn {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  color: #495057;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
}

.filter-btn:hover {
  background: #e9ecef;
  border-color: #dee2e6;
  color: #212529;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.filter-btn.is-active {
  background: #28a745;
  border-color: #28a745;
  color: white;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
}

.filter-btn.is-active:hover {
  background: #218838;
  border-color: #1e7e34;
  color: white;
}
</style>
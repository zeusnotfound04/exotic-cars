<template>
  <Head>
    <Title>Exotic Cars</Title>
    <Meta
      name="description"
      content="Explore Miami's finest selection of exotic cars for rent. Choose from luxury brands and enjoy premium vehicles, top service, and seamless booking with Miami Exotic Rents."
    />
  </Head>
  <!-- Fleet Section -->
  <section class="fleet-section">
    <div class="fleet-hero">
      <div class="fleet-overlay"></div>
      <div class="fleet-content">
        <h1 class="fleet-title">
          <span class="text-white">Exotic</span>
          <span class="text-gold">Fleet</span>
        </h1>
        <p class="fleet-subtitle">Experience Miami's most exclusive collection of supercars</p>
      </div>
    </div>

    <div class="container">
      <div class="fleet-grid" id="fleetGrid">
        <!-- Cars will be populated by JavaScript -->
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div v-else v-for="(car, index) in sortedCars" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="car-card" :data-aos="'fade-up'" :data-aos-delay="car.id ? car.id * 100 : index * 100">
            <div class="car-image">
              <img
                :src="`https:${car.frontImage?.fields?.file?.url || car.image}`"
                :alt="car.title || car.name"
                loading="lazy"
              />
              <div class="car-badge">Supercar</div>
              <div class="car-price">${{ car.dailyPrice }}/day</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ car.maker }} - {{ car.title }}</h3>
              <div class="car-specs" v-if="car.acceleration && car.horsepower && car.seats">
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                      />
                    </svg>
                    0-60 mph
                  </div>
                  <span class="spec-value">{{ car.acceleration }}</span>
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
                  <span class="spec-value">{{ car.horsepower }}</span>
                </div>
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.83 3.83C10.5 13.5 9.5 14 8.5 14H7v2h1.5c1.54 0 2.96-.71 3.93-1.93L13.5 12.5c.2-.27.52-.5.85-.5h2.65L19 18h1z"
                      />
                    </svg>
                    Capacity
                  </div>
                  <span class="spec-value">{{ car.seats }}</span>
                </div>
              </div>
              <nuxt-link
                :to="{path: '/custom_request', query: {vehicle: `${car.title} ${car.maker}`}}"
                class="btn btn-outline py-2 mr-1"
                >Book Now</nuxt-link
              >
              <nuxt-link
                :to="`/car-details/${car.title ? car.title.toLowerCase().replace(/\s+/g, '-') : ''}`"
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
</template>
<script>
export default {
  created: function () {
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    // document.body.appendChild(script);
  },
};
</script>
<script setup>
import { computed } from "vue";
let cars = [];
console.log("setup cars");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/cars/", {
const {data, pending, error} = await useFetch("/api/get/cars/", {
  onResponse({request, response, options}) {
    cars = response._data.data;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});

// Sort cars by maker alphabetically (case-insensitive)
const sortedCars = computed(() =>
  [...cars].sort((a, b) =>
    (a.maker || "").toLowerCase().localeCompare((b.maker || "").toLowerCase())
  )
);
</script>

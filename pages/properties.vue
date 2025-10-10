<template>
  <Head>
    <Title>Properties</Title>
    <Meta
      name="description"
      content="Browse luxury properties for rent in Miami. Discover exclusive properties with premium amenities and enjoy a seamless booking experience with Miami Exotic Rents."
    />
  </Head>
  <section class="properties-section">
    <div class="properties-hero">
      <div class="properties-overlay"></div>
      <div class="properties-content">
        <h1 class="properties-title">
          <span class="text-white">Luxury</span>
          <span class="text-gold">Properties</span>
        </h1>
        <p class="properties-subtitle">Discover Miami's most exclusive luxury accommodations</p>
      </div>
    </div>
  </section>

  <!-- Location Filter Dropdown -->

  <div class="filter-container">
    <div class="container">
      <div class="controls-container">
        <div class="filter-group">
          <select id="maker-filter" class="form-select filter-select" v-model="selectedLocation">
            <option value="">All Locations</option>
            <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div v-else-if="filteredProperties.length === 0" class="col-12 text-center py-5">
          <p>No properties found for this location.</p>
        </div>
        <div v-else v-for="(property, index) in filteredProperties" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
          <div
            class="car-card"
            :data-aos="'fade-up'"
            :data-aos-delay="property.id ? property.id * 100 : index * 100"
            @click="$router.push({ path: '/custom_request', query: { vehicle: property.title } })"
            style="cursor: pointer;"
          >
            <div class="car-image">
              <img
                :src="`https:${property.frontImage?.fields?.file?.url + '?w=683&h=1024' || property.image}`"
                :alt="property.title || property.name"
                loading="lazy"
              />
              <div class="car-badge">{{ property.category || "Luxury" }}</div>
              <div class="car-price">${{ property.nightlyRate || property.dailyPrice }}/night</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ property.title || property.name }}</h3>
              <div class="car-specs" v-if="property.features">
                <div class="spec-label">
                  <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  Features
                </div>
                <ul class="features-list spec-value">
                  <li v-for="(feature, idx) in property.features" :key="idx">{{ feature }}</li>
                </ul>
              </div>
              <div class="location-label" v-if="property.location">
                <svg
                  class="location-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style="width: 1.1em; height: 1.1em; vertical-align: -0.15em; margin-right: 6px"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  />
                </svg>
                Location: {{ property.location }}
              </div>
              <nuxt-link
                :to="{path: '/custom_request', query: {vehicle: `${property.title}`}}"
                class="btn py-2 mr-1 btn-outline"
              >
                Book Now
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </nuxt-link>
              <nuxt-link
                :to="`/property/${property.title ? property.title.toLowerCase().replace(/\s+/g, '-') : ''}`"
                class="btn btn-secondary py-2 ml-1"
              >
                Details
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
  created: function () {},
};
</script>
<script setup>
import {ref, computed} from "vue";
let properties = [];
const selectedLocation = ref("");

// Fetch properties
const {data, pending, error} = await useFetch("/api/get/properties/", {
  onResponse({request, response, options}) {
    properties = response._data.data;
  },
});

// Get unique locations
const locations = computed(() => {
  const set = new Set();
  properties.forEach((property) => {
    if (property.location) set.add(property.location);
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
});

// Filtered properties by selected location
const filteredProperties = computed(() => {
  if (!selectedLocation.value) return properties;
  return properties.filter((property) => property.location === selectedLocation.value);
});
</script>

<style scoped>
.location-label {
  display: flex;
  align-items: center;
  font-size: 1rem;

  margin-bottom: 1em;
}
.location-icon {
  color: #ffd700;
  flex-shrink: 0;
}
.features-list {
  margin: 0;
  padding-left: 40px;
  list-style-type: disc;
  /* color: #222; */
  font-size: 1rem;
}
.features-list li {
  margin-bottom: 0.25rem;
}
</style>

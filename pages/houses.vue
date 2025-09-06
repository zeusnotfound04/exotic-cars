<template>
  <Head>
    <Title>Houses</Title>
    <Meta
      name="description"
      content="Browse luxury houses for rent in Miami. Discover exclusive properties with premium amenities and enjoy a seamless booking experience with Miami Exotic Rents."
    />
  </Head>
  <section class="properties-hero">
    <div class="properties-overlay"></div>
    <div class="properties-content">
      <h1 class="properties-title">
        <span class="text-white">Luxury</span>
        <span class="text-gold">Properties</span>
      </h1>
      <p class="properties-subtitle">Discover Miami's most exclusive luxury accommodations</p>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div v-else v-for="(property, index) in properties" :key="index" class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="car-card" :data-aos="'fade-up'" :data-aos-delay="property.id ? property.id * 100 : index * 100">
            <div class="car-image">
              <img
                :src="`https:${property.frontImage?.fields?.file?.url || property.image}`"
                :alt="property.title || property.name"
                loading="lazy"
              />
              <div class="car-badge">{{ property.category || "Luxury" }}</div>
              <div class="car-price">${{ property.nightlyRate || property.dailyPrice }}/night</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ property.title || property.name }}</h3>
              <div class="car-specs" v-if="property.bedrooms || property.bathrooms || property.amenities">
                <div class="spec-item" v-if="property.bedrooms">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    Bedrooms
                  </div>
                  <span class="spec-value">{{ property.bedrooms }}</span>
                </div>
                <div class="spec-item" v-if="property.bathrooms">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M8 14c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm-4-4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"
                      />
                    </svg>
                    Bathrooms
                  </div>
                  <span class="spec-value">{{ property.bathrooms }}</span>
                </div>
                <div class="spec-item" v-if="property.amenities">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                    Features
                  </div>
                  <span class="spec-value">{{ property.amenities }}</span>
                </div>
              </div>
              <nuxt-link
                :to="{path: '/custom_request', query: {vehicle: `${property.title} ${property.maker}`}}"
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
  created: function () {
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    // document.body.appendChild(script);
  },
};
</script>
<script setup>
let properties = [];
console.log("setup properties");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/properties/", {
const {data, pending, error} = await useFetch("/api/get/properties/", {
  onResponse({request, response, options}) {
    // console.log(response);
    properties = response._data.data;
    // console.log(properties);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});
// console.log(data);
</script>

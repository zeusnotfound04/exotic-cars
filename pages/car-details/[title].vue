<template>
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="car-card" data-aos="fade-up" :data-aos-delay="car_data.id ? car_data.id * 100 : 0">
            <div class="car-image">
              <img
                :src="`https:${car_data.frontImage?.fields?.file?.url || car_data.image}`"
                :alt="car_data.title || car_data.name"
                loading="lazy"
              />
              <div class="car-badge">{{ car_data.category || "Supercar" }}</div>
              <div class="car-price">${{ car_data.dailyPrice || car_data.dailyRate }}/day</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ car_data.title || car_data.name }}</h3>
              <div class="car-specs" v-if="car_data.specs">
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                      />
                    </svg>
                    0-60 mph
                  </div>
                  <span class="spec-value">{{ car_data.specs.acceleration }}</span>
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
                  <span class="spec-value">{{ car_data.specs.horsepower }}</span>
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
                  <span class="spec-value">{{ car_data.specs.seats }}</span>
                </div>
              </div>
              <nuxt-link
                :to="{path: '/custom_request', query: {vehicle: `${car_data.title} ${car_data.maker}`}}"
                class="btn btn-outline"
              >
                Book Now
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h2>Image Gallery</h2>
      <div class="gallery">
        <div v-for="(car, index) in car_data.gallery" :key="index">
          <img
            :src="`https:${car.fields.file.url}`"
            :alt="`${car.fields.title}`"
            @click="openModal(`https:${car.fields.file.url}`)"
            style="cursor: pointer"
          />
        </div>
      </div>
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">&times;</button>
          <img :src="modalImage" style="max-width: 100%; max-height: 80vh; display: block; margin: auto" />
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
import {ref, computed} from "vue";
import {useRoute, useHead} from "#imports";

const route = useRoute();
const title = route.params.title;

// Dynamic meta description using the car title
const metaDescription = computed(
  () =>
    `Rent the ${title} and other luxury cars in Miami. Enjoy premium vehicles, top service, and seamless booking with Miami Exotic Rents.`
);

// Always ensure trailing slash on canonical URL
const canonicalUrl = computed(() => {
  const baseUrl = "https://miamiexoticrents.com/car-details/" + title;
  return baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
});

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  meta: [
    {
      name: "description",
      content: metaDescription.value,
    },
    {
      property: "og:image",
      content: "https://miamiexotics.b-cdn.net/img/logo.png",
    },
  ],
});

let car_data = [];
console.log("setup cars");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/car/" + title, {
const {data, pending, error} = await useFetch("/api/get/car/" + title, {
  onResponse({request, response, options}) {
    // console.log(response._data.data);
    car_data = response._data.data;
    // console.log(car_data);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});
// console.log(data);

const showModal = ref(false);
const modalImage = ref("");
function openModal(url) {
  modalImage.value = url;
  showModal.value = true;
}
function closeModal() {
  showModal.value = false;
  modalImage.value = "";
}
</script>
<style lang="css" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columns on desktop */
  gap: 10px;
}
.gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #ccc;
}
.car-details .img {
  object-fit: cover;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}
.modal-nav,
.modal-prev,
.modal-next {
  display: none;
}
.car-card:hover {
  transform: translateY(-4px);
}
.car-image {
  position: relative;
}
.car-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 10px;
}
.car-specs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.spec-item {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.spec-label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 5px;
}
.spec-value {
  font-size: 0.875rem;
  font-weight: 700;
}
.btn-icon {
  width: 1.2em;
  height: 1.2em;
  margin-left: 5px;
  fill: currentColor;
}
</style>

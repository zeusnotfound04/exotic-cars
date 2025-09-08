<template>
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7">
          <div class="car-card" data-aos="fade-up" :data-aos-delay="yacht_data.id ? yacht_data.id * 100 : 0">
            <div class="car-image">
              <img
                :src="`https:${yacht_data.frontImage?.fields?.file?.url || yacht_data.image}`"
                :alt="yacht_data.title || yacht_data.name"
                loading="lazy"
              />
              <div class="car-badge">{{ yacht_data.category || "Luxury" }}</div>
              <div class="car-price">${{ yacht_data.cost4Hours }}/hour</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">{{ yacht_data.title || yacht_data.name }}</h3>
              <div class="">${{ yacht_data.cost6Hours }}/6 hours</div>
              <div class="">${{ yacht_data.cost8Hours }}/8 hours</div>
              <br />
              <div class="car-specs" v-if="yacht_data.specs">
                <div class="spec-item">
                  <div class="spec-label">
                    <svg class="spec-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                    Length
                  </div>
                  <span class="spec-value">{{ yacht_data.specs.length }}</span>
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
                  <span class="spec-value">{{ yacht_data.specs.passengers }}</span>
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
                  <span class="spec-value">{{ yacht_data.specs.crew }}</span>
                </div>
              </div>
              <nuxt-link
                :to="{path: '/custom_request', query: {vehicle: `${yacht_data.title}`}}"
                class="btn btn-outline"
              >
                Charter Now
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
  <!-- Gallery and modal code remains unchanged -->
  <section>
    <div class="container">
      <h2>Image Gallery</h2>
      <div class="gallery">
        <div v-for="(yacht, index) in yacht_data.gallery" :key="index">
          <img
            :src="`https:${yacht.fields.file.url}`"
            :alt="`${yacht.fields.title}`"
            @click="openModal(`https:${yacht.fields.file.url}`)"
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

// Dynamic meta description using the yacht title
const metaDescription = computed(
  () =>
    `Charter the ${title} yacht and other luxury vessels in Miami. Enjoy premium yachts, top service, and seamless booking with Miami Exotic Rents.`
);

// Always ensure trailing slash on canonical URL
const canonicalUrl = computed(() => {
  const baseUrl = "https://miamiexoticrents.com/yacht/" + title;
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

let yacht_data = [];
console.log("setup cars");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/yacht/" + title, {
const {data, pending, error} = await useFetch("/api/get/yacht/" + title, {
  onResponse({request, response, options}) {
    // console.log(response._data.data);
    yacht_data = response._data.data;
    // console.log(yacht_data);

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
/* .car-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.car-card:hover {
  transform: translateY(-4px);
}
.car-image {
  position: relative;
} */
/* .car-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
}
.car-price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #007bff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
} */
.car-details {
  padding: 15px;
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
  color: #666;
  margin-right: 5px;
}
.spec-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: #333;
}
/* .btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #007bff;
  background: transparent;
  transition: background 0.3s, color 0.3s;
}
.btn-outline:hover {
  background: #007bff;
  color: #fff;
} */
.btn-icon {
  width: 1.2em;
  height: 1.2em;
  margin-left: 0.5em;
  fill: currentColor;
}
</style>

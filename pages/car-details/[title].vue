<template>
  <section class="ftco-section bg-light">
    <div class="" style="margin-top: 2%"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${car_data.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h1 class="mb-0">
                <a href="#">{{ car_data.title }}</a>
              </h1>
              <div class="d-flex mb-3">
                <span class="cat">{{ car_data.maker }}</span>
                <p class="price ml-auto">${{ car_data.dailyPrice }} <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${car_data.title} ${car_data.maker}`}}"
                  class="btn btn-primary py-2 mr-1"
                >
                  Book Now
                </nuxt-link>
              </p>
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
import {useRoute, useHead} from "#imports"; // Import useHead from Nuxt

const route = useRoute();
const title = route.params.title;

// Add canonical link for SEO
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://miamiexoticrents.com/car-details/" + title + '/',
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
</style>

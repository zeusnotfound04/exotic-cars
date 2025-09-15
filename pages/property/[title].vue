<template>
  <section class="ftco-section bg-light">
    <div class="" style="margin-top: 2%"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div class="car-wrap rounded">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${property.frontImage.fields.file.url + '?w=683&h=1024'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h1 class="mb-0">
                <span>{{ property.title }}</span>
              </h1>
              <div class="d-flex mb-3 mb-3 flex-column">
                <p class="price">${{ property.dailyPrice }} <span>Daily</span></p>
                <div v-for="(feature, index) in property.features" :key="index">
                  <div class="" style="font-weight: 500; color: black">{{ feature }}</div>
                </div>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${property.title} ${property.maker}`}}"
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
        <div v-for="(car, index) in property.gallery" :key="index">
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
  created: function () {},
};
</script>
<script setup>
import {ref, computed} from "vue";
import {useRoute, useHead} from "#imports";

const route = useRoute();
const title = route.params.title;

// Dynamic meta description using the property title
const metaDescription = computed(
  () =>
    `Rent ${title} and other exclusive properties in Miami. Enjoy luxury homes, premium amenities, and seamless booking with Miami Exotic Rents.`
);

// Always ensure trailing slash on canonical URL
const canonicalUrl = computed(() => {
  const baseUrl = "https://miamiexoticrents.com/property/" + title;
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

let property = [];
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/property/" + title, {
const {data, pending, error} = await useFetch("/api/get/property/" + title, {
  onResponse({request, response, options}) {
    // console.log(response._data.data);
    property = response._data.data;
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
h1 {
  color: #333;
  margin-bottom: 20px;
  /* text-align: center; */
  font-size: 1.5rem;
  font-weight: bold;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
}
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
</style>

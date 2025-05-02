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
                backgroundImage: `url(https:${yacht_data.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h2 class="mb-0">
                <span>{{ yacht_data.title }}</span>
              </h2>
              <div class="d-flex mb-3 mb-3 flex-column">
                <p class="price">${{ yacht_data.cost4Hours }} <span>4 hours</span></p>
                <p class="price">${{ yacht_data.cost6Hours }} <span>6 hours</span></p>
                <p class="price">${{ yacht_data.cost8Hours }} <span>8 hours</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${yacht_data.title}`}}"
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
        <div v-for="(yacht, index) in yacht_data.gallery" :key="index">
          <a :href="`https:${yacht.fields.file.url}`" target="_blank">
            <img :src="`https:${yacht.fields.file.url}`" :alt="`${yacht.fields.title}`" />
          </a>
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
    // script.src = "/js/main.js";
    // document.body.appendChild(script);
  },
};
</script>
<script setup>
const route = useRoute();
const title = route.params.title;

let yacht_data = [];
console.log("setup cars");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/yacht/" + title, {
const {data, pending, error} = await useFetch("/api/get/yacht/" + title, {
  onResponse({request, response, options}) {
    console.log(response._data.data);
    yacht_data = response._data.data;
    console.log(yacht_data);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/js/main.js";
    document.body.appendChild(script);
  },
});
// console.log(data);
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
</style>

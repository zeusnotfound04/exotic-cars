<template>
  <Head>
    <Title>Exotic Cars</Title>
    <Meta name="description" content="exotic cars" />
  </Head>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    style="background-image: url(https://miamiexotics.b-cdn.net/img/bg_3.jpg)"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div class="col-md-9 ftco-animate pb-5">
          <p class="breadcrumbs">
            <span class="mr-2"
              ><a href="#">Home <i class="ion-ios-arrow-forward"></i></a
            ></span>
            <span>Exotic Cars <i class="ion-ios-arrow-forward"></i></span>
          </p>
          <h1 class="mb-3 bread">Choose Your Car</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div class="col-md-6 col-lg-4" v-else v-for="(car, index) in cars" :key="index">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${car.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h2 class="mb-0">
                <span>{{ car.title }}</span>
              </h2>
              <div class="d-flex mb-3">
                <span class="cat">{{ car.maker }}</span>
                <p class="price ml-auto">${{ car.dailyPrice }} <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${car.title} ${car.maker}`}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <nuxt-link
                  :to="`/car-details/${car.title.toLowerCase().replace(/\s+/g, '-')}`"
                  class="btn btn-secondary py-2 ml-1"
                  >Details</nuxt-link
                >
              </p>
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
let cars = [];
console.log("setup cars");
// const {data, pending, error} = await useFetch("http://localhost:3001/api/get/cars/", {
const {data, pending, error} = await useFetch("/api/get/cars/", {
  onResponse({request, response, options}) {
    // console.log(response);
    cars = response._data.data;
    // console.log(cars);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});
// console.log(data);
</script>

<template>
  <Head>
    <Title>Houses</Title>
    <Meta name="description" content="houses exotic cars" />
  </Head>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    data-stellar-background-ratio="0.5"
    style="background-image: url(https://miamiexotics.b-cdn.net/img/background_house.jpg)"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div class="col-md-9 ftco-animate pb-5">
          <p class="breadcrumbs">
            <span class="mr-2"
              ><a href="#">Home <i class="ion-ios-arrow-forward"></i></a
            ></span>
            <span>Houses <i class="ion-ios-arrow-forward"></i></span>
          </p>
          <h1 class="mb-3 bread">Choose your house</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div class="col-md-6 col-lg-4" v-else v-for="(property, index) in properties" :key="index">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${property.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h2 class="mb-0">
                <span>{{ property.title }}</span>
              </h2>
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
                  >Book Now</nuxt-link
                >
                <nuxt-link
                  :to="`/property/${property.title.toLowerCase().replace(/\s+/g, '-')}`"
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

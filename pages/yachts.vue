<template>
  <Head>
    <Title>Yachts</Title>
    <Meta name="description" content="Browse Miami's best selection of luxury yachts for rent. Enjoy premium vessels, expert service, and seamless booking with Miami Exotic Rents." />
  </Head>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    style="background-image: url('https://miamiexotics.b-cdn.net/img/flybridge.jpg')"
    data-stellar-background-ratio="0.5"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
        <div class="col-md-9 ftco-animate pb-5">
          <p class="breadcrumbs">
            <span class="mr-2">
              <a href="#">Home <i class="ion-ios-arrow-forward"></i></a>
            </span>
            <span>Yachts <i class="ion-ios-arrow-forward"></i></span>
          </p>
          <h1 class="mb-3 bread">Choose Your Yacht</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading...</div>
        <div class="col-md-6 col-lg-4" v-else v-for="(yacht, index) in yachts" :key="index">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${yacht.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h2 class="mb-0">
                <span>{{ yacht.title }}</span>
              </h2>
              <div class="d-flex mb-3 mb-3 flex-column">
                <p class="price">${{ yacht.cost4Hours }} <span>4 hours</span></p>
                <p class="price">${{ yacht.cost6Hours }} <span>6 hours</span></p>
                <p class="price">${{ yacht.cost8Hours }} <span>8 hours</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${yacht.title} ${yacht.maker}`}}"
                  class="btn btn-primary py-2 mr-1"
                >
                  Book Now
                </nuxt-link>
                <nuxt-link
                  :to="`/yacht/${yacht.title.toLowerCase().replace(/\s+/g, '-')}`"
                  class="btn btn-secondary py-2 ml-1"
                >
                  Details
                </nuxt-link>
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
let yachts = [];
console.log("setup yacht");

const {data, pending, error} = await useFetch("/api/get/yachts/", {
  onResponse({request, response, options}) {
    // console.log(response);
    yachts = response._data.data;
    // console.log(yachts);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});
</script>

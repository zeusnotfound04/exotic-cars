<template>
  <Head>
    <Title>Houses</Title>
    <Meta name="description" content="houses exotic cars" />
  </Head>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    data-stellar-background-ratio="0.5"
    style="background-image: url('/img/background_house.jpg')"
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
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/19904_SW_129th.jpg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Dreamchasing</a></h2>
              <div class="d-flex mb-3 flex-column">
                <span class="cat"></span>
                <p class="price">$1,500 <span>Daily</span></p>
                <div class="" style="font-weight: 500; color: black">5 bedrooms, 5 bathrooms</div>
                <p class="" style="font-weight: 500; color: black">9 beds</p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Dreamchasing'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <div class="block-27">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li class="active"><span>1</span></li>
              <!-- <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li> -->
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  created: function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/js/main.js";
    document.body.appendChild(script);
  },
};
</script>

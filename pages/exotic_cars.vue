<template>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    style="background-image: url('img/bg_3.jpg')"
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
        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/lu.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Lamborghini Urus</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Lamborghini Urus'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/mb63.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Benz g63</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mercedes Benz</span>
                <p class="price ml-auto">$1,000 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Benz g63'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/rr_cullinam.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Rolls Royce Cullinan</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Rolls Royce</span>
                <p class="price ml-auto">$1,500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Rolls Royce Cullinan'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/mb_s580.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Benz s580 Maybach</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mercedes Benz</span>
                <p class="price ml-auto">$900 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Benz s580 Maybach'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/mclaren_570S.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Mclaren 570S Spyder</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mclaren</span>
                <p class="price ml-auto">$500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Mclaren 570S Spyder'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/ferrari_488.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Ferrari 488 Spider</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Ferrari</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'Ferrari 488 Spider'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url(img/car-7.jpg)"></div>
            <div class="text">
              <h2 class="mb-0"><a href="car-single.html">Audi r8</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Audi</span>
                <p class="price ml-auto">$500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link :to="{path: 'custom_request', query: {vehicle: 'Audi r8'}}" class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <a href="car-single.html" class="btn btn-secondary py-2 ml-1">Details</a>
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
    script.src = "js/main.js";
    document.body.appendChild(script);
  },
};
</script>

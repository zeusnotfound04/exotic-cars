<template>
  <Head>
    <Title>Exotic Cars</Title>
    <Meta name="description" content="exotic cars" />
  </Head>
  <section
    class="hero-wrap hero-wrap-2 js-fullheight"
    style="background-image: url('/img/bg_3.jpg')"
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
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/lamb_urus_performante.jpeg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Urus Performante</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,650 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Urus Performante'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/mb63.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Benz g63</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mercedes Benz</span>
                <p class="price ml-auto">$900 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Benz g63'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/rr_cullinam.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Cullinan</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Rolls Royce</span>
                <p class="price ml-auto">$1,500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Rolls Royce Cullinan'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/mb_s580.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">s580 Maybach</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mercedes Benz</span>
                <p class="price ml-auto">$900 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Benz s580 Maybach'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/mclaren_570S.jpg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">570S Spyder</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Mclaren</span>
                <p class="price ml-auto">$750 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Mclaren 570S Spyder'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/ferrari_488.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">488 Spider</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Ferrari</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Ferrari 488 Spider'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/c8.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Corvette C8</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Chevrolet</span>
                <p class="price ml-auto">$550 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Corvette C8'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/430i.jpeg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">430iM 2023</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">BMW</span>
                <p class="price ml-auto">$225 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'BMW 430iM 2023'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/lamp_huracan.jpeg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Huracán Tecnica</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,750 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Huracán Tecnica'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/evo_spider.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Evo Spider Grey</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Evo Spider Grey'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/urus_black_brown.jpg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Urus Black (Brown)</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Urus Black (Brown)'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/urus_black_orange.jpg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Urus Black (Orange)</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Urus Black (Orange)'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              style="background-image: url('/img/urus_performante.jpg')"
            ></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Urus Performante (Black)</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,400 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Urus Performante (Black)'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/urus_tan.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">Urus Tan</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Lamborghini</span>
                <p class="price ml-auto">$1,250 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Lamborghini Urus Tan'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/gt3_blue.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#"> GT3 Blue</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Porsche</span>
                <p class="price ml-auto">$900 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Porsche GT3 Blue'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/gt3_red.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">GT3 RS Red</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Porsche</span>
                <p class="price ml-auto">$900 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Porsche GT3 RS Red'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/m3_blue.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">M3 Blue</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">BMW</span>
                <p class="price ml-auto">$500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'BMW M3 Blue'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/m3_yellow.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">M3 Yellow</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">BMW</span>
                <p class="price ml-auto">$500<span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'BMW M3 Yellow'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/r8_yellow.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">R8 Yellow</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Audi</span>
                <p class="price ml-auto">$500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Audi R8 Yellow'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/s5_white.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">S5 White</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">Audi </span>
                <p class="price ml-auto">$500 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: 'Audi S5 White'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="car-wrap rounded ftco-animate">
            <div class="img rounded d-flex align-items-end" style="background-image: url('/img/bmw_m2.jpg')"></div>
            <div class="text">
              <h2 class="mb-0"><a href="#">M2 Blue</a></h2>
              <div class="d-flex mb-3">
                <span class="cat">BMW</span>
                <p class="price ml-auto">$300 <span>/day</span></p>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: 'custom_request', query: {vehicle: 'BMW M2 Blue'}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <!-- <a href="#" class="btn btn-secondary py-2 ml-1">Details</a> -->
              </p>
            </div>
          </div>
        </div>
        <!-- end of cars -->
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

<template>
  <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">
              <a class="navbar-brand" href="#">
                <img src="/img/logo.png" height="68" />
              </a>
            </h2>
            <p></p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li class="ftco-animate">
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
              <li class="ftco-animate">
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li class="ftco-animate">
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-5">
            <h2 class="ftco-heading-2">Information</h2>
            <ul class="list-unstyled">
              <li><nuxt-link class="py-2 d-block" to="/about">About</nuxt-link></li>
              <li><nuxt-link class="py-2 d-block" to="/services">Services</nuxt-link></li>
              <li>
                <nuxt-link class="py-2 d-block" to="/terms-conditions">Term and Conditions</nuxt-link>
              </li>
              <li>
                <nuxt-link class="py-2 d-block" to="/best_price_guarantee">Best Price Guarantee</nuxt-link>
              </li>
              <li>
                <a href="#" class="py-2 d-block">Privacy &amp; Cookies Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <span class="icon icon-map-marker"></span
                  ><span class="text">8320 W Sunrise Blvd, Plantation, FL 33322</span>
                </li>
                <li>
                  <a href="#"><span class="icon icon-phone"></span><span class="text">+1 305 921 9547</span></a>
                </li>
                <li>
                  <a href="#"
                    ><span class="icon icon-envelope"></span><span class="text">admin@miamiexoticrents.com</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;
            <!-- <script>
                document.write(new Date().getFullYear());
              </script> -->
            MIAMI EXOTIC RENTS All rights reserved | Developed by
            <a href="https://blendbox.io" target="_blank">Blend Box</a>
            <br />
            All rights reserved | This template is made with
            <i class="icon-heart color-danger" aria-hidden="true"></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>

    <div id="ftco-loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle
          class="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  </footer>
</template>

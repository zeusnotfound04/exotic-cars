<script lang="ts" setup>
import "../assets/css/style.css";

import "../assets/css/open-iconic-bootstrap.min.css";
import "../assets/css/animate.css";

import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";

import "../assets/css/aos.css";

import "../assets/css/ionicons.min.css";

import "../assets/css/bootstrap-datepicker3.min.css";
import "../assets/css/jquery.timepicker.css";

// import "../assets/css/flaticon.css";
import "../assets/css/icomoon.css";

// import "../assets/css/theme.css";
// import "../assets/fonts/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css";
</script>
<script lang="ts">
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<template>
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <!-- <link rel="manifest" href="site.webmanifest"> -->
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />

  <!-- <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="PWA Splash"> -->

  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-touch-fullscreen" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Your App Name" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />

  <link
    href="/img/splashscreens/iphone5_splash.png"
    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/iphone6_splash.png"
    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/iphoneplus_splash.png"
    media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/iphonex_splash.png"
    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/iphonexr_splash.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/iphonexsmax_splash.png"
    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/ipad_splash.png"
    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/ipadpro1_splash.png"
    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/ipadpro3_splash.png"
    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />
  <link
    href="/img/splashscreens/ipadpro2_splash.png"
    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
    rel="apple-touch-startup-image"
  />

  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="#"> </a>
      <div class="navbar-brand">
        <nuxt-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <div style="width: 150px; height: 68px; position: relative; left: 34px; top: 0px">
            <div style="left: -7px; top: 0px; position: absolute; text-align: center">
              <img src="/img/logo.png" alt="" height="70px" />
            </div>
          </div>
        </nuxt-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link menu-link" to="/" @click="visible = !visible">Home</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/instant_booking" @click="visible = !visible"
              >Instant Booking</nuxt-link
            >
          </li> -->
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/exotic_cars">Exotic Cars</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/yachts">Yachts</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/">Houses</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/security_deposits" @click="visible = !visible"
              >Security Deposits</nuxt-link
            >
          </li>
          <!-- <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/services" @click="visible = !visible">Services</nuxt-link>
          </li> -->
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/blog" @click="visible = !visible">Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/contact" @click="visible = !visible">Contact</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link menu-link" to="/custom_request" @click="visible = !visible"
              >Custom Request</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->
</template>

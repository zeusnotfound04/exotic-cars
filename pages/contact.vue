<template>
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
              ><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a
            ></span>
            <span>Contact <i class="ion-ios-arrow-forward"></i></span>
          </p>
          <h1 class="mb-3 bread">Contact Us</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section contact-section">
    <div class="container">
      <div class="row d-flex mb-5 contact-info">
        <div class="col-md-4">
          <div class="row mb-5">
            <div class="col-md-12">
              <div class="w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-map-o"></span>
                </div>
                <p><span>Address:</span> 8320 W Sunrise Blvd, Plantation, FL 33322</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-mobile-phone"></span>
                </div>
                <p>
                  <span>Phone:</span>
                  <a href="tel:13059219547">+1 305 921 9547</a>
                </p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="w-100 p-4 rounded mb-2 d-flex">
                <div class="icon mr-3">
                  <span class="icon-envelope-o"></span>
                </div>
                <p>
                  <span>Email:</span>
                  <a href="mailto:admin@miamiexoticrents.com">admin@miamiexoticrents.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 block-9 mb-md-5">
          <form action="#" class="bg-light p-5 contact-form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Name" v-model="name" autocomplete="name" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Your Email" v-model="email" autocomplete="email" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject" v-model="subject" />
            </div>
            <div class="form-group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                class="form-control"
                placeholder="Message"
                v-model="message"
              ></textarea>
            </div>
            <div class="form-group">
              <input type="type" value="Send Message" class="btn btn-primary py-3 px-5" @click="formSubmit" />
            </div>
          </form>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 90vw; height: 300px" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const {$toast} = useNuxtApp();
export default {
  data: () => {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      center: {lat: 40.69847032728747, lng: -73.9514422416687},
    };
  },

  methods: {
    formSubmit() {
      let post_data = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };

      if (post_data.name === "" || post_data.email === "" || post_data.subject === "" || post_data.message === "") {
        $toast.error("Oh no, please fill all the inputs to continue!");
        return false;
      }
      console.log(post_data);
      $fetch("http://localhost:3000/api/contact_message/", {
        method: "POST",
        body: post_data,
      }).then(
        (res) => {
          $toast.success("Thank you for contacting us, we will contact you shortly!");
          if (error) {
            // dealing error
            $toast.error("Oh no, there was an error, please try again later or contact us via emai!");
            console.log(error);
          } else {
            console.log(data);
          }
        },
        (error) => {
          console.log("exception...");
          console.log(error);
          $toast.error("Oh no, there was an error, please try again later or contact us via emai!");
        }
      );
    },
  },

  created: function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/main.js";
    document.body.appendChild(script);
  },
};
</script>

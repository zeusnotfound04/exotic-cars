<template>
  <Head>
    <Title>Contact Us</Title>
    <Meta
      name="description"
      content="Contact Miami Exotic Rents for luxury car, yacht, and property rentals in Miami. Reach out for inquiries, bookings, or support—our team is ready to assist you."
    />
  </Head>
  <!-- Modern Contact Hero -->
  <section class="contact-hero">
    <div class="contact-hero-bg"></div>
    <div class="container contact-hero-content">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <h1 class="contact-hero-title">
            <span class="text-white">Contact &nbsp;</span>
            <span class="text-gold">Us</span>
          </h1>
          <p class="contact-hero-subtitle">
            We're here to help with your luxury rental experience.<br />
            Reach out for bookings, questions, or support—our team will respond promptly.
          </p>
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
                  <a href="tel:9548074315">+1 954-807-4315</a>
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
        <h2 class="mb-3 bread">Check Our Location</h2>
        <div class="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114608.13546475607!2d-80.261839!3d26.147703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d906309cbcdc75%3A0x74b3b6a38de847e0!2s8320%20W%20Sunrise%20Blvd%2C%20Plantation%2C%20FL%2033322!5e0!3m2!1sen!2sus!4v1721783346619!5m2!1sen!2sus"
            width="100%"
            height="600"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- <GMapMap :center="center" :zoom="7" map-type-id="terrain" style="width: 90vw; height: 300px" /> -->
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

      let data_string = "Name: " + this.name;
      data_string += ", Contact: " + this.email;
      data_string += ", Subject: " + this.subject;
      data_string += ", Message: " + this.message;
      let url = "https://api.whatsapp.com/send?phone=19548074315&text=" + data_string;
      window.open(url, "_blank");
      $toast.success("Thank you for contacting us, we will contact you shortly!");
      // $fetch("/api/contact_message/", {
      //   method: "POST",
      //   body: post_data,
      // }).then(
      //   (res) => {
      //     $toast.success("Thank you for contacting us, we will contact you shortly!");
      //     if (error) {
      //       // dealing error
      //       $toast.error("Oh no, there was an error, please try again later or contact us via emai!");
      //       console.log(error);
      //     } else {
      //       console.log(data);
      //     }
      //   },
      //   (error) => {
      //     console.log("exception...");
      //     console.log(error);
      //     $toast.error("Oh no, there was an error, please try again later or contact us via emai!");
      //   }
      // );
    },
  },

  created: function () {},
};
</script>

<style scoped>
.contact-hero {
  position: relative;
  min-height: 320px;
  background: linear-gradient(120deg, #181818 60%, #ffd700 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 80px;
}
.contact-hero-bg {
  position: absolute;
  inset: 0;
  background: url("https://miamiexotics.b-cdn.net/img/bg_3.jpg") center center/cover no-repeat;
  opacity: 0.28;
  z-index: 1;
}
.contact-hero-content {
  position: relative;
  z-index: 2;
  padding-top: 60px;
  padding-bottom: 60px;
}
.contact-hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
  text-shadow: 0 2px 12px #0008;
}
.text-gold {
  color: #ffd700;
}
.contact-hero-subtitle {
  font-size: 1.2rem;
  color: #fff;
  max-width: 540px;
  margin: 0 auto;
  text-shadow: 0 1px 8px #0007;
}
@media (max-width: 600px) {
  .contact-hero-title {
    font-size: 1.5rem;
  }
  .contact-hero-content {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .contact-hero-subtitle {
    font-size: 1rem;
  }
}
</style>

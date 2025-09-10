<template>
  <Head>
    <Title>Custom Request</Title>
    <Meta name="description" content="clients can submit a form to book miami exotic rents" />
  </Head>
  <!-- Modern Hero Section -->
  <section class="custom-hero">
    <div class="custom-hero-bg"></div>
    <div class="container custom-hero-content">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <h1 class="custom-hero-title">
            <span class="text-white">Custom</span>
            <span class="text-gold">Request</span>
          </h1>
          <p class="custom-hero-subtitle">
            Tell us your dream. We'll make it happen.<br />
            Book your luxury car, yacht, or property in Miami with a personalized request.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="ftco-section contact-section">
    <div class="container">
      <form class="custom-form p-4 p-md-5 mx-auto rounded shadow-lg bg-white" autocomplete="off">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="first_name" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              autocomplete="given-name"
              v-model="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div class="col-md-6">
            <label for="last_name" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              autocomplete="family-name"
              v-model="last_name"
              placeholder="Enter your last name"
            />
          </div>
          <div class="col-md-6">
            <label for="vehicle" class="form-label">Interested in</label>
            <input
              type="text"
              class="form-control"
              id="vehicle"
              v-model="vehicle"
              placeholder="Car, Yacht, or Property"
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="you@email.com" />
          </div>
          <div class="col-md-6">
            <label for="phone" class="form-label">Phone</label>
            <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Your phone number" />
          </div>
          <div class="col-md-3">
            <label for="start_date" class="form-label">Start Date</label>
            <input type="text" class="form-control" id="start_date" placeholder="YYYY-MM-DD" />
          </div>
          <div class="col-md-3">
            <label for="end_date" class="form-label">End Date</label>
            <input type="text" class="form-control" id="end_date" placeholder="YYYY-MM-DD" />
          </div>
          <div class="col-12">
            <label for="message" class="form-label">Additional Details</label>
            <textarea
              id="message"
              class="form-control"
              rows="3"
              v-model="message"
              placeholder="Let us know any special requests or details..."
            ></textarea>
          </div>
          <div class="col-12 text-center mt-3">
            <button type="button" class="btn btn-gold btn-lg px-5" @click="formSubmit">Submit Request</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import {useRoute, useHead} from "#imports";
import {computed, ref} from "vue";

const route = useRoute();
const message = ref("");

const canonicalUrl = computed(() => {
  const baseUrl = "https://miamiexoticrents.com" + (route.path.endsWith("/") ? route.path : route.path + "/");
  const queryString = Object.keys(route.query).length ? "?" + new URLSearchParams(route.query).toString() : "";
  return baseUrl + queryString;
});

useHead({
  link: [
    {
      rel: "canonical",
      href: canonicalUrl.value,
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Submit a custom booking request for luxury cars, yachts, or properties in Miami. Our team will help you find the perfect rental for your needs.",
    },
    {
      property: "og:image",
      content: "https://miamiexotics.b-cdn.net/img/logo.png",
    },
  ],
});
</script>

<script>
const {$toast} = useNuxtApp();
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default {
  data: () => {
    return {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      vehicle: "",
      start_date: "",
      end_date: "",
      message: "",
    };
  },

  methods: {
    formSubmit() {
      let post_data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        vehicle: this.vehicle,
        start_date: $("#start_date").datepicker("getDate"),
        end_date: $("#end_date").datepicker("getDate"),
        message: this.message,
      };

      if (
        post_data.first_name === "" ||
        post_data.last_name === "" ||
        post_data.phone === "" ||
        post_data.email === "" ||
        post_data.vehicle === "" ||
        post_data.start_date === "" ||
        post_data.end_date === ""
      ) {
        $toast.error("Oh no, please fill all the inputs to continue!");
        return false;
      }
      let data_string = "Name: " + this.first_name + " " + this.last_name;
      data_string += ", Interested in: " + this.vehicle;
      data_string += ", Contact: " + this.phone + " " + this.email;
      data_string += ", Start: " + post_data.start_date.toLocaleDateString();
      data_string += ", End: " + post_data.end_date.toLocaleDateString();
      if (this.message) {
        data_string += ", Message: " + this.message;
      }
      let url = "https://api.whatsapp.com/send?phone=19542882717&text=" + encodeURIComponent(data_string);
      window.open(url, "_blank");
      $toast.success("Thank you for your submission, we will contact you shortly!");
    },
  },
  created: function () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
    $(function () {
      const currentDate = new Date();
      $("#start_date").datepicker("update", currentDate);

      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 3);

      $("#end_date").datepicker("update", futureDate);

      $(".form-control#start_date, .form-control#end_date").each(function () {
        $(this).datepicker();
      });
    });
  },
  mounted() {
    if (this.$route.query && this.$route.query.vehicle) {
      this.vehicle = this.$route.query.vehicle;
    }
  },
};
</script>

<style scoped>
.custom-form {
  max-width: 700px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px #0001;
  margin-top: -60px;
  margin-bottom: 40px;
  border: 1px solid #eee;
}
.custom-form label,
.custom-form .form-control,
.custom-form textarea {
  margin-bottom: 5px;
}
.custom-form .form-control,
.custom-form textarea {
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  font-size: 1rem;
  transition: border 0.2s;
  margin-bottom: 5px; /* 5px margin for each form element */
}
.custom-form label {
  font-weight: 600;
  color: #181818;
  margin-bottom: 5px;
  margin-top: 5px;
}
.custom-form textarea {
  min-height: 80px;
  resize: vertical;
}
.btn-gold {
  background: #ffd700;
  color: #181818;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  transition: background 0.2s, color 0.2s;
}
.btn-gold:hover {
  background: #e6be00;
  color: #fff;
}
.custom-hero {
  position: relative;
  min-height: 320px;
  background: linear-gradient(120deg, #181818 60%, #ffd700 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.custom-hero-bg {
  position: absolute;
  inset: 0;
  background: url("https://miamiexotics.b-cdn.net/img/bg_3.jpg") center center/cover no-repeat;
  opacity: 0.28;
  z-index: 1;
}
.custom-hero-content {
  position: relative;
  z-index: 2;
  padding-top: 60px;
  padding-bottom: 60px;
}
.custom-hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
  text-shadow: 0 2px 12px #0008;
}
.text-gold {
  color: #ffd700;
}
.custom-hero-subtitle {
  font-size: 1.2rem;
  color: #fff;
  max-width: 540px;
  margin: 0 auto;
  text-shadow: 0 1px 8px #0007;
}
@media (max-width: 600px) {
  .custom-hero-title {
    font-size: 1.5rem;
  }
  .custom-hero-content {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .custom-hero-subtitle {
    font-size: 1rem;
  }
  .custom-form {
    padding: 18px !important;
    margin-top: -30px;
  }
}
</style>

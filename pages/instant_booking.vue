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
            <span>Instant Booking <i class="ion-ios-arrow-forward"></i></span>
          </p>
          <h1 class="mb-3 bread">Instant Booking</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="ftco-section contact-section">
    <div class="container">
      <form>
        <div class="form-group row">
          <label for="first_name" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="first_name" autocomplete="given-name" v-model="first_name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="last_name" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="last_name" autocomplete="family-name" v-model="last_name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-2 col-form-label">Vehicle</label>
          <div class="col-sm-3">
            <input type="phone" class="form-control" id="vehicle" v-model="vehicle" />
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-3">
            <input type="email" class="form-control" id="email" v-model="email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-3">
            <input type="phone" class="form-control" id="phone" v-model="phone" />
          </div>
        </div>
        <div class="form-group row input-daterange-container">
          <label for="start_date" class="col-sm-2 col-form-label">Start Date</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="start_date" value="2012-04-05" />
          </div>
        </div>
        <div class="form-group row input-daterange-container">
          <label for="end_date" class="col-sm-2 col-form-label">End Date</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="end_date" value="2012-04-19" />
          </div>
        </div>
        <div class="col-md-6 form-group">
          <button type="button" class="btn btn-primary" @click="formSubmit">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
const {$toast} = useNuxtApp();
// console.log($toast);
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
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
      console.log(post_data);
      $fetch("http://localhost:3000/api/register_submission/", {
        method: "POST",
        body: post_data,
      }).then(
        (res) => {
          $toast.success("Thank you for your submission, we will contact you shortly!");
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
    $(function () {
      const currentDate = new Date();
      //   const formattedCurrentDate = formatDate(currentDate);
      //   console.log("Today's date:", formattedCurrentDate);

      $("#start_date").datepicker("update", currentDate);

      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 3);
      //   const formattedFutureDate = formatDate(futureDate);

      $("#end_date").datepicker("update", futureDate);

      $(".input-daterange-container input").each(function () {
        $(this).datepicker();
      });
    });
  },
};
</script>
<style scoped>
.form-control {
  height: calc(1.5em + 0.75rem + 2px) !important;
}
</style>

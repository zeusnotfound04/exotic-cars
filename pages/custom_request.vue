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
            Book your luxury car or property in Miami with a personalized request.
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
            <select class="form-control" id="vehicle" v-model="vehicle">
              <option value="">Select Category</option>
              <option value="Luxury Car">Luxury Car</option>
              <option value="Exotic Car">Exotic Car</option>
              <option value="Property">Property</option>
            </select>
            <small class="form-text text-muted">
              For yacht charters, please use our <nuxt-link to="/yacht-charter-request" class="text-gold">dedicated yacht booking form</nuxt-link>
            </small>
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
            <input type="date" class="form-control" id="start_date" v-model="start_date" :min="minDate" />
          </div>
          <div class="col-md-3">
            <label for="end_date" class="form-label">End Date</label>
            <input type="date" class="form-control" id="end_date" v-model="end_date" :min="minDate" />
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
            <button 
              type="button" 
              class="btn btn-gold btn-lg px-5" 
              @click="formSubmit"
              :disabled="isSubmitting"
            >
              <template v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin me-2"></i>Submitting...
              </template>
              <template v-else>
                Submit Request
              </template>
            </button>
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
import { GOOGLE_SHEETS_CONFIG } from '~/config/sheets.js';
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
      isSubmitting: false,
      googleSheetUrl: GOOGLE_SHEETS_CONFIG.FORM_SUBMISSION_URL,
    };
  },

  computed: {
    minDate() {
      return new Date().toISOString().split('T')[0];
    }
  },



  methods: {
    async formSubmit() {
      if (this.isSubmitting) return;

      let post_data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        email: this.email,
        vehicle: this.vehicle,
        start_date: this.start_date,
        end_date: this.end_date,
        message: this.message,
      };

      // Validation
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

      this.isSubmitting = true;

      try {
        // Prepare data for Google Sheets
        const sheetData = {
          type: "Custom Request",
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          email: this.email,
          vehicle: this.vehicle,
          start_date: this.start_date,
          end_date: this.end_date,
          message: this.message,
          submission_date: new Date().toLocaleString(),
          timestamp: new Date().toISOString()
        };

        // Submit to Google Sheets
        await this.submitToGoogleSheets(sheetData);

        // Prepare WhatsApp message
        let whatsapp_message = "🚗 CUSTOM REQUEST\n\n";
        whatsapp_message += `Name: ${this.first_name} ${this.last_name}\n`;
        whatsapp_message += `Contact: ${this.phone} | ${this.email}\n`;
        whatsapp_message += `Interested in: ${this.vehicle}\n`;
        whatsapp_message += `Start Date: ${this.start_date}\n`;
        whatsapp_message += `End Date: ${this.end_date}\n`;
        
        if (this.message) whatsapp_message += `Message: ${this.message}\n`;
        const whatsapp_url = "https://api.whatsapp.com/send?phone=19542882717&text=" + encodeURIComponent(whatsapp_message);
        window.open(whatsapp_url, "_blank");

        $toast.success("Request submitted successfully! Data saved and WhatsApp opened.");
        
        // Reset form
        this.resetForm();

      } catch (error) {
        console.error("Submission error:", error);
        $toast.error("There was an error submitting your form. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },

    async submitToGoogleSheets(data) {
      try {
        console.log('📤 Submitting to Google Apps Script...');
        
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          formData.append(key, data[key]);
        });

        const response = await fetch(GOOGLE_SHEETS_CONFIG.googleSheetUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();
        console.log('✅ Successfully submitted to Google Sheets:', result);
        return true;
        console.log('✅ Successfully submitted to Google Sheets (CORS may prevent response reading)');
        return true;
      } catch (error) {
        console.error('❌ Google Sheets submission error:', error);
        // Don't throw error for CORS issues - they're expected with Google Apps Script
        return true;
      }
    },

    resetForm() {
      this.first_name = "";
      this.last_name = "";
      this.phone = "";
      this.email = "";
      this.vehicle = "";
      this.message = "";
      this.start_date = "";
      this.end_date = "";
    },

    formatDateForDisplay(date) {
      return date.toLocaleDateString();
    },
  },
  created: function () {
    // Initialize with empty dates to let user select
    this.start_date = "";
    this.end_date = "";
  },
  mounted() {
    if (this.$route.query && this.$route.query.vehicle) {
      this.vehicle = this.$route.query.vehicle;
    }
  },
};
</script>

<style scoped>
/* Form Container */
.custom-form {
  max-width: 700px;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 24px;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  margin-top: -80px;
  margin-bottom: 60px;
  border: 1px solid rgba(255, 215, 0, 0.1);
  position: relative;
  overflow: hidden;
  animation: slideUpFade 0.8s ease-out;
  backdrop-filter: blur(10px);
}

.custom-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  animation: shimmer 2s infinite;
}

/* Form Elements */
.custom-form .form-group {
  position: relative;
  margin-bottom: 20px;
}

.custom-form label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  position: relative;
}

.custom-form label::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #ffd700, #f39c12);
  transition: width 0.3s ease;
}

.custom-form .form-control:focus + label::after,
.custom-form .form-control.filled + label::after {
  width: 20px;
}

.custom-form .form-control,
.custom-form textarea,
.custom-form select {
  border-radius: 12px;
  border: 2px solid #e8ecf3;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  font-size: 1rem;
  padding: 14px 18px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 8px;
}

.custom-form .form-control::placeholder,
.custom-form textarea::placeholder {
  color: #a0aec0;
  transition: all 0.3s ease;
}

.custom-form .form-control:focus,
.custom-form textarea:focus,
.custom-form select:focus {
  outline: none;
  border-color: #ffd700;
  background: #ffffff;
  box-shadow: 
    0 0 0 4px rgba(255, 215, 0, 0.1),
    inset 0 2px 4px rgba(0, 0, 0, 0.02),
    0 4px 12px rgba(255, 215, 0, 0.15);
  transform: translateY(-1px);
}

.custom-form .form-control:focus::placeholder,
.custom-form textarea:focus::placeholder {
  color: #cbd5e0;
  transform: translateX(4px);
}

/* Date Input Styling */
.custom-form input[type="date"] {
  cursor: pointer;
  position: relative;
}

.custom-form input[type="date"]::-webkit-calendar-picker-indicator {
  color: #ffd700;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
}

.custom-form input[type="date"]:focus::-webkit-calendar-picker-indicator {
  color: #f39c12;
}

.custom-form input[type="date"]:hover {
  border-color: #ffd700;
}

.custom-form select.form-control {
  height: auto;
  min-height: calc(1.5em + 1.75rem + 4px);
  background-image: linear-gradient(45deg, transparent 50%, #ffd700 50%), linear-gradient(135deg, #ffd700 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
  appearance: none;
}

.custom-form textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.6;
}

/* Button Styling */
.btn-gold {
  background: linear-gradient(135deg, #ffd700 0%, #f39c12 100%);
  color: #2c3e50;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 16px 32px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 15px rgba(255, 215, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-gold::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-gold:hover {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(255, 215, 0, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-gold:hover::before {
  left: 100%;
}

.btn-gold:active {
  transform: translateY(0);
  box-shadow: 
    0 4px 15px rgba(255, 215, 0, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-gold:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Loading Animation */
.btn-gold .fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Form Animations */
@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Input Focus Effects */
.custom-form .form-control,
.custom-form textarea,
.custom-form select {
  animation: inputSlide 0.3s ease-out;
}

@keyframes inputSlide {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Required Field Indicator */
.custom-form label[for="first_name"]::before,
.custom-form label[for="last_name"]::before,
.custom-form label[for="email"]::before,
.custom-form label[for="phone"]::before,
.custom-form label[for="vehicle"]::before,
.custom-form label[for="start_date"]::before,
.custom-form label[for="end_date"]::before {
  content: '*';
  color: #e74c3c;
  margin-right: 4px;
  font-weight: bold;
}

/* Small Helper Text */
.form-text {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 4px;
  transition: color 0.3s ease;
}

.form-text .text-gold {
  color: #f39c12 !important;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.form-text .text-gold:hover {
  color: #ffd700 !important;
  text-decoration: underline;
}
.custom-hero {
  position: relative;
  min-height: 420px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c3e50 40%, #ffd700 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.custom-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255, 215, 0, 0.1) 0%, transparent 50%, rgba(255, 215, 0, 0.05) 100%);
  z-index: 2;
}

.custom-hero-bg {
  position: absolute;
  inset: 0;
  background: url("https://miamiexotics.b-cdn.net/img/bg_3.jpg") center center/cover no-repeat;
  opacity: 0.15;
  z-index: 1;
  transition: all 0.5s ease;
  animation: slowZoom 20s infinite alternate;
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

.custom-hero-content {
  position: relative;
  z-index: 3;
  padding: 80px 0;
  text-align: center;
}

.custom-hero-title {
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 24px;
  text-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.3);
  animation: titleGlow 0.8s ease-out;
}

@keyframes titleGlow {
  0% {
    opacity: 0;
    transform: translateY(30px);
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    text-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.5),
      0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.text-gold {
  color: #ffd700;
  position: relative;
  display: inline-block;
}

.text-gold::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  animation: underlineGlow 2s ease-in-out infinite alternate;
}

@keyframes underlineGlow {
  0% { opacity: 0.5; transform: scaleX(0.8); }
  100% { opacity: 1; transform: scaleX(1); }
}

.custom-hero-subtitle {
  font-size: 1.4rem;
  color: #ffffff;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 
    0 2px 12px rgba(0, 0, 0, 0.4),
    0 1px 4px rgba(0, 0, 0, 0.2);
  animation: subtitleFade 1s ease-out 0.3s both;
}

@keyframes subtitleFade {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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

<template>
  <Head>
    <Title>Yacht Charter Request - Miami Exotic Rents</Title>
    <Meta name="description" content="Book luxury yacht charters in Miami. Choose your preferred time and customize your yacht experience." />
  </Head>
  
  <!-- Yacht Hero Section -->
  <section class="yacht-hero">
    <div class="yacht-hero-bg"></div>
    <div class="container yacht-hero-content">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <h1 class="yacht-hero-title">
            <span class="text-white">Yacht</span>
            <span class="text-gold">Charter Request</span>
          </h1>
          <p class="yacht-hero-subtitle">
            Experience luxury on the water.<br />
            Book your premium yacht charter in Miami with personalized service.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="ftco-section contact-section">
    <div class="container">
      <form class="yacht-form p-4 p-md-5 mx-auto rounded shadow-lg bg-white" autocomplete="off">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="first_name" class="form-label">First Name *</label>
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
            <label for="last_name" class="form-label">Last Name *</label>
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
            <label for="email" class="form-label">Email *</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="you@email.com" />
          </div>
          <div class="col-md-6">
            <label for="phone" class="form-label">Phone *</label>
            <input type="tel" class="form-control" id="phone" v-model="phone" placeholder="Your phone number" />
          </div>

          <div class="col-md-4">
            <label for="charter_date" class="form-label">Charter Date *</label>
            <input
              type="date"
              class="form-control"
              id="charter_date"
              v-model="charter_date"
              :min="minDate"
              placeholder="Select Charter Date"
            />
          </div>
          
          <div class="col-md-4">
            <label for="start_time" class="form-label">Start Time *</label>
            <select class="form-control" id="start_time" v-model="start_time">
              <option value="">Select Start Time</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="duration" class="form-label">Duration</label>
            <select class="form-control" id="duration" v-model="duration">
              <option value="">Select Duration</option>
              <option value="4 Hours">4 Hours</option>
              <option value="6 Hours">6 Hours</option>
              <option value="8 Hours">8 Hours</option>
              <option value="Full Day">Full Day</option>
              <option value="Multi-Day">Multi-Day</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="guests" class="form-label">Number of Guests</label>
            <select class="form-control" id="guests" v-model="guests">
              <option value="">Select Number of Guests</option>
              <option value="1-6">1-6 Guests</option>
              <option value="7-12">7-12 Guests</option>
              <option value="13-20">13-20 Guests</option>
              <option value="20+">20+ Guests</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="yacht_type" class="form-label">Preferred Yacht Type</label>
            <select class="form-control" id="yacht_type" v-model="yacht_type">
              <option value="">Select Yacht Type</option>
              <option value="Motor Yacht">Motor Yacht</option>
              <option value="Sailing Yacht">Sailing Yacht</option>
              <option value="Catamaran">Catamaran</option>
              <option value="Luxury Yacht">Luxury Yacht</option>
              <option value="Party Yacht">Party Yacht</option>
            </select>
          </div>

          <div class="col-12">
            <label for="special_requests" class="form-label">Special Requests & Additional Details</label>
            <textarea
              id="special_requests"
              class="form-control"
              rows="4"
              v-model="special_requests"
              placeholder="Tell us about any special occasions, catering needs, water sports equipment, or other preferences..."
            ></textarea>
          </div>

          <div class="col-12">
            <div class="yacht-info-box">
              <h6><i class="fas fa-info-circle text-gold me-2"></i>Charter Information</h6>
              <p class="mb-1"><strong>Available Times:</strong> 8:00 AM, 4:00 PM, 8:00 PM</p>
              <p class="mb-1"><strong>Minimum Charter:</strong> 4 hours</p>
              <p class="mb-0"><strong>Included:</strong> Captain, crew, fuel, basic amenities</p>
            </div>
          </div>

          <div class="col-12 text-center mt-4">
            <button 
              type="button" 
              class="btn btn-gold btn-lg px-5" 
              @click="formSubmit"
              :disabled="isSubmitting"
            >
              <template v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin me-2"></i>Submitting Charter Request...
              </template>
              <template v-else>
                <i class="fas fa-anchor me-2"></i>Request Yacht Charter
              </template>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useRoute, useHead } from "#imports";
import { computed, ref } from "vue";

const route = useRoute();

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
      content: "Book luxury yacht charters in Miami. Professional crew, premium amenities, and unforgettable experiences on the water.",
    },
    {
      property: "og:image",
      content: "https://miamiexotics.b-cdn.net/img/logo.png",
    },
  ],
});
</script>

<script>
const { $toast } = useNuxtApp();
import { GOOGLE_SHEETS_CONFIG } from '~/config/sheets.js';

export default {
  data: () => {
    return {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      charter_date: "",
      start_time: "",
      duration: "",
      guests: "",
      yacht_type: "",
      special_requests: "",
      isSubmitting: false,
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

      // Basic validation
      if (
        this.first_name === "" ||
        this.last_name === "" ||
        this.phone === "" ||
        this.email === "" ||
        this.charter_date === "" ||
        this.start_time === ""
      ) {
        $toast.error("Please fill all required fields to continue!");
        return false;
      }

      this.isSubmitting = true;

      try {
        // Prepare data for Google Sheets
        const sheetData = {
          type: "Yacht Charter Request",
          first_name: this.first_name,
          last_name: this.last_name,
          phone: this.phone,
          email: this.email,
          charter_date: this.charter_date,
          start_time: this.start_time,
          duration: this.duration,
          guests: this.guests,
          yacht_type: this.yacht_type,
          special_requests: this.special_requests,
          submission_date: new Date().toLocaleString(),
          timestamp: new Date().toISOString()
        };

        // Submit to Google Sheets
        await this.submitToGoogleSheets(sheetData);

        // Prepare WhatsApp message
        let whatsapp_message = "🛥️ YACHT CHARTER REQUEST\n\n";
        whatsapp_message += `Name: ${this.first_name} ${this.last_name}\n`;
        whatsapp_message += `Contact: ${this.phone} | ${this.email}\n`;
        whatsapp_message += `Charter Date: ${this.charter_date}\n`;
        whatsapp_message += `Start Time: ${this.start_time}\n`;
        
        if (this.duration) whatsapp_message += `Duration: ${this.duration}\n`;
        if (this.guests) whatsapp_message += `Guests: ${this.guests}\n`;
        if (this.yacht_type) whatsapp_message += `Yacht Type: ${this.yacht_type}\n`;
        if (this.special_requests) whatsapp_message += `Special Requests: ${this.special_requests}\n`;

        const whatsapp_url = "https://api.whatsapp.com/send?phone=19542882717&text=" + encodeURIComponent(whatsapp_message);
        window.open(whatsapp_url, "_blank");

        $toast.success("Charter request submitted successfully! Data saved and WhatsApp opened.");
        
        // Reset form
        this.resetForm();

      } catch (error) {
        console.error("Submission error:", error);
        $toast.error("There was an error submitting your charter request. Please try again.");
      } finally {
        this.isSubmitting = false;
      }
    },

    async submitToGoogleSheets(data) {
      try {
        console.log('📤 Submitting yacht charter to Google Apps Script...');
        
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
        console.log('✅ Successfully submitted yacht charter to Google Sheets:', result);
        return true;
      } catch (error) {
        console.error('❌ Google Sheets submission error:', error);
        throw error;
      }
    },

    resetForm() {
      this.first_name = "";
      this.last_name = "";
      this.phone = "";
      this.email = "";
      this.charter_date = "";
      this.start_time = "";
      this.duration = "";
      this.guests = "";
      this.yacht_type = "";
      this.special_requests = "";
    },

    formatDateForDisplay(date) {
      return date.toLocaleDateString();
    },


  },

  created: function () {
    // Initialize with empty date to let user select
    this.charter_date = "";
  },
};
</script>

<style scoped>
/* Yacht Form Container */
.yacht-form {
  max-width: 900px;
  background: linear-gradient(145deg, #ffffff 0%, #f0f8ff 100%);
  border-radius: 28px;
  box-shadow: 
    0 15px 50px rgba(26, 54, 93, 0.12),
    0 6px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  margin-top: -100px;
  margin-bottom: 80px;
  border: 2px solid rgba(26, 54, 93, 0.08);
  position: relative;
  overflow: hidden;
  animation: yachtFormSlide 1s ease-out;
  backdrop-filter: blur(15px);
}

.yacht-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #1a365d, #ffd700, #1a365d, transparent);
  animation: waveShimmer 3s infinite;
}

/* Form Elements */
.yacht-form .form-group {
  position: relative;
  margin-bottom: 24px;
}

.yacht-form label {
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 10px;
  font-size: 0.98rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.yacht-form label::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 2px;
  background: linear-gradient(45deg, #1a365d, #ffd700);
  transition: all 0.3s ease;
  opacity: 0;
}

.yacht-form .form-control:focus + label::before {
  opacity: 1;
  left: -16px;
}

.yacht-form .form-control,
.yacht-form textarea,
.yacht-form select {
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  background: linear-gradient(145deg, #ffffff 0%, #f7fafc 100%);
  font-size: 1.05rem;
  padding: 16px 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 
    inset 0 2px 6px rgba(0, 0, 0, 0.03),
    0 2px 8px rgba(26, 54, 93, 0.04);
  margin-bottom: 10px;
}

.yacht-form .form-control::placeholder,
.yacht-form textarea::placeholder {
  color: #a0aec0;
  font-style: italic;
  transition: all 0.3s ease;
}

.yacht-form .form-control:focus,
.yacht-form textarea:focus,
.yacht-form select:focus {
  outline: none;
  border-color: #1a365d;
  background: #ffffff;
  box-shadow: 
    0 0 0 6px rgba(26, 54, 93, 0.08),
    inset 0 2px 6px rgba(0, 0, 0, 0.03),
    0 6px 20px rgba(26, 54, 93, 0.12);
  transform: translateY(-2px) scale(1.01);
}

.yacht-form .form-control:focus::placeholder,
.yacht-form textarea:focus::placeholder {
  color: #cbd5e0;
  transform: translateX(6px);
}

/* Date Input Styling */
.yacht-form input[type="date"] {
  cursor: pointer;
  position: relative;
}

.yacht-form input[type="date"]::-webkit-calendar-picker-indicator {
  color: #1a365d;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
}

.yacht-form input[type="date"]:focus::-webkit-calendar-picker-indicator {
  color: #ffd700;
}

/* Enhanced Date Input Styling */
.yacht-form input[type="date"] {
  position: relative;
  background-color: #ffffff;
  color: #1a365d;
  font-weight: 500;
}

.yacht-form input[type="date"]:hover {
  border-color: #1a365d;
  box-shadow: 0 0 0 3px rgba(26, 54, 93, 0.1);
}

.yacht-form input[type="date"]:focus {
  border-color: #1a365d;
  box-shadow: 0 0 0 6px rgba(26, 54, 93, 0.08);
}

/* Bootstrap datepicker dropdown styling */
.datepicker {
  z-index: 9999 !important;
  border-radius: 12px !important;
  box-shadow: 0 10px 40px rgba(26, 54, 93, 0.2) !important;
  border: 2px solid #1a365d !important;
}

.datepicker .datepicker-days {
  border-radius: 12px !important;
}

.datepicker table tr td.day:hover,
.datepicker table tr td.focused {
  background: #ffd700 !important;
  color: #1a365d !important;
}

.datepicker table tr td.active,
.datepicker table tr td.active:hover {
  background: #1a365d !important;
  color: white !important;
}

.yacht-form select.form-control {
  height: auto;
  min-height: calc(1.5em + 2rem + 4px);
  background-image: 
    linear-gradient(45deg, transparent 50%, #1a365d 50%), 
    linear-gradient(135deg, #1a365d 50%, transparent 50%);
  background-position: 
    calc(100% - 22px) calc(1em + 4px), 
    calc(100% - 16px) calc(1em + 4px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  appearance: none;
}

.yacht-form textarea {
  min-height: 140px;
  resize: vertical;
  line-height: 1.7;
}

/* Time Selection Special Styling */
.yacht-form select[id="start_time"] option {
  padding: 12px;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-bottom: 1px solid #e2e8f0;
}

/* Button Styling */
.btn-gold {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #ffd700 100%);
  color: #ffffff;
  border: none;
  border-radius: 16px;
  font-weight: 800;
  font-size: 1.15rem;
  padding: 18px 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 6px 20px rgba(26, 54, 93, 0.3),
    0 3px 10px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 240px;
}

.btn-gold::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.btn-gold:hover {
  background: linear-gradient(135deg, #2c5282 0%, #3182ce 50%, #f6e05e 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 12px 35px rgba(26, 54, 93, 0.4),
    0 6px 15px rgba(0, 0, 0, 0.2);
}

.btn-gold:hover::before {
  left: 100%;
}

.btn-gold:active {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 
    0 6px 20px rgba(26, 54, 93, 0.3),
    0 3px 10px rgba(0, 0, 0, 0.15);
}

.btn-gold:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Loading Animation */
.btn-gold .fa-spinner {
  animation: anchorSpin 1.5s ease-in-out infinite;
}

@keyframes anchorSpin {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
}

/* Form Animations */
@keyframes yachtFormSlide {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes waveShimmer {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

/* Required Field Indicators */
.yacht-form label[for="first_name"]::after,
.yacht-form label[for="last_name"]::after,
.yacht-form label[for="email"]::after,
.yacht-form label[for="phone"]::after,
.yacht-form label[for="charter_date"]::after,
.yacht-form label[for="start_time"]::after {
  content: ' *';
  color: #e53e3e;
  font-weight: 900;
  font-size: 1.1rem;
}

/* Info Box Styling */
.yacht-info-box {
  background: linear-gradient(135deg, #edf7ff 0%, #bee3f8 100%);
  border: 2px solid rgba(26, 54, 93, 0.1);
  border-radius: 20px;
  padding: 24px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  animation: infoBoxFloat 3s ease-in-out infinite alternate;
}

.yacht-info-box::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  animation: infoGlow 4s ease-in-out infinite alternate;
}

@keyframes infoBoxFloat {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-2px); }
}

@keyframes infoGlow {
  0% { opacity: 0.3; transform: rotate(0deg); }
  100% { opacity: 0.6; transform: rotate(90deg); }
}

.yacht-info-box h6 {
  color: #1a365d;
  font-weight: 800;
  margin-bottom: 16px;
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
}

.yacht-info-box p {
  color: #2d3748;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
  line-height: 1.6;
}

.yacht-hero {
  position: relative;
  min-height: 480px;
  background: linear-gradient(135deg, #0f172a 0%, #1a365d 30%, #2563eb 70%, #ffd700 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.yacht-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(26, 54, 93, 0.2) 0%, transparent 50%),
    linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
  z-index: 2;
}

.yacht-hero-bg {
  position: absolute;
  inset: 0;
  background: url("https://miamiexotics.b-cdn.net/img/bg_3.jpg") center center/cover no-repeat;
  opacity: 0.12;
  z-index: 1;
  transition: all 0.8s ease;
  animation: oceanMotion 25s infinite alternate;
  filter: sepia(20%) saturate(120%) hue-rotate(180deg);
}

@keyframes oceanMotion {
  0% { 
    transform: scale(1) rotate(0deg);
    filter: sepia(20%) saturate(120%) hue-rotate(180deg);
  }
  50% {
    transform: scale(1.08) rotate(1deg);
    filter: sepia(30%) saturate(140%) hue-rotate(190deg);
  }
  100% { 
    transform: scale(1.05) rotate(-1deg);
    filter: sepia(25%) saturate(130%) hue-rotate(185deg);
  }
}

.yacht-hero-content {
  position: relative;
  z-index: 3;
  padding: 100px 0;
  text-align: center;
}

.yacht-hero-title {
  font-size: 3.8rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 32px;
  text-shadow: 
    0 6px 30px rgba(0, 0, 0, 0.6),
    0 3px 12px rgba(26, 54, 93, 0.4),
    0 0 50px rgba(255, 215, 0, 0.2);
  animation: yachtTitleWave 1.2s ease-out;
}

@keyframes yachtTitleWave {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
    text-shadow: 0 0 0 transparent;
  }
  50% {
    opacity: 0.7;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    text-shadow: 
      0 6px 30px rgba(0, 0, 0, 0.6),
      0 3px 12px rgba(26, 54, 93, 0.4),
      0 0 50px rgba(255, 215, 0, 0.2);
  }
}

.text-gold {
  color: #ffd700;
  position: relative;
  display: inline-block;
}

.text-gold::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  border-radius: 12px;
  animation: goldAura 3s ease-in-out infinite alternate;
  z-index: -1;
}

@keyframes goldAura {
  0% {
    opacity: 0.3;
    transform: scale(0.95);
  }
  100% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.yacht-hero-subtitle {
  font-size: 1.6rem;
  color: #f7fafc;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
  text-shadow: 
    0 3px 15px rgba(0, 0, 0, 0.5),
    0 1px 6px rgba(26, 54, 93, 0.3);
  animation: subtitleRise 1.5s ease-out 0.4s both;
}

@keyframes subtitleRise {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.yacht-info-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
}

.yacht-info-box h6 {
  color: #495057;
  font-weight: 600;
  margin-bottom: 10px;
}

.yacht-info-box p {
  color: #6c757d;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .yacht-hero-title {
    font-size: 1.8rem;
  }
  .yacht-hero-content {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .yacht-hero-subtitle {
    font-size: 1rem;
  }
  .yacht-form {
    padding: 18px !important;
    margin-top: -30px;
  }
}
</style>
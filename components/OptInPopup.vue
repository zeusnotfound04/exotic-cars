<template>
  <div v-if="showPopup" class="popup-overlay" @click="closePopup">
    <div class="popup-container" @click.stop>
      <button class="close-btn" @click="closePopup">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="popup-content">
        <div class="popup-header">
          <h2>Get Exclusive Deals!</h2>
          <p>Join our VIP list and be the first to know about special offers on luxury cars</p>
        </div>
        
        <form @submit.prevent="submitForm" class="popup-form">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              placeholder="Enter your full name"
              :disabled="isSubmitting"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              placeholder="Enter your email address"
              :disabled="isSubmitting"
            >
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              required 
              placeholder="Enter your phone number"
              :disabled="isSubmitting"
            >
          </div>
          
          <button 
            type="submit" 
            class="submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Get Exclusive Access</span>
            <span v-else>Submitting...</span>
          </button>
          
          <p class="privacy-text">
            By submitting your information, you agree to receive marketing emails and text messages from Miami Exotic Rents about exclusive offers, updates, and promotions. Message and data rates may apply. You can unsubscribe or reply STOP to opt out at any time.
          </p>
        </form>
        
        <div v-if="submitMessage" class="submit-message" :class="submitStatus">
          {{ submitMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const showPopup = ref(false)
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const formData = ref({
  name: '',
  email: '',
  phone: ''
})

// Manual trigger only - no auto-show behavior
let hasShown = false

const showPopupManually = () => {
  showPopup.value = true
  hasShown = true
}

const closePopup = () => {
  showPopup.value = false
}

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz3ttahUDrtcQGZFHy1VrrNVVnv257kL4NmdrQpIH-S7jmPxstWhsG_d8s2viXSn4ATSw/exec'
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone
      })
    })
    
    submitMessage.value = 'Thank you! We\'ll be in touch with exclusive offers soon.'
    submitStatus.value = 'success'
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: ''
    }
    
    // Close popup after 3 seconds
    setTimeout(() => {
      closePopup()
    }, 3000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    submitMessage.value = 'Sorry, there was an error. Please try again.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // No auto-trigger behavior - popup only shows when manually triggered
})

onUnmounted(() => {
  // No event listeners to remove
})

// Expose the manual trigger function to parent components
defineExpose({
  showPopup: showPopupManually
})
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.popup-container {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border: 2px solid #d4af37;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: popupSlideIn 0.3s ease-out;
}

@keyframes popupSlideIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid #d4af37;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  color: #d4af37;
}

.close-btn:hover {
  background: rgba(212, 175, 55, 0.2);
  transform: scale(1.1);
  color: #f4d03f;
}

.popup-content {
  padding: 40px 30px 30px;
}

.popup-header {
  text-align: center;
  margin-bottom: 30px;
}

.popup-header h2 {
  color: #d4af37;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.popup-header p {
  color: #cccccc;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #d4af37;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-group input {
  padding: 15px;
  border: 2px solid #444;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #333;
  color: #fff;
}

.form-group input::placeholder {
  color: #999;
}

.form-group input:focus {
  outline: none;
  border-color: #d4af37;
  background: #444;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}

.form-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn {
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  border: none;
  padding: 18px 30px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #f4d03f, #d4af37);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.submit-btn:disabled {
  background: #6c757d;
  color: #999;
  cursor: not-allowed;
  transform: none;
}

.privacy-text {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 0;
}

.submit-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.submit-message.success {
  background: linear-gradient(135deg, #1a4a1a, #2d5a2d);
  color: #90ee90;
  border: 1px solid #d4af37;
}

.submit-message.error {
  background: linear-gradient(135deg, #4a1a1a, #5a2d2d);
  color: #ff9999;
  border: 1px solid #d4af37;
}

@media (max-width: 768px) {
  .popup-container {
    width: 95%;
    margin: 20px;
  }
  
  .popup-content {
    padding: 30px 20px 20px;
  }
  
  .popup-header h2 {
    font-size: 24px;
  }
}
</style>
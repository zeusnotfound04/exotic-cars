<template>
  <Head>
    <Title>Test Form - Google Sheets Integration</Title>
    <Meta name="description" content="Test form for Google Sheets integration" />
  </Head>
  
  <section class="ftco-section contact-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0"><i class="fas fa-test-tube me-2"></i>Google Sheets Integration Test</h3>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="testSubmit">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="test_name" class="form-label">Name *</label>
                    <input
                      type="text"
                      class="form-control"
                      id="test_name"
                      v-model="test_name"
                      placeholder="Enter test name"
                      required
                    />
                  </div>
                  
                  <div class="col-md-6">
                    <label for="test_email" class="form-label">Email *</label>
                    <input
                      type="email"
                      class="form-control"
                      id="test_email"
                      v-model="test_email"
                      placeholder="test@example.com"
                      required
                    />
                  </div>
                  
                  <div class="col-md-6">
                    <label for="test_phone" class="form-label">Phone</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="test_phone"
                      v-model="test_phone"
                      placeholder="123-456-7890"
                    />
                  </div>
                  
                  <div class="col-md-6">
                    <label for="test_type" class="form-label">Request Type</label>
                    <select class="form-control" id="test_type" v-model="test_type">
                      <option value="">Select Type</option>
                      <option value="Car Rental">Car Rental</option>
                      <option value="Yacht Charter">Yacht Charter</option>
                      <option value="Property Rental">Property Rental</option>
                      <option value="Test Submission">Test Submission</option>
                    </select>
                  </div>
                  
                  <div class="col-12">
                    <label for="test_message" class="form-label">Test Message</label>
                    <textarea
                      id="test_message"
                      class="form-control"
                      rows="3"
                      v-model="test_message"
                      placeholder="This is a test submission to verify Google Sheets integration..."
                    ></textarea>
                  </div>
                  
                  <div class="col-12">
                    <div class="alert alert-info">
                      <h6><i class="fas fa-info-circle me-2"></i>Test Information</h6>
                      <p class="mb-1"><strong>Purpose:</strong> Verify Google Apps Script integration</p>
                      <p class="mb-1"><strong>Google Sheet URL:</strong> {{ maskedUrl }}</p>
                      <p class="mb-0"><strong>Submission Method:</strong> FormData to Google Apps Script</p>
                    </div>
                  </div>
                  
                  <div class="col-12 text-center">
                    <button 
                      type="submit" 
                      class="btn btn-success btn-lg px-4 me-3"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting">
                        <i class="fas fa-spinner fa-spin me-2"></i>Testing...
                      </span>
                      <span v-else>
                        <i class="fas fa-paper-plane me-2"></i>Test Google Sheets
                      </span>
                    </button>
                    
                    <button 
                      type="button" 
                      class="btn btn-secondary px-4"
                      @click="resetForm"
                    >
                      <i class="fas fa-redo me-2"></i>Reset Form
                    </button>
                  </div>
                </div>
              </form>
              
              <!-- Test Results -->
              <div v-if="testResults.length > 0" class="mt-4">
                <h5>Test Results:</h5>
                <div class="test-results">
                  <div 
                    v-for="(result, index) in testResults" 
                    :key="index"
                    class="alert mb-2"
                    :class="result.success ? 'alert-success' : 'alert-danger'"
                  >
                    <div class="d-flex justify-content-between align-items-start">
                      <div>
                        <strong>{{ result.timestamp }}</strong>
                        <p class="mb-0">{{ result.message }}</p>
                        <small v-if="result.error" class="text-muted">{{ result.error }}</small>
                      </div>
                      <span class="badge" :class="result.success ? 'bg-success' : 'bg-danger'">
                        {{ result.success ? 'SUCCESS' : 'FAILED' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  meta: [
    {
      name: "description",
      content: "Test form for Google Sheets integration testing",
    },
  ],
});
</script>

<script>
const { $toast } = useNuxtApp();
import { GOOGLE_SHEETS_CONFIG } from '~/config/sheets.js';

export default {
  data() {
    return {
      test_name: "",
      test_email: "",
      test_phone: "",
      test_type: "Test Submission",
      test_message: "This is a test submission to verify Google Sheets integration is working correctly.",
      isSubmitting: false,
      testResults: [],
    };
  },
  
  computed: {
    maskedUrl() {
      if (!GOOGLE_SHEETS_CONFIG.googleSheetUrl) return 'Not configured';
      const url = GOOGLE_SHEETS_CONFIG.googleSheetUrl;
      // Show first and last parts, mask the middle
      if (url.length > 30) {
        return url.substring(0, 15) + '...' + url.substring(url.length - 15);
      }
      return url;
    }
  },

  methods: {
    async testSubmit() {
      if (this.isSubmitting) return;
      
      // Basic validation
      if (!this.test_name || !this.test_email) {
        $toast.error("Please fill in required fields (Name and Email)!");
        return;
      }

      this.isSubmitting = true;
      const startTime = new Date();
      
      try {
        // Prepare test data
        const testData = {
          type: this.test_type || "Test Submission",
          first_name: this.test_name,
          last_name: "Test User",
          email: this.test_email,
          phone: this.test_phone,
          message: this.test_message,
          special_requests: "This is a test submission from the test form",
          test_timestamp: new Date().toISOString(),
          submission_date: new Date().toLocaleString(),
          user_agent: navigator.userAgent,
          page_url: window.location.href,
        };

        console.log('🧪 Starting Google Sheets test with data:', testData);

        // Submit to Google Sheets
        const result = await this.submitToGoogleSheets(testData);
        
        const endTime = new Date();
        const duration = endTime - startTime;
        
        // Add success result
        this.testResults.unshift({
          success: true,
          timestamp: endTime.toLocaleTimeString(),
          message: `Test submission successful! Duration: ${duration}ms`,
          data: testData
        });

        $toast.success(`✅ Test successful! Google Sheets integration working. (${duration}ms)`);
        
      } catch (error) {
        console.error('❌ Test failed:', error);
        
        const endTime = new Date();
        const duration = endTime - startTime;
        
        // Add failure result
        this.testResults.unshift({
          success: false,
          timestamp: endTime.toLocaleTimeString(),
          message: `Test failed after ${duration}ms`,
          error: error.message
        });

        $toast.error(`❌ Test failed: ${error.message}`);
      } finally {
        this.isSubmitting = false;
      }
    },

    async submitToGoogleSheets(data) {
      try {
        console.log('📤 Submitting test data to Google Apps Script...');
        console.log('🔗 URL:', GOOGLE_SHEETS_CONFIG.googleSheetUrl);
        
        // Prepare FormData
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          formData.append(key, data[key]);
        });

        console.log('📋 FormData prepared with keys:', Object.keys(data));

        const response = await fetch(GOOGLE_SHEETS_CONFIG.googleSheetUrl, {
          method: 'POST',
          body: formData,
        });

        console.log('📡 Response status:', response.status, response.statusText);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.text();
        console.log('✅ Google Sheets response:', result);
        
        return result;
      } catch (error) {
        console.error('❌ Google Sheets submission error:', error);
        throw error;
      }
    },

    resetForm() {
      this.test_name = "";
      this.test_email = "";
      this.test_phone = "";
      this.test_type = "Test Submission";
      this.test_message = "This is a test submission to verify Google Sheets integration is working correctly.";
    }
  },

  mounted() {
    // Pre-populate with test data for quick testing
    this.test_name = "Test User";
    this.test_email = "test@miamiexoticrents.com";
    this.test_phone = "305-123-4567";
  }
};
</script>

<style scoped>
.card {
  border: none;
  border-radius: 12px;
}

.card-header {
  border-radius: 12px 12px 0 0 !important;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.15);
}

.btn {
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-success {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  border: none;
}

.btn-success:hover {
  background: linear-gradient(135deg, #218838 0%, #1abc9c 100%);
  transform: translateY(-1px);
}

.btn-secondary {
  background: #6c757d;
  border: none;
}

.btn-secondary:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

.test-results {
  max-height: 400px;
  overflow-y: auto;
}

.alert {
  border-radius: 8px;
}

.badge {
  font-size: 0.7rem;
}

.ftco-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
}
</style>
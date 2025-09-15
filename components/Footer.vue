<template>
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <nuxt-link to="/" class="footer-logo-link">
              <img src="/img/logo.webp" alt="Miami Exotic Rents" class="footer-logo-image" />
              <h3 class="brand-name">
                MiamiExotic
                <span class="text-white">Rents</span>
              </h3>
            </nuxt-link>
          </div>
          <p class="brand-tagline">Drive Luxury. Live Miami.</p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Services</h4>
            <nuxt-link to="/exotic_cars">Exotic Cars</nuxt-link>
            <nuxt-link to="/yachts">Luxury Yachts</nuxt-link>
            <nuxt-link to="/properties">Premium Properties</nuxt-link>
          </div>

          <div class="link-group">
            <h4>Support</h4>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
            <nuxt-link to="/security_deposits">Security Deposit</nuxt-link>
            <nuxt-link to="/terms-conditions">Terms & Conditions</nuxt-link>
          </div>

          <div class="link-group">
            <h4>Connect</h4>
            <nuxt-link to="#">Instagram</nuxt-link>
            <nuxt-link to="#">TikTok</nuxt-link>
            <nuxt-link to="#">YouTube</nuxt-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Miami Exotic Rents. All rights reserved.</p>
        <div class="payment-methods">
          <span>We Accept:</span>
          <div class="payment-icons">
            <span class="payment-icon">VISA</span>
            <span class="payment-icon">AMEX</span>
            <span class="payment-icon">MASTERCARD</span>
            <span class="payment-icon">APPLE PAY</span>
            <span class="payment-icon">CRYPTO</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <div class="whatsapp-float">
    <a href="https://wa.me/19542882717" target="_blank" class="whatsapp-btn">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.footer {
  background: #181818;
  color: #fff;
  padding: 40px 0 0 0;
  font-size: 1rem;
  margin-top: 40px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}
.footer-brand {
  max-width: 260px;
  margin-bottom: 24px;
}
.footer-logo-image {
  width: 60px;
  height: auto;
  margin-bottom: 8px;
}
.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #ffd700;
  letter-spacing: 1px;
}
.brand-tagline {
  font-size: 1rem;
  color: #bbb;
  margin-top: 8px;
}
.footer-links {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}
.link-group {
  min-width: 120px;
  margin-bottom: 16px;
}
.link-group h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #ffd700;
}
.link-group a {
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 6px;
  font-size: 0.98rem;
  transition: color 0.2s;
}
.link-group a:hover {
  color: #ffd700;
}
.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 32px;
  padding: 18px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
}

/* Responsive styles */
@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .footer-links {
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
    width: 100%;
  }
  .payment-methods {
    margin-top: 8px;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 24px 0 0 0;
    font-size: 0.97rem;
  }
  .footer-logo-image {
    width: 48px;
  }
  .brand-name {
    font-size: 1.1rem;
  }
  .footer-content {
    gap: 16px;
  }
  .footer-links {
    gap: 16px;
  }
  .link-group h4 {
    font-size: 1rem;
  }
  .footer-bottom {
    font-size: 0.9rem;
    padding: 12px 0 8px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    text-align: left;
    width: 100%;
  }
  .payment-methods {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-top: 6px;
  }
  .payment-icons {
    margin-left: 0;
    gap: 6px;
  }
}
</style>

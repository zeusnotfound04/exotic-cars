<template>
  <Head>
    <Title>Extras</Title>
    <Meta
      name="description"
      content="Explore premium extras for your Miami rental experience. Choose from luxury add-ons and services to enhance your car, yacht, or property booking with Miami Exotic Rents."
    />
  </Head>
  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div
      class="hero-background"
      style="
        background: url('https://miamiexotics.b-cdn.net/img/photo-1563720223185-11003d516935.avif')
          center/cover fixed;
      "
    >
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="hero-title">
        <span class="text-gold glow">Extras</span>
      </h1>
      <h2 class="hero-subtitle">
        <span class="text-white">Luxury Beyond the Drive</span>
      </h2>

      <p class="hero-description">
        Chauffeurs & Miami's Elite Clubs — Your personal driver service for the ultimate Miami experience
      </p>

      <!-- CTA Buttons -->
      <div class="hero-buttons">
        <a href="#chauffeurs" class="btn btn-gold">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
          Reserve Chauffeur
        </a>
        <a href="#clubs" class="btn btn-white">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Book VIP Club
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </div>
  </section>

  <!-- Chauffeur Service Section -->
  <section id="chauffeurs" class="why-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">Chauffeurs</span>
        </h2>
        <p class="section-description">
          Your personal driver service for the ultimate Miami experience. Whether it's VIP airport pickup, event
          transfers, or all-night rides — our professional chauffeurs ensure you arrive in style and comfort.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card chauffeur-card" data-vehicle="rolls-royce">
          <div class="chauffeur-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg"
              alt="Rolls Royce Chauffeur Service"
              loading="lazy"
            />
            <div class="chauffeur-badge">Premium</div>
          </div>
          <h3 class="feature-title">Rolls Royce Chauffeur</h3>
          <p class="feature-description">
            Ultimate luxury with our Rolls Royce fleet. Perfect for special occasions, business meetings, and making
            unforgettable entrances.
          </p>
          <div class="chauffeur-price">From $200/hour</div>
          <a
            href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20a%20chauffeur%20service.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20pricing%20details?"
            class="btn btn-gold chauffeur-btn"
            target="_blank"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
              />
            </svg>
            Reserve Now
          </a>
        </div>

        <div class="feature-card chauffeur-card" data-vehicle="escalade">
          <div class="chauffeur-image">
            <img
              src="https://di-uploads-pod38.dealerinspire.com/hendrickcadillacsouthpoint/uploads/2022/08/2022-Cadillac-Escalade-Social.png"
              alt="Escalade Chauffeur Service"
              loading="lazy"
            />
            <div class="chauffeur-badge">Popular</div>
          </div>
          <h3 class="feature-title">Escalade Chauffeur</h3>
          <p class="feature-description">
            Spacious luxury SUV perfect for group transfers, airport pickups, and Miami nightlife tours with style and
            comfort.
          </p>
          <div class="chauffeur-price">From $150/hour</div>
          <a
            href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20a%20chauffeur%20service.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20pricing%20details?"
            class="btn btn-gold chauffeur-btn"
            target="_blank"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
              />
            </svg>
            Reserve Now
          </a>
        </div>

        <div class="feature-card chauffeur-card" data-vehicle="maybach">
          <div class="chauffeur-image">
            <img
              src="https://miamiexotics.b-cdn.net/img/photo-1555215695-3004980ad54e.avif"
              alt="Maybach Chauffeur Service"
              loading="lazy"
            />
            <div class="chauffeur-badge">Exclusive</div>
          </div>
          <h3 class="feature-title">Competition Chauffeur</h3>
          <p class="feature-description">
            The pinnacle of automotive luxury. Experience unparalleled comfort and prestige with our Maybach chauffeur
            service.
          </p>
          <div class="chauffeur-price">From $250/hour</div>
          <a
            href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20a%20chauffeur%20service.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20pricing%20details?"
            class="btn btn-gold chauffeur-btn"
            target="_blank"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"
              />
            </svg>
            Reserve Now
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Clubs Section -->
  <section id="clubs" class="fleet-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="text-white">Clubs</span>
        </h2>
        <p class="section-description">
          Skip the line and walk straight into Miami's hottest nightlife destinations with VIP access, premium tables,
          and bottle service.
        </p>
      </div>

      <div class="clubs-grid">
        <div class="club-card" data-club="coco">
          <div class="club-image">
            <img src="/img/coco.png" alt="Coco Miami Nightclub" loading="lazy" />
            <div class="club-overlay"></div>
            <div class="club-badge">Luxury Dining</div>
          </div>
          <div class="club-content">
            <h3 class="club-title">Coco Miami</h3>
            <p class="club-description">
              Step into Miami’s luxury dining and nightlife, where the party starts and never ends. Lock in your VIP
              table and make every night a first-class experience.
            </p>
            <div class="club-features">
              <span class="club-feature">Fine Dining</span>
              <span class="club-feature">Elegant Atmosphere</span>
            </div>
            <a
              href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20VIP%20club%20access.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20package%20details?"
              class="btn btn-outline club-btn"
              target="_blank"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              Book VIP Table
            </a>
          </div>
        </div>

        <div class="club-card" data-club="strawberry">
          <div class="club-image">
            <img src="/img/strawberry.webp" alt="Strawberry Moon Miami" loading="lazy" />
            <div class="club-overlay"></div>
            <div class="club-badge">Beachfront</div>
          </div>
          <div class="club-content">
            <h3 class="club-title">Strawberry Moon</h3>
            <p class="club-description">
              The ultimate Miami beachfront vibes, neon lights, ocean breeze, and parties that go ‘til the sun comes up.
              Secure your VIP spot and own the night, Miami style.
            </p>
            <div class="club-features">
              <span class="club-feature">Ocean Views</span>
              <span class="club-feature">Tropical Vibes</span>
            </div>
            <a
              href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20VIP%20club%20access.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20package%20details?"
              class="btn btn-outline club-btn"
              target="_blank"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              Book VIP Table
            </a>
          </div>
        </div>

        <div class="club-card" data-club="e11even">
          <div class="club-image">
            <img src="/img/e11eleven.png" alt="E11EVEN Miami Nightclub" loading="lazy" />
            <div class="club-overlay"></div>
            <div class="club-badge">24/7 Party</div>
          </div>
          <div class="club-content">
            <h3 class="club-title">E11EVEN</h3>
            <p class="club-description">
              This is Miami’s 24/7 club, live shows, nonstop energy, and a crowd that doesn’t tap out. Book your VIP
              table and dive into the wildest nightclub experience in the city.
            </p>
            <div class="club-features">
              <span class="club-feature">24/7 Open</span>
              <span class="club-feature">Live Shows</span>
              <span class="club-feature">Ultra VIP</span>
            </div>
            <a
              href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20VIP%20club%20access.%20Can%20you%20please%20provide%20me%20with%20availability%20and%20package%20details?"
              class="btn btn-outline club-btn"
              target="_blank"
            >
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              Book VIP Table
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final Call to Action -->
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">
          <span class="text-gold glow">Your Miami Night Starts Here</span>
        </h2>
        <p class="cta-description">
          Experience Miami like never before with our luxury chauffeur services and exclusive club access.
        </p>
        <div class="cta-buttons">
          <a
            href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20your%20luxury%20chauffeur%20services.%20Can%20you%20please%20provide%20me%20with%20more%20information%20about%20your%20available%20vehicles%20and%20pricing?"
            class="btn btn-gold btn-large"
            target="_blank"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"
              />
            </svg>
            Reserve Chauffeur
          </a>
          <a
            href="https://wa.me/19542882717?text=Hi%20Miami%20Exotic%20Rents!%20I'm%20interested%20in%20booking%20VIP%20club%20access%20in%20Miami.%20Can%20you%20please%20provide%20me%20with%20information%20about%20available%20venues%20and%20packages?"
            class="btn btn-outline btn-large"
            target="_blank"
          >
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Book a Club Night
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="ftco-section bg-light">
    <div class="container">
      <div class="row">
        <div v-if="pending">Loading....</div>
        <div class="col-md-6 col-lg-4" v-else v-for="(extra, index) in extras" :key="index">
          <div class="car-wrap rounded ftco-animate">
            <div
              class="img rounded d-flex align-items-end"
              :style="{
                backgroundImage: `url(https:${extra.frontImage.fields.file.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div class="text">
              <h2 class="mb-0">
                <span>{{ extra.title }}</span>
              </h2>
              <div class="d-flex mb-3 mb-3 flex-column">
                <p class="price">${{ extra.dailyPrice }} <span>Daily</span></p>
                <div v-for="(feature, index) in extra.features" :key="index">
                  <div class="" style="font-weight: 500; color: black">{{ feature }}</div>
                </div>
              </div>
              <p class="d-flex mb-0 d-block">
                <nuxt-link
                  :to="{path: '/custom_request', query: {vehicle: `${extra.title} ${extra.maker}`}}"
                  class="btn btn-primary py-2 mr-1"
                  >Book Now</nuxt-link
                >
                <nuxt-link
                  :to="`/extras/${extra.title.toLowerCase().replace(/\s+/g, '-')}`"
                  class="btn btn-secondary py-2 ml-1"
                  >Details</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
<script>
export default {
  created: function () {
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    // document.body.appendChild(script);
  },
};
</script>
<script setup>
let extras = [];
console.log("setup properties");
const {data, pending, error} = await useFetch("http://localhost:3002/api/get/extras/", {
  // const {data, pending, error} = await useFetch("/api/get/extras/", {
  onResponse({request, response, options}) {
    // console.log(response);
    extras = response._data.data;
    console.log(extras);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://miamiexotics.b-cdn.net/js/main.js";
    document.body.appendChild(script);
  },
});
// console.log(data);
</script>

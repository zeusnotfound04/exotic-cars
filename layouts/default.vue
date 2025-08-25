<template>
  <div>
    <Menu></Menu>
    <div class="mainContainer">
      <slot />
    </div>
    <Footer> </Footer>
    <!-- loader -->
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KQSQBP3B"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
  </div>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href:
        "https://miamiexoticrents.com" +
        (route.path.endsWith("/") ? route.path : route.path + "/"),
    },
  ],
}));
</script>

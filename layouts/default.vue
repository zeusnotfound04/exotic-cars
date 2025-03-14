<template>
  <div>
    <Menu></Menu>
    <div class="mainContainer">
      <slot />
    </div>
    <Footer> </Footer>
    <!-- loader -->
  </div>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://miamiexoticrents.com" + route.path,
    },
  ],
}));
</script>

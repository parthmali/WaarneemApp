<template>
  <vue-slider v-model="priceRange"></vue-slider>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      priceRange: [0, 100],
    };
  },
};
</script>

<style>
.vue-slider {
  width: 400px !important;
}

.vue-slider-process {
  @apply bg-secondary-500;
}
</style>

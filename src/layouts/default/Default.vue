<template>
  <div class="default-page-wrapper">
    <default-nav />
    <slot />
    <default-footer />
    <go-to-top />
  </div>
</template>

<script>
import DefaultNav from './DefaultNav.vue';
import DefaultFooter from './DefaultFooter.vue';
import GoToTop from '@/layouts/components/GoToTop.vue';

export default {
  components: {
    DefaultNav,
    DefaultFooter,
    GoToTop
  }
};
</script>

<style lang="scss" scoped>
  .default-page-wrapper {
    padding: 2.5rem 0rem 3rem 0rem;
    background-color: $gray-light;
    min-height: calc(100vh - #{$footer-height});
  }
</style>

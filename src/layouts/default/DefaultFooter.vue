<template>
  <div class="footer">
    <div class="wrapper">
      <span>Developed by</span> <a href="https://github.com/kouts" target="_blank" rel="noopener">@kouts</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footer-height;
  line-height: $footer-height;
  background-color: darken($gray-light, 5%);
  text-align: center;
  a {
    color: darken($primary, 20%);
  }
}
</style>

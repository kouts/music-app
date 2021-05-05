<template>
  <div class="top-menu">
    <div class="wrapper">
      <router-link to="/" class="top-menu-link">MusicApp</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  padding: 0.5rem 1rem;
  background-color: $dark;
  justify-content: flex-start;
}

.top-menu-link {
  color: $white;
  font-size: 1.5rem;
  &:hover {
    text-decoration: none;
    color: $white;
  }
}
</style>

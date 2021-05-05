<template>
  <div class="album-card" :title="`${artist} - ${name} (${year})`" @click="clicked">
    <h2>{{ name }}</h2>
    <h3 class="subtitle text-gray">{{ parseInt(year) ? year : 'N/A' }}</h3>
    <div class="text-align-center">
      <img
        loading="lazy"
        :src="thumbnailUrl ? thumbnailUrl : require('../assets/no-image-available.png')"
        class="image"
        :alt="name"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idAlbum: {
      type: String,
      default: ''
    },
    idArtist: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    artist: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked', this.idAlbum)
    }
  }
}
</script>

<style lang="scss" scoped>
.album-card {
  cursor: pointer;
  box-shadow: $shadow-small;
  padding: 1rem;
  background-color: $white;
  height: auto;
  min-height: auto;
  max-height: auto;
  margin-bottom: 2rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: $shadow-big;
  }
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
  display: block;
  font-size: 1.2rem;
  line-height: 1;
}

.subtitle {
  display: block;
  font-size: 0.9rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.image {
  max-width: 75%;
  height: auto;
}

@media (min-width: $mobile-breakpoint) {
  .album-card {
    height: 350px;
    min-height: 350px;
    max-height: 350px;
  }
}
</style>

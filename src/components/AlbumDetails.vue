<template>
  <div class="album-details">
    <h1>{{ artist }} - {{ name }}</h1>
    <h2 class="subtitle">{{ year }}</h2>
    <div class="row">
      <div class="col-one-third">
        <img loading="lazy" :src="thumbnailUrl" class="image" :alt="name">
        <div>
          <strong>Style:</strong> {{ musicStyle }}<br />
          <strong>Genre:</strong> {{ musicGenre }}<br />
        </div>
      </div>
      <div class="col">
        <p v-if="description" class="text">
          <strong>Description</strong><br />
          {{ description }}
        </p>
        <p v-else class="text-gray">
          No description available.
        </p>
      </div>
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
    musicStyle: {
      type: String,
      default: ''
    },
    musicGenre: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    thumbnailUrl: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
  .album-details {
    box-shadow: $shadow-small;
    padding: 1.3rem;
    background-color: $white;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    display: block;
    font-size: 1.5rem;
    line-height: 1;
  }

  .subtitle {
    display: block;
    font-size: 1.1rem;
    color: $text-gray;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  .text {
    white-space: pre-line;
  }

</style>

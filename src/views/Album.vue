<template>
  <div class="wrapper">
    <div class="row album-details-wrapper">
      <div class="col">
        <div v-if="loading" class="dummy-album-details">
          <h1>Loading album details...</h1>
        </div>
        <template v-else>
          <album-details
            v-if="album.idAlbum"
            :id-album="album.idAlbum"
            :id-artist="album.idArtist"
            :name="album.strAlbum"
            :artist="album.strArtist"
            :year="album.intYearReleased"
            :description="album.strDescriptionEN"
            :music-style="album.strStyle"
            :music-genre="album.strGenre"
            :thumbnail-url="album.strAlbumThumb"
          />
          <div v-else class="dummy-album-details">
            <h1>Album not found</h1>
          </div>
        </template>
        <router-link :to="{ name: 'home' }" class="back"> &laquo; back </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AlbumDetails from '@/components/AlbumDetails.vue'

export default {
  components: {
    AlbumDetails
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      album: 'album'
    })
  },
  async mounted() {
    const id = this.$route.params.id
    this.loading = true
    await this.fetchAlbum(id)
    this.loading = false
  },
  methods: {
    ...mapActions(['fetchAlbum'])
  }
}
</script>

<style lang="scss" scoped>
.album-details-wrapper {
  margin-top: 2rem;
}

.dummy-album-details {
  box-shadow: $shadow-small;
  padding: 1.3rem 1.3rem 300px 1.3rem;
  background-color: $white;
  h1 {
    margin: 0;
    font-size: 1.2rem;
  }
}

.back {
  float: right;
  margin-top: 0.5rem;
}
</style>

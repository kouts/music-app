<template>
  <div class="wrapper">
    <div class="text-align-center">
      <h1>Pink Floyd discography</h1>
    </div>
    <div v-if="loading" class="row">
      <div v-for="card in [1, 2, 3, 4, 5, 6]" :key="card" class="col-one-third">
        <div class="dummy-mini-card"></div>
      </div>
    </div>
    <div v-else class="row">
      <div v-for="album in albums" :key="album.idAlbum" class="col-one-third">
        <album-card
          :id-album="album.idAlbum"
          :id-artist="album.idArtist"
          :name="album.strAlbum"
          :artist="album.strArtist"
          :year="album.intYearReleased"
          :thumbnail-url="album.strAlbumThumb"
          @clicked="goToAlbum"
        />
      </div>
      <div v-if="albums.length === 0" class="col text-align-center">
        <h2>No albums found</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AlbumCard from '@/components/AlbumCard.vue'

// Artist Id for Pink Floyd
const artistId = '111259'

export default {
  components: {
    AlbumCard
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      albums: 'albumsSortedByYear'
    })
  },
  async mounted() {
    this.loading = true
    await this.fetchAlbums(artistId)
    this.loading = false
  },
  methods: {
    ...mapActions(['fetchAlbums']),
    goToAlbum(idAlbum) {
      this.$router.push({ name: 'album', params: { id: idAlbum } })
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 2rem;
  font-weight: 100;
}
.dummy-mini-card {
  box-shadow: $shadow-small;
  background-color: $white;
  height: 350px;
  margin-bottom: 2rem;
}
</style>

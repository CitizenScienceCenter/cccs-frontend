<template>
  <div>
    <md-empty-state v-if="media.length === 0" md-icon="devices_other" md-label="Add some media!" md-description="Add media to help users classify and complete tasks">
        <md-button v-on:click="uploadMedia" class="md-primary md-raised">Add some files</md-button>
      </md-empty-state>
    <md-list v-if="media.length > 0">
      <md-list-item :key="m.id" v-for="m in media">
        <md-icon></md-icon>
        <img class="thumb" :src="getPath(m.path)" v-if="isImage(m.path)" />
        <span class="md-list-item-text">{{m.name}}</span>
        <md-button :href="getPath(m.path)" class="md-icon-button md-list-action">
          <md-icon class="md-primary">vertical_align_bottom</md-icon>
        </md-button>
        <md-button v-on:click="deleteMedia(m.id)" class="md-icon-button md-list-action">
          <md-icon class="md-primary">delete</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
    <md-button v-on:click="uploadMedia" class="md-fab md-plain md-fab-right">
      <md-icon>vertical_align_top</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'media-list',
  props: ['id'],
  data () {
    return {
      media: [],
      userID: undefined
    }
  },
  mounted () {
    this.fetchMedia()
    this.userID = localStorage.getItem('user_id')
  },
  methods: {
    fetchMedia () {
      console.log(this.id)
      this.$ac.apis.Media.get_media ({
        search_term: this.id || undefined
      })
        .then(req => {
          console.log(req.body)
          this.media = req.body
        })
        .catch(err => {
          if (err.response.status === 404) {
            // TODO load 404 page
          } else {
            // TODO show errror
          }
        })
    },
    uploadMedia () {
      this.$router.push({
        name: 'UploadMediaTask',
        params: {
          id: this.$route.params.id,
          tid: this.$route.params.tid
        }
      })
    },
    isImage (path) {
      return true
    },
    getPath (path) {
      return path.replace('./static', 'http://localhost:8080/static')
    },
    deleteMedia (id) {
      this.$ac.apis.Media.delete_medium({id: id})
        .then(res => {
          this.fetchMedia()
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.thumb {
  width: 4%;
}
</style>

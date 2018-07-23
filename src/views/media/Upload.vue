<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="upload">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Upload a File</div>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <md-field>
              <label for="name">ID</label>
              <md-input type="text" v-model="form.id" name="id" id="id" :disabled="loading" />
            </md-field>
  
            <md-field>
              <label>Select Files</label>
              <md-file v-model="filenames" @md-change="fileSelected($event)" multiple />
            </md-field>
          </div>
        </md-card-content>

  
        <md-card-actions>
          <md-button type="submit" ref='upload' class="md-primary" :disabled="loading">Upload</md-button>
        </md-card-actions>
      </md-card>
  
      <md-snackbar :md-active.sync="fileSaved">Your media has been added!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
  export default {
    name: 'UploadMedia',
    data() {
      return {
        msg: 'Upload Here',
        form: {
          id: this.$route.query.id || this.$route.params.tid,
          attachment: {
            name: ''
          },
        },
        filenames: '',
        selected: null,
        fileSaved: false
      }
    },
    computed: mapState({
      loading: state => state.settings.loading
    }),
    created() {},
    methods: {
      fileSelected(ev) {
        this.selected = ev
      },
      upload() {
        for (let i = 0; i < this.selected.length; i++) {
          this.fileSaved = false
          const f = this.selected.item(i)
          this.form.attachment = f
          this.$ac.apis.Media.upload(this.form)
            .then(req => {
              console.log(req)
              this.fileSaved = true
              if (!this.form.id) {
                console.log('adding media')
                this.$store.commit('upload/addContent', req.body.id)
              }
            })
            .catch((e) => {
              console.error(e)
            })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/media/upload.scss'>
</style>

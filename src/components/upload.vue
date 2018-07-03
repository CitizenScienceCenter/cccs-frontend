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
              <md-input type="text" v-model="form.id" name="id" id="id" disabled/>
            </md-field>
  
            <md-field>
              <label>Select Files</label>
              <md-file v-model="filenames" @md-change="fileSelected($event)" :multiple="multiple" />
            </md-field>
          </div>
        </md-card-content>
  
        <md-progress-bar md-mode="indeterminate" v-if="sending" />
  
        <md-card-actions>
          <md-button type="submit" ref='upload' class="md-primary" v-if="embedded" :disabled="sending">Upload</md-button>
        </md-card-actions>
      </md-card>
  
      <md-snackbar :md-active.sync="fileSaved">Your media has been added!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    name: 'UploadMedia',
    props: ['id', 'multiple', 'embedded'],
    data() {
      return {
        msg: 'Upload Here',
        sending: false,
        form: {
          id: this.id || this.storeID || this.$route.query.id,
          // id: this.$route.query.id || this.$route.params.tid,
          attachment: {
            name: ''
          },
        },
        filenames: '',
        selected: null,
        fileSaved: false
      }
    },
    computed: mapGetters({
      storeID: state => state.upload.id
    }),
    created() {},
    methods: {
      fileSelected(ev) {
        this.selected = ev
        if (this.embedded) {
          this.$store.dispatch('upload/SET_CONTENT', ev)
        }
      },
      upload() {
        this.sending = true
        for (let i = 0; i < this.selected.length; i++) {
          this.fileSaved = false
          const f = this.selected.item(i)
          this.sending = true
          this.form.attachment = f
          this.$ac.apis.Media.upload(this.form)
            .then(req => {
              this.sending = false
              console.log(req)
              this.fileSaved = true
            })
            .catch((e) => {
              this.sending = false
              console.error(e)
            })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>

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
                <md-input type="text" v-model="form.id" name="id" id="id" :disabled="sending" />
            </md-field>

            <md-field>
                <label>Single</label>
                <md-file v-model="filename" @md-change="fileSelected($event)" />
            </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Upload</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="fileSaved">Your project has been created, add some tasks!</md-snackbar>
    </form>
  </div>
</template>

<script>

export default {
  name: 'UploadMedia',
  data () {
    return {
      msg: 'Upload Here',
      sending: false,
      form: {
        id: null,
        attachment: {name: ''},
      },
      filename: '',
      fileSaved: false
    }
  },
  created () {
  },
  methods: {
    fileSelected(ev) {
      this.form.attachment = ev[0]
    },
    upload () {
      this.sending = true
      this.$ac.apis.Media.upload(this.form)
        .then(req => {
          this.sending = false
          console.log(req)
        })
        .catch((e) => {
          this.sending = false
          console.error(e)
        })
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

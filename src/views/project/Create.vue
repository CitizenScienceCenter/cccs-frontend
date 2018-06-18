<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="create">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create a Project</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="name">Name</label>
            <md-input type="text" v-model="project.name" name="name" id="name" :disabled="sending" />
          </md-field>

          <md-field>
            <label for="platform">Platform</label>
            <md-select v-model="project.platform" name="platform" id="platform">
              <md-option :value="t" :key="t" v-for="t in getModel()">{{t}}</md-option>
            </md-select>
          </md-field>

            <md-field>
              <label>Description</label>
              <md-textarea type="text" v-model="project.description" md-autogrow></md-textarea>
            </md-field>

            <md-field>
              <label>Live?</label>
              <br>
              <md-switch v-model="project.active" class="live-switch md-primary"></md-switch>
            </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="projectSaved">Your project has been created, add some tasks!</md-snackbar>
    </form>
  </div>
</template>

<script>

export default {
  name: 'CreateProject',
  data () {
    return {
      msg: 'Please create a project',
      sending: false,
      project: {
        name:'',
        description:'',
        platform:'Desktop',
        owned_by: ''
      },
      model: {
        types: [
          'Desktop',
          'Mobile',
          'Both'
        ]
      },
      projectSaved: false
    }
  },
  created () {
    console.log(this.project)
  },
  methods: {
    getModel() {
      return this.model.types
    },
    create () {
      console.log(this.project)
      this.$ac.apis.Projects.create_project({ project: this.project })
        .then(req => {
          console.log(req)
          this.$router.push({name: 'CreateTask', params: {id: req.body.id}})
          // this.$router.push({name: 'Dashboard'})
        })
        .catch((e) => console.error(e))
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
.live-switch {
  padding-top: 1%;
}
</style>

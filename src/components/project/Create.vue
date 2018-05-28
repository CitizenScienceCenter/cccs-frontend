<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item md-size-70 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create a Project</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="name">Name</label>
            <md-input type="text" name="name" id="name" :disabled="sending" />
          </md-field>

          <md-field>
            <label for="type">Type</label>
            <md-select name="type" id="type">
              <md-option :key="t" :value="t" v-for="t in project.types">{{t}}</md-option>
            </md-select>
          </md-field>

          <md-field>
            <label for="desc">Description</label>
            <md-input type="text" name="desc" id="desc" :disabled="sending" />
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
        types: [
          'Desktop',
          'Mobile',
          'Both'
        ]
      },
      projectSaved: false
    }
  },
  methods: {
    create () {
      this.$cc.api_project_create({ project: { email: this.email, pwd: this.password } })
        .then(req => {
          localStorage.setItem('user', req['data'])
          console.log(req)
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
</style>

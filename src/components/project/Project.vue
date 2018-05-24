<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create a Project</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="email">Name</label>
            <md-input v-model="text" type="email" name="email" id="email" autocomplete="email" :disabled="sending" />
          </md-field>

              <md-field>
                <label for="password">Password</label>
                <md-input v-model="text" type="password" id="password" name="password" autocomplete="password" :disabled="sending" />
              </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create</md-button>
        </md-card-actions>
      </md-card>

      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create a Project</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <md-field>
              Lorem Ipsum Dolor
            </md-field>
          </div>
        </md-card-content>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ email }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Create Project',
  data () {
    return {
      msg: 'Please create a project',
      email: '',
      password: ''
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

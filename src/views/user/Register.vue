<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Sign Up</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="email">Email</label>
            <md-input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="sending" />
          </md-field>

              <md-field>
                <label for="pwd">Password</label>
                <md-input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="sending" />
              </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ email }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      msg: 'Sign up for an account',
      email: '',
      password: '',
      sending: false,
      userSaved: false
    }
  },
  methods: {
    register () {
      console.log(this.email)
      this.sending = true
      this.$ac.apis.Users.register({ user: { email: this.email, pwd: this.password } })
        .then(req => {
          console.log(req)
          this.userSaved = true
          this.$router.push('login')
        })
        .catch((e) => console.error(e))
        .finally(() => this.sending = false)
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

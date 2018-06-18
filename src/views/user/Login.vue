<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Login</div>
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
          <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="success">Welcome, {{username}}</md-snackbar>
      <md-snackbar :md-active.sync="error">Login Failed</md-snackbar>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Please login here",
      email: "",
      password: "",
      username: "",
      error: false,
      success: false,
      sending: false
    };
  },
  methods: {
    login() {
      this.sending = true;
      this.$store
        .dispatch("user/login", { user: { email: this.email, pwd: this.password } })
        .then(() => {
          this.$router.push({name: 'Dashboard'});
        });
    }
  }
};
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

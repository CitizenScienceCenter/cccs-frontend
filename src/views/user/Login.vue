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
            <md-input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
          </md-field>

              <md-field>
                <label for="pwd">Password</label>
                <md-input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
              </md-field>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="loading" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="loading">Login</md-button>
        </md-card-actions>
      </md-card>

      <!-- <md-snackbar :md-active.sync="currentUser">Welcome, {{currentUser.email}}</md-snackbar>
      <md-snackbar :md-active.sync="error">Login Failed</md-snackbar> -->
    </form>
  </div>
</template>

<script>
import _default,{ mapState,mapGetters } from "vuex"
export default {
  name: "Login",
  data() {
    return {
      msg: "Please login here",
      email: "",
      password: "",
      username: "",
      success: false
    };
  },
  computed: mapState({
    currentUser: state => state.user.currentUser,
    loading: state => state.user.loading,
    error: state => state.user.error
  }),
  watch: {
    'currentUser'(to, from) {
      if (to !== null || to !== undefined) {
        this.$router.push({name: 'Dashboard'});
      }
    },
  },
  mounted() {
    // TODO errors should be in a global state and cleared on load
    this.$store.commit('user/SET_ERROR', null)
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", { user: { email: this.email, pwd: this.password } })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>

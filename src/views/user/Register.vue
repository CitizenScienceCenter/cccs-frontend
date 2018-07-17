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
          <md-button type="submit" class="md-primary" :disabled="loading">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ email }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      msg: "Sign up for an account",
      email: "",
      password: "",
      userSaved: false
    };
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
  methods: {
    register() {
      this.$store.dispatch('user/register', this.user)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/main.scss'>
</style>

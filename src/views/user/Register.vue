<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="register">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">{{ $t('views.user.register')}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
          <md-field>
            <label for="email">{{ $t('views.user.email')}}</label>
            <md-input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
          </md-field>

              <md-field>
                <label for="pwd">{{ $t('views.user.pwd')}}</label>
                <md-input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
              </md-field>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="loading">{{ $t('views.user.register')}}</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">	{{ $t('views.user.reg_success', {email: email}) }}</md-snackbar>
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
      const user = {
        email: this.email,
        pwd: this.password
      }
      this.$store.dispatch('user/register', user).then(r => {
          this.$router.dispatch('/login')
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/main.scss'>
</style>

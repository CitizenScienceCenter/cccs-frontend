<template>
    <div class="login-wrapper border border-light">
    <div>
      <button class="btn btn-lg btn-primary btn-block" v-on:click="allow">Allow</button>
      <button class="btn btn-lg btn-danger btn-block" v-on:click="deny">Deny</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Sign up for an account',
      email: '',
      password: ''
    }
  },
  methods: {
    allow () {
      const u = JSON.parse(localStorage.getItem('user'))
      console.log(u)
      this.$http
        .post('/users/authorize', { user_id: u.id, project_id: '1' })
        .then(request => {
          console.log(request)
          const q = this.$route.query
          console.log(this.$route.query.redirect_uri)
          window.location = q.redirect_uri
        })
        .catch((e) => console.error(e))
    },
    deny () {
      console.log('denied')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>


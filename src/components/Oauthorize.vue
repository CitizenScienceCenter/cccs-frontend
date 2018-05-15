<template>
    <div class="login-wrapper border border-light">
    <form class="form-allow">
      <button class="btn btn-lg btn-primary btn-block" type="submit" @submit.prevent="allow">Allow</button>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @submit.prevent="deny">Deny</button>
    </form>
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
    register () {
      console.log(this.email)
      this.$http
        .post('/users/oauth/authorize', { email: this.email, pwd: this.password })
        .then(request => console.log(request))
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

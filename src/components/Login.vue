<template>
    <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">{{msg}}</h2>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @submit.prevent="login">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Please login here',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http
        .post('/users/login', { email: this.email, pwd: this.password })
        .then(request => {
          const u = request.data
          console.log(u)
          localStorage.setItem('api_key', u['api_key'])
          localStorage.setItem('user', JSON.stringify(request.data))
          // TODO add token to axios
          console.log(this.$route.query.redirect)
          const q = this.$route.query || '/'
          this.$router.push(q.redirect)
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

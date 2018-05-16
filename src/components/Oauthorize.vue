<template>
    <div class="login-wrapper border border-light">
    <div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @submit.prevent="allow">Allow</button>
      <button class="btn btn-lg btn-danger btn-block" type="submit" @submit.prevent="deny">Deny</button>
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
      console.log('allowed')
      this.$http
        .post('/users/oauth/authorize', { user_id: localStorage.getItem('user').user_id, project_id: 1 })
        .then(request => console.log(request))
        .catch((e) => console.error(e))
    },
    deny () {
      console.log('denied')
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

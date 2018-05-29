<template>
    <div>
    <form novalidate class="md-layout" @submit.prevent="">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">User Details</div>
        </md-card-header>

        <md-card-content>
          <div v-if="user" class="md-layout">
            <md-field>
                <label for="email">Email</label>
                <md-input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled/>
            </md-field>

          </div>
        </md-card-content>


        <!-- <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Edit</md-button>
        </md-card-actions> -->
      </md-card>

    </form>
  </div>
</template>

<script>

export default {
  name: 'ViewUser',
  data () {
    return {
        user: undefined
    }
  },
  mounted () {
      this.fetchUser()
  },
  methods: {
    fetchUser () {
        this.$ac.apis.Users.get4({search_term: localStorage.getItem('api_key')})
        .then(req => {
            if (req.body.length > 0) {
                this.user = req.body[0]
            }
        })
    },
    login () {
      this.sending = true
      this.$ac.apis.Users.login({ user: { email: this.email, pwd: this.password } })
        .then(req => {
          this.success = true
          localStorage.setItem('api_key', req['body']['api_key'])
          localStorage.setItem('user', JSON.stringify(req['body']))
          this.username = req['body']['email']
          this.$router.push('dashboard')
        })
        .catch((e) => this.error = true)
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

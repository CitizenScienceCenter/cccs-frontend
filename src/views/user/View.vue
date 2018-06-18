<template>
  <div>
    <form novalidate class="md-layout" disabled>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">User Details</div>
        </md-card-header>
  
        <md-card-content>
          <div v-if="user" class="md-layout">
            <md-field>
              <label for="user.email">Email</label>
              <md-input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled/>
            </md-field>

            <md-field>
              <label for="user.email">API Key</label>
              <md-input v-model="user.api_key" type="text" name="api" id="api"/>
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
    data() {
      return {
        user: undefined,
        userId: this.$route.params.id || localStorage.getItem('user_id')
      }
    },
    mounted() {
      //TODO handle user searching from ID or API Key
      this.fetchUser()
    },
    methods: {
      fetchUser() {
        this.$ac.apis.Users.get_user({
            id: this.userId
          })
          .then(req => {
            this.user = req.body
          }).catch(err => {
            // TODO show error snack bar
            console.error(err)
          })
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

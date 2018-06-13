<template>
    <div>
    <md-progress-spinner class="center" md-mode="indeterminate" v-if="project === undefined"></md-progress-spinner>
    <form novalidate class="md-layout" v-if="project" @submit.prevent="">
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">{{project.name}}</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <md-field>
                <label for="email">Description</label>
                <md-input v-model="project.description" type="text" name="desc" id="desc" disabled/>
            </md-field>

            <md-field>
              <label>Live?</label>
              
              <md-switch v-model="project.active" class="live-switch md-primary"></md-switch>
            </md-field>

          </div>
          <br><br>
        </md-card-content>

         <md-button v-if="userID === project.owned_by" class="md-fab md-plain md-fab-bottom-right">
            <md-icon>edit</md-icon>
        </md-button>


        <!-- <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Edit</md-button>
        </md-card-actions> -->
      </md-card>

    </form>
  </div>
</template>

<script>

export default {
  name: 'ViewOne',
  data () {
    return {
        task: undefined,
        userID: undefined
    }
  },
  mounted () {
      this.fetchTask()
      this.userID = localStorage.getItem('user_id')
  },
  methods: {
    fetchTask () {
        this.$ac.apis.Tasks.get_one4({id: this.$route.params.tid || undefined})
        .then(req => {
            this.task = req.body
        })
        .catch(err => {
            if (err.response.status === 404) {
                // TODO load 404 page
            } else {
                // TODO show errror
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
    margin-left: 50%;
}
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
.live-switch {
  padding-top: 1%;
}
</style>

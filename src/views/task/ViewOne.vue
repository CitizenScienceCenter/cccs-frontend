<template>
  <div>
    <md-progress-spinner class="center" md-mode="indeterminate" v-if="task === undefined"></md-progress-spinner>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-task" md-label="Task">
        <form novalidate class="md-layout" v-if="task">
          <md-card class="md-layout-item">
            <md-card-header>
              <div class="md-title">{{task.title}}</div>
            </md-card-header>
  
            <md-card-content>
              <div class="md-layout">
                <md-field>
                  <label for="email">Title</label>
                  <md-input v-model="task.title" type="text" name="desc" id="desc" disabled/>
                </md-field>
  
                <md-field>
                  <label>Required?</label>
  
                  <md-switch v-model="task.sequence" class="live-switch md-primary"></md-switch>
                </md-field>
  
                <md-field>
                  <label>Content</label>
                  <md-textarea type="text" v-model="task.content_str" md-autogrow></md-textarea>
                </md-field>
  
              </div>
              <br><br>
            </md-card-content>
          </md-card>
        </form>
      </md-tab>
      <md-tab id="tab-media" md-label="Media">
        <media-list :id="$route.params.tid"></media-list>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import MediaList from '@/components/media-list.vue';
  export default {
    name: 'ViewOne',
    data() {
      return {
        task: undefined,
        userID: undefined
      }
    },
    mounted() {
      this.fetchTask()
      this.userID = localStorage.getItem('user_id')
    },
    components: {
      MediaList: MediaList
    },
    methods: {
      fetchTask() {
        this.$ac.apis.Tasks.get_task({
            id: this.$route.params.tid || undefined
          })
          .then(req => {
            this.task = req.body
            console.log(req.body)
            this.task['content_str'] = JSON.stringify(this.task.content)
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

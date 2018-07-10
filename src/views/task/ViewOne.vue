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
  import MediaList from '@/components/media-list.vue'
  import { mapState } from "vuex"
  export default {
    name: 'ViewOne',
    data() {
      return {
        userID: undefined
      }
    },
  computed: mapState({
    task: state => state.task.selectedTask
  }),
    mounted() {
      this.$store.dispatch('task/getTask', this.$route.params.tid)
      .then(() => {
        this.task['content_str'] = JSON.stringify(this.task.content)
      })
      this.userID = localStorage.getItem('user_id')
    },
    components: {
      MediaList: MediaList
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view-one.scss'>

</style>
  

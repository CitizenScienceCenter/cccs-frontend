 <template>
  <div>
    <project-list></project-list>
  </div>
</template>

<script>
  import ViewProject from '@/views/project/View.vue'; //component name should be in camel-case
  import ProjectList from '@/components/project-list.vue'
  export default {
    name: 'MyProjects',
    data() {
      return {
        projects: [],
        userID: undefined
      }
    },
    components: {ViewProject: ViewProject, ProjectList: ProjectList},
    mounted() {
      this.fetchProjects()
      this.userID = localStorage.getItem('user_id')
    },
    methods: {
      fetchProjects() {
        this.$ac.apis.Projects.get_projects({
            search_term: this.userID || undefined
          })
          .then(req => {
            this.projects = req.body
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

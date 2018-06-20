 <template>
  <div>
    <md-list v-if="task">
      <md-card>
        <md-icon></md-icon>
        <span class="md-list-item-text">{{task.title}}</span>
        <upload v-if="task.content.data_type === 'file'" :id=task.id></upload>
        <md-button :to="{name:'TakePart', params: {id: task.id}}" class="md-icon-button md-list-action" title="Take Part!">
          Submit
        </md-button>
      </md-card>

      <md-divider class="md-inset"></md-divider>

    </md-list>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Upload from '@/components/upload.vue'
export default {
  name: "task-submission",
  props: ['task'],
  data() {
    return {
    }
  },
  components: {Upload: Upload},
  computed: mapState({
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user
  }),
  mounted() {
  },
  methods: {
  }
};
</script>

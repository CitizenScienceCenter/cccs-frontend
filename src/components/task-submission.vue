 <template>
  <div>
    <md-list v-if="task">
      <md-card>
        <md-icon></md-icon>
        <span class="md-list-item-text">{{task.title}}</span>
        <upload v-if="task.content.answer.type === 'file'" :id=task.id></upload>
        <md-field v-if="task.content.answer.type === 'text'">
          <label for="qutxt">Answer Text</label>
          <md-input type="text" v-model="task.content.question.text" name="qutxt" id="qutxt" :disabled="sending" />
        </md-field>
        <!-- TODO handle multiple choice -->
        <md-button :to="{name:'TakePart', params: {id: task.id}}" class="md-icon-button md-list-action" title="Take Part!">
          Submit
        </md-button>
      </md-card>

      <md-divider class="md-inset"></md-divider>

    </md-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue";
export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      // submission: {
      //   content: {
      //   },
      //   task_id: undefined,
      //   user_id: undefined
      // }
    };
  },
  components: { Upload: Upload },
  computed: mapState({
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user
  }),
  mounted() {
    console.log(this.task.content.answer.type);
  },
  methods: {}
};
</script>

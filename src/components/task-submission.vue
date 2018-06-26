 <template>
  <div>
    <md-list v-if="task">
      <md-card>
        <md-icon></md-icon>
        <span class="md-list-item-text md-alignment-top-center">{{task.title}}</span>
        <upload v-if="task.content.answer.type === 'file'" :id=task.id :content=content></upload>
        <md-field v-if="task.content.answer.type === 'text'">
          <label for="qutxt">{{task.content.question.text}}</label>
          <md-input type="text" v-model="content" @keyup="handleValue" name="qutxt" id="qutxt" />
        </md-field>
        <submission-multiple-choices :choices="task.content.answer.choices" v-if="task.content.answer.type === 'multiple_choice'"></submission-multiple-choices>
        <!-- TODO handle multiple choice -->
        <!-- <md-button :to="{name:'TakePart', params: {id: task.id}}" class="md-icon-button md-list-action" title="Take Part!">
          Submit
        </md-button> -->
      </md-card>

      <md-divider class="md-inset"></md-divider>

    </md-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue"
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue"
export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      content: ""
      // submission: {
      //   content: {
      //   },
      //   task_id: undefined,
      //   user_id: undefined
      // }
    };
  },
  components: { Upload, SubmissionMultipleChoices},
  computed: mapState({
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user
  }),
  mounted() {
  },
  methods: {
    handleValue() {
      let sub = Object.assign({}, this.submission)
      sub.content = this.content
      this.$store.commit('submission/SET_SUBMISSION', sub)
    }
  }
};
</script>

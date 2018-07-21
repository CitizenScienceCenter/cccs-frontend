 <template>
 
  <div class="content" v-if="task">
    <h2 class="md-list-item-text md-alignment-top-center">{{task.title}}</h2>
      <div class="md-layout-item md-layout md-gutter">
        <md-card v-if="items.length" class="md-layout-item sub-image-card md-size-50"> 
          <featured-carousel class="featured-carousel" :items=items v-if="items.length > 0"></featured-carousel>                
        </md-card>
        <md-card class="sub-card md-layout-item">
      
        <md-icon></md-icon>
        <span class="md-list-item-text md-alignment-top-center">{{task.title}}</span>
        <upload v-if="task.content.answer.type.indexOf('file') !== -1" :embedded="true" :multiple="task.content.answer.type === 'multiple_files'"></upload>
        <md-field v-if="task.content.answer.type === 'text' || task.content.answer.type.indexOf('file') !== -1">
          <label for="qutxt">{{task.content.question.text}}</label>
          <md-input type="text" v-model="content.text" @keyup="handleText" name="qutxt" id="qutxt" />
        </md-field>
        <submission-multiple-choices :choices="task.content.answer.choices" :type="task.content.answer.type" v-if="task.content.answer.type === 'multiple_choice'"></submission-multiple-choices>
        <!-- TODO handle multiple choice -->
        <md-button :to="{name:'TakePart', params: {id: task.id}}" class="md-icon-button md-list-action" title="Take Part!">
          Submit
        </md-button> 
      </md-card>

      </div>
  </div>
    
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue"
import FeaturedCarousel from '@/components/featured-carousel.vue'
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue"

export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      items: [],
      content: {
        text: ""
      }
    };
  },
  components: { Upload, SubmissionMultipleChoices, FeaturedCarousel},
  computed: mapState({
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user,
    taskMedia: state => state.media.media
  }),
  watch: {
    'task'(to, from) {
      console.log(to.id)
      this.$store.dispatch('media/getMedia', this.task.id)
    },
    'taskMedia'(to, from) {
      console.log(to)
      to.forEach(m => {
        const path = m.path.replace('./static', 'http://localhost:8080/static')
        console.log(m)
        this.items.push({
          name: m.name,
          number: this.items.length + 1,
          img: path
        })
      });
    }
  },
  methods: {
    handleText() {
      let sub = Object.assign({}, this.submission)
      sub['content']['text'] = this.content.text
      console.log(sub.content.text)
      this.$store.commit('submission/SET_SUBMISSION', sub)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

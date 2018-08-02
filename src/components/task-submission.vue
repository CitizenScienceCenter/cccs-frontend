 <template>
 
  <div class="content" v-if="task">
    
      
        <md-card class="task-title md-layout-item md-size-100">
          <!-- <md-card-header>
            <div class="featured-title md-title"><b>{{task.title}}</b></div>
        </md-card-header> -->
        </md-card>
      <div class="md-layout-item md-layout md-gutter">
        <md-card v-if="items.length" class="md-layout-item sub-image-card md-size-60"> 
           <viewer :images="items">
              <img v-for="src in items" :src="src" :key="src">
            </viewer>
          <!-- <featured-carousel class="featured-carousel" :items=items v-if="items.length > 0"></featured-carousel>                 -->
        </md-card>
        <!-- TODO conditional sizing -->
        <md-card class="sub-card md-layout-item md-size-40">
          <md-icon></md-icon>
          <md-card v-for="(answer, i) in task.content.answers" v-bind:key="i">
            <upload v-if="answer.type.indexOf('file') !== -1" :embedded="true" :multiple="answer.type === 'multiple_files'"></upload>
            <md-field v-if="answer.type === 'text'">
              <label for="qutxt">{{task.content.question.text}}</label>
              <md-input type="text" v-model="content.text" @keyup="handleText" name="qutxt" id="qutxt" />
            </md-field>
            <submission-multiple-choices :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
          </md-card>
           <md-card-actions>
            <md-button :to="{name:'TakePart', params: {id: task.id}}" class="smd-list-action" title="Take Part!">
                Submit
            </md-button> 
          </md-card-actions>
          
        </md-card>

      </div>
  </div>
    
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue";
import FeaturedCarousel from "@/components/featured-carousel.vue";
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue";

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
  components: { Upload, SubmissionMultipleChoices, FeaturedCarousel },
  computed: mapState({
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user,
    taskMedia: state => state.media.media
  }),
  watch: {
    task(to, from) {
      console.log(to.id)
      if (to) {
        this.$store.dispatch("media/getMedia", this.task.id)
      }
    },
    taskMedia(to, from) {
      console.log(to)
      to.forEach(m => {
        const path = m.path.replace("./static", "http://localhost:8080/static");
        console.log(m);
        this.items.push(path);
        // this.items.push({
        //   name: m.name,
        //   number: this.items.length + 1,
        //   img: path
        // });
      });
    }
  },
  methods: {
    handleText() {
      let sub = Object.assign({}, this.submission);
      sub["content"]["text"] = this.content.text;
      console.log(sub.content.text);
      this.$store.commit("submission/SET_SUBMISSION", sub);
    }
  }
};
</script>
<style lang="scss" scoped>

.task-title {
  text-align: center;
}

.content {
  width: 90%;
}
</style>

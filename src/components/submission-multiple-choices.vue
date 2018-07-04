<template>
  <div>
    <!-- <md-empty-state v-if="choices.length === 0" md-icon="devices_other" md-label="Create your first task" md-description="Creating project, you'll be able to add media and share it with people.">
        <md-button :to="{name:'CreateTask', params: {id: project_id}}" class="md-primary md-raised">Create first task</md-button>
    </md-empty-state> -->
      <md-field>
        <label for="choices">Select an answer:</label>
        <md-select v-model="selections" name="choices" id="choices" multiple @md-selected="onSelect">
          <md-option :key="index" v-for="(c, index) in choiceSelection" value="c.value">{{c.text}}</md-option>
        </md-select>
      </md-field>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SubmissionMultipleChoices",
  props: ["choices"],
  data() {
    return {
      choiceSelection: this.choices,
      selections: []
    };
  },
  computed: mapState({
    submission: state => state.submission.submission
  }),
  created() {},
  methods: {  
    onSelect() {
      let sub = Object.assign({}, this.submission)
      sub.content = { selections: this.selections }
      this.$store.commit('submission/SET_SUBMISSION', sub)
    
    }
  }
};
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

.active {
  opacity: 0.8;
  pointer-events: none;
}
</style>

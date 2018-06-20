<template>
  <div>
    <md-table v-model="tasks" md-card @md-selected="onSelect" @change="change">
      <md-table-toolbar>
        <h1 class="md-title">Tasks for Project</h1>
      </md-table-toolbar>
      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-start">{{ `${count} Tasks Selected` }}</div>
  
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" v-on:click="edit" v-if="count === 1">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button" v-on:click="addMedia" v-if="count === 1">
            <md-icon>perm_media</md-icon>
          </md-button>
          <md-button class="md-icon-button" v-on:click="del">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
        <md-table-cell md-label="Sequence" md-sort-by="sequence">{{ item.sequence }}</md-table-cell>
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Data Type" md-sort-by="data_type">
          <md-field>
            <md-select v-model="item.content.data_type" name="data_type" id="data_type">
              <md-option value="text">Text</md-option>
              <md-option value="long_text">Long Text</md-option>
              <md-option value="file">File</md-option>
              <md-option value="file">Question</md-option>
            </md-select>
          </md-field>
        </md-table-cell>
        <md-table-cell md-label="Required">
          <md-switch v-model="item.required" class="md-primary"></md-switch>
        </md-table-cell>
      </md-table-row>
    </md-table>
  
    <md-progress-bar md-mode="indeterminate" v-if="loading" />
  
    <md-card-actions md-right>
      <md-button v-on:click="add" type="submit" class="md-primary" :disabled="sending">Add Task</md-button>
      <!-- <md-button v-on:click="save" type="submit" class="md-primary" :disabled="sending">Save</md-button> -->
    </md-card-actions>
    <md-snackbar :md-active.sync="taskSaved">Your tasks have been created, add some more?</md-snackbar>
  
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ViewTasks",
  data() {
    return {
      msg: "Please create a task for this project",
      sending: false,
      project_id: undefined,
      selected: [],
      taskSaved: false
    };
  },
  // this.$ac.apis.tasks.get
  created() {
    this.project_id = this.$route.params.id;
    this.$store.dispatch("task/projectTasks", this.project_id);
  },
  computed: {
    ...mapState({
      tasks: state => state.task.tasks,
      loading: state => state.task.loading
    })
  },
  methods: {
    edit() {
      this.$router.push({
        name: "ViewTask",
        params: { id: this.$route.params.id, tid: this.selected[0] }
      });
    },
    del() {
      const sel = this.selected;
      console.log(sel);
      this.$store.dispatch('task/deleteTasks', sel)
        .then('task/projectTasks', this.project_id)
    },
    addMedia() {
      this.$router.push({
        name: "UploadMediaTask",
        params: { id: this.$route.params.id, tid: this.selected[0] }
      });
    },
    onSelect(selected) {
      console.log(selected);
      // TODO add selected to store. Should be in a separate UI state?
      this.selected = selected.map(s => {
        return s.id;
      });
    },
    save() {
      this.$store.dispatch("task/syncTasks", this.project_id)
      .then(this.$store.dispatch("task/projectTasks", this.project_id))
    },
    change() {
      console.log('change')
    },
    add() {
      const t = {
        project_id: this.project_id,
        sequence: this.tasks.length + 1,
        title: `New Task ${this.tasks.length + 1}`,
        required: true,
        content: {
          data_type: "long_text",
          description: ""
        }
      };
      this.$store.dispatch("task/addTasks", [t])
        .then(this.$store.dispatch("task/projectTasks", this.project_id))
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

<template>
  <div>
    <form novalidate class="md-layout" disabled>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">User Details</div>
        </md-card-header>
  
        <md-card-content>
          <div v-if="user" class="md-layout">
            <md-field>
              <label for="user.email">Email</label>
              <md-input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled/>
            </md-field>

            <md-field>
              <label for="user.email">API Key</label>
              <md-input v-model="user.api_key" type="text" name="api" id="api"/>
            </md-field>
            
  
          </div>
        </md-card-content>
  
  
        <!-- <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="loading">Edit</md-button>
            </md-card-actions> -->
      </md-card>
  
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ViewUser",
  data() {
    return {
      userId: this.$route.params.id || this.$store.getters["user/id"]
    };
  },
  computed: mapState({
    user: state => state.user.user,
    loading: state => state.settings.loading
  }),
  mounted() {
    if (this.userId !== this.user.id) {
      this.$store.dispatch("user/getUser", this.userId);
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>

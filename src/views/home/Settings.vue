<template>
  <div>
    <form novalidate class="md-layout" disabled>
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Settings</div>
        </md-card-header>
  
        <md-card-content>
          <div class="md-layout">
            <md-field>
              <md-select v-model="theme" name="theme" id="theme">
                <md-option value="light">Light Theme</md-option>
                <md-option value="yellow">Yellow Theme</md-option>
                <md-option value="dark">Dark Theme</md-option>
              </md-select>
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
  name: "Settings",
  data() {
    return {};
  },
  watch: {
    theme(to, from) {
      this.$material.theming.theme = to;
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.currentUser,
      loading: state => state.settings.loading
    }),
    theme: {
      get() {
        return this.$store.state.settings.theme;
      },
      set(value) {
        this.$store.commit("settings/SET_THEME", value);
      }
    }
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>

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
              <label for="theme">Theme</label>
              <md-select v-model="theme" name="theme" id="theme">
                <md-option value="default">Default Theme</md-option>
                <md-option value="default-dark">Default Dark Theme</md-option>
                <md-option value="yellow">Yellow Theme</md-option>
                <md-option value="indigo">Indigo Theme</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label for="locale">Language</label>
              <md-select v-model="locale" name="locale" id="locale">
                <md-option value="en">English</md-option>
                <md-option value="de">German</md-option>
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
    },
    locale: {
      get() {
        return this.$store.state.settings.locale;
      },
      set(value) {
        this.$i18n.set(value)
        this.$store.dispatch("settings/setLoc", value);
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

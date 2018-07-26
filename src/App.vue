<template>
  <div flex class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">C<sup>3</sup>S</span>

      <div class="md-toolbar-section-end">
      </div>
    </md-toolbar>
    <md-progress-bar md-mode="indeterminate" v-if="loading" />

    <md-drawer :md-active.sync="showNavigation" >
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">CCCS</span>
      </md-toolbar>

      <md-list>
        <md-list-item to="/">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Dashboard</span>
        </md-list-item>
        <md-list-item md-expand>
          <md-icon>list</md-icon>
          <span class="md-list-item-text">Projects</span>
          <md-list slot="md-expand">
            <md-list-item to="/projects/create" class="md-inset">
              <md-icon>create</md-icon>
                <span class="md-list-item-text">Create</span>
            </md-list-item>
            <md-list-item to="/projects" class="md-inset">
              <md-icon>favorite</md-icon>
              <span class="md-list-item-text">My Projects</span>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>account_circle</md-icon>
          <span class="md-list-item-text">User</span>
          <md-list slot="md-expand">
            <md-list-item to="/user" class="md-inset">
              <md-icon>account_circle</md-icon>
              <span class="md-list-item-text">Account</span>
            </md-list-item>
            <md-list-item to="/settings" class="md-inset">
              <md-icon>settings</md-icon>
              <span class="md-list-item-text">Settings</span>
            </md-list-item>
            <md-list-item  to="/logout" class="md-inset">
              <md-icon>lock</md-icon>
              <span class="md-list-item-text">Logout</span>
            </md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <breadcrumbs/>
      <router-view/>
    </md-content>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "CCCS",
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  }),
  created() {
    // this.$material.theming.theme = 'myTheme'
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
};
</script>

<style lang="scss">
@import "src/assets/styles/theme.scss";

body {
  overflow-x: hidden;
  min-width: 100%;
}
// .md-drawer {
//   width: 230px;
//   max-width: calc(100vw - 125px);
//   background-color: red !important;
// }

.md-list {
  background-color: $prim !important;

}

// .md-list-item {
//     color: white !important;
// }
</style>

<template>
  <div flex class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="home-title md-title">C<sup>3</sup>S</span>
      <!-- TODO logo here -->
      <div class="md-toolbar-section-end">
         <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>{{locale}}</md-button>
      <md-menu-content>
        <md-menu-item @click="setLocale('en')">English</md-menu-item>
        <md-menu-item @click="setLocale('de')">Deutsch</md-menu-item>
      </md-menu-content>
    </md-menu>
      </div>
    </md-toolbar>
    <md-progress-bar md-mode="indeterminate" v-if="loading" />

    <md-drawer :md-active.sync="showNavigation" >
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">C<sup>3</sup>S</span>
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
      <br>
      <breadcrumbs></breadcrumbs>
      <br>
      <router-view/>
      <!-- <md-divider></md-divider> -->
      <md-snackbar class="err-bar" :md-active.sync="showSnack" v-if="err">
        {{err.message}}
      </md-snackbar>
    </md-content>
    <!-- <br><br> -->
    <CCFooter class='footer'></CCFooter>
    
  </div>
  
</template>

<script>
import CCFooter from '@/components/ccfooter.vue'
import Breadcrumbs from '@/components/breadcrumb.vue'
import { mapState, mapGetters } from "vuex"
export default {
  name: "CCCS",
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    showSnack: false
  }),
  components: {
    CCFooter,
    Breadcrumbs
  },
  watch: {
    'err' (to, from) {
      this.showSnack = to !== null ? true : false;
    }
  },
  created() {
    // this.$material.theming.theme = 'myTheme'
  },
  computed: {
    ...mapState({
      loading: state => state.settings.loading,
      locale: state => state.settings.locale,
      err: state => state.settings.err
    }),
  },
  methods: {
    setLocale(val) {
      this.$i18n.set(val);
      this.$store.dispatch('settings/setLoc', val);
    }
  }
};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@import "src/assets/styles/theme.scss";
body {
  overflow-x: hidden;
  min-width: 100%;
}

.home-title {
  color: white !important;
}

.err-bar {
  background-color: red !important;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  color: white !important;
  background-color: red !important;
  .md-list {
    background-color: red !important;
    color: white !important;
  }
  .md-list-item-content {
    color: white !important;
  }
}

// .footer {
//   height: 20%;
//   padding: 0 16px;
//   position: fixed;
//   min-width: 100%;
//   bottom: 0;
//   z-index: 4;
//   background-color: #eee;
// }


.footer {
  padding-top: 4%;
  min-width: 100%;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
}
.page-container {
  min-height: 100%;
}


// .md-list-item {
//     color: white !important;
// }
</style>

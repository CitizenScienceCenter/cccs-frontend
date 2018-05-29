<template>
  <div flex class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">CCCS</span>

      <div class="md-toolbar-section-end">
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
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
            <md-list-item class="md-inset">
              <md-icon>favorite</md-icon>
              <span class="md-list-item-text">My Projects</span>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item>
          <md-icon>account_circle</md-icon>
          <span class="md-list-item-text">Account</span>
        </md-list-item>

        <md-list-item  to="/logout">
          <md-icon>lock</md-icon>
          <span class="md-list-item-text">Logout</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view/>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'CCCS',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style lang="scss">
html, body {
    position: fixed;
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    height: 100%;
}
  // html {
  //   height: 100%;
  // }
  // body {
  //   display: flex;
  //   margin: 0;
  //   padding: 0;
  //   flex-direction: column;
  //   min-height: 100%;
  // }

  .page-container {
  //   overflow: hidden;
  //   position: relative;
    min-height: 100%;
  //   border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>

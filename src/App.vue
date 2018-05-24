<template>
  <div flex class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <span class="md-title">CCCS</span>

      <div class="md-toolbar-section-end">
        <md-button @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-drawer class="md-right" :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">CCCS</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Projects</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Account</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Create</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <router-link :to="{ name: 'Logout' }">Log out</router-link>
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

<style lang="scss" scoped>
  body{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .page-container {
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
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

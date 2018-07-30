<template>

  
  <div class="splash">
    <header class="home-header md-layout md-alignment-center-space-around">
        <h1 class="hdr-text">C<sup>3</sup>S</h1>
        <br>
        <p class="hdr-desc">A Citizen Science platform to create, and participate in, apps to access the power of the people.</p>
        <br>
        <div>
            <md-button to="/login" class="md-raised md-primary">Login</md-button>
            <md-button to="/register" class="md-raised md-accent">Sign Up</md-button>
        </div>
    </header>
  <div class="md-layout-item md-layout md-gutter md-alignment-top-left">
    <md-card  class="md-layout-item md-size-50">
      <md-card-header >
        <md-card-header-text>
          <div class="md-title">Open Source</div>
        </md-card-header-text>
        <md-card-media md-big>
          <md-icon class="md-size-4x">lock_open</md-icon>
        </md-card-media>
      </md-card-header>
      <md-card-content>
          All code and documentation is available on <a href="https://github.com/citizensciencecenter">Github</a>
      </md-card-content>

    </md-card>

    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Be Heard</div>
        </md-card-header-text>
        <md-card-media md-big>
          <md-icon class="md-size-4x">record_voice_over</md-icon>
        </md-card-media>
      </md-card-header>
      <md-card-content>
          Take part in projects all over the world to help researchers. Take pictures of local sights or update a mood diary. Scroll through our list of projects to get involved!
      </md-card-content>

    </md-card>

    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">No Coding Required</div>
        </md-card-header-text>
        <md-card-media md-big>
          <md-icon class="md-size-4x">code</md-icon>
        </md-card-media>
      </md-card-header>
      <md-card-content>
          Create mobile and web apps to assist your research with absolutely no code needed.
      </md-card-content>

    </md-card>
    

    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Open Data</div>
        </md-card-header-text>
        <md-card-media md-big>
          <md-icon class="md-size-4x">cloud_download</md-icon>
        </md-card-media>
      </md-card-header>
      <md-card-content>
          Download your data in CSV, JSON or XML format. Or just import directly to your database if you prefer!
      </md-card-content>

    </md-card>
  </div>
  </div>
</template>
<script>
export default {
  name: "Splash"
};
</script>
<style lang="scss" scoped src="@/assets/styles/home/splash.scss'>

</style>

<template>
    <div class="cc-footer">
      <div class="md-layout-item md-layout md-gutter">
        <md-card class="md-layout-item sub-image-card md-size-50">
          <!-- <md-card-media-cover>
            <md-card-media md-ratio="1:1"> -->
              <img class="logo" src="@/assets/img/uzh_logo.jpg"/>
            <!-- </md-card-media>
          </md-card-media-cover> -->
        </md-card>
        <md-card class="md-layout-item sub-image-card md-size-50">
          <!-- <md-card-media-cover>
            <md-card-media md-ratio="1:1"> -->
              <img class="elogo" src="@/assets/img/eth_logo.jpg"/>
            <!-- </md-card-media>
          </md-card-media-cover> -->
        </md-card>
        <md-card class="copyright md-layout-item md-size-100">
          <md-icon>copyright</md-icon> 2018 UZH ETH About 
        </md-card>
      </div>
  </div>
</template>

<script>
import _default, { mapState, mapGetters } from "vuex";
export default {
  name: "cc-footer",
  data() {
    return {};
  },
  computed: mapState({}),
  watch: {},
  mounted() {
    // TODO errors should be in a global state and cleared on load
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.cc-footer {
  max-width: 60%;
  width: 60%;
  max-height: 10%;
  padding-left: 20%;
  padding-right: 20%;
}
/* .cc-footer {
    height: 96px;
    padding: 0 16px;
    position: fixed;
    min-width: 100%;
    bottom: 0;
    z-index: 4;
    background-color: #eee;
  } */

  .sub-image-card {
    padding: 0px !important;
    // height: 40%;
    // width: 20%;
  }

  .md-card {
    background-color: #fff;
  }

  .copyright {
    text-align: center;
  }

  .logo {
    margin-top: 5%;
    margin-left: 10%;
  }


</style>

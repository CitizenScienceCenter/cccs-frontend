<template>
  <div>
    <carousel v-if="items.length" class="featured-carousel" :autoplay="true" :per-page="1">
      <slide :key="item.number" v-for="item in items">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="1:1">
              <img :src="item.img" alt="item.name">
            </md-card-media>
  
            <md-card-area>
              <md-card-header>
                <span class="md-title">{{item.msg}}</span>
                <span class="md-subhead">1/1 image</span>
              </md-card-header>
  
              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>
  
                <md-button class="md-icon-button">
                  <md-icon>share</md-icon>
                </md-button>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </slide>
    </carousel>
  </div>
</template>

<script>
  export default {
    name: 'featured-carousel',
    props: ['items'],
    data() {
      return {
      }
    },
    mounted() {},
    created() {
      console.log(this.items[0].path)
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .VueCarousel-slide {
    position: relative;
    background: #448aff;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }

  .slide-img {
    max-width: 30%;
  }
  
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

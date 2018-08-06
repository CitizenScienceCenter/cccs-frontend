<template>
  <div>
    <carousel v-if="items.length" class="featured-carousel" :autoplay="true" :per-page="1">
      <slide :key="item.number" v-for="item in items">
        <md-card class="md-primary">
         <md-card-media-actions>
        <md-card-media md-ratio="4:3">
          <img :src="item.img" alt="Cover">
        </md-card-media>

        <md-card-header>
          <span>{{item.msg}}</span>
        </md-card-header>

        <!-- <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>bookmark</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions> -->
      </md-card-media-actions>
        </md-card>
        <!-- <md-card>
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
        </md-card> -->
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
      
    },
    methods: {}
  }
</script>

<style lang="scss" scoped src='@/assets/styles/components/featured-carousel.scss'>

</style>

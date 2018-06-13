<template>
  <div>
    <carousel class="featured-carousel" :autoplay="true" :per-page="1">
      <slide :key="item.number" v-for="item in items">
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="1:1">
              <img :src="item.img" alt="Skyscraper">
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
    data() {
      return {
        items: [{
            msg: 'Farming Projects',
            number: 1,
            img: 'https://image.shutterstock.com/z/stock-photo-farmer-and-agraringeniuer-discuss-the-rape-field-140707168.jpg'
          },
          {
            msg: 'Chemistry Projects',
            number: 2,
            img: 'https://image.shutterstock.com/z/stock-photo-portrait-of-female-doctor-or-scientist-showing-and-analyzing-liquid-in-flask-over-american-flag-133647182.jpg'
          },
          {
            msg: 'Teaching Citizen Science',
            number: 3,
            img: 'https://image.shutterstock.com/z/stock-photo-conceptual-business-illustration-with-the-words-citizen-science-1014248041.jpg'
          },
          {
            msg: 'Businesses and Open Data',
            number: 4,
            img: 'https://image.shutterstock.com/z/stock-photo-conceptual-business-illustration-with-the-words-citizen-science-1022808259.jpg'
          }
        ]
      }
    },
    mounted() {},
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

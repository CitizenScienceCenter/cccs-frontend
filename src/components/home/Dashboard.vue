<template>
  <div class="md-layout md-gutter">
    <md-card class="md-layout-item md-size-100">
        <md-card-header>
            <div class="md-title"><b>Featured Projects</b></div>
        </md-card-header>

        <md-card-content>
            <div class="md-layout">
                <carousel class="featured-carousel" :autoplay="true" :per-page="1" >
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
        </md-card-content>
    </md-card>
    <md-divider/>
    <br>
    <md-list class="md-layout-item md-size-40 md-small-size-80" v-if="projects.length > 0">
      <md-list-item :key="p.id" v-for="p in projects">
        <md-icon></md-icon>
        <span class="md-list-item-text">{{p.name}}</span>
        <md-button :to="{name:'ViewProject', params: {id: p.id}}" class="md-icon-button md-list-action">
          <md-icon class="md-primary">chat_bubble</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

    </md-list>
    <md-card class="md-layout-item md-size-55">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Site Content</div>
          <div class="md-subhead">Subtitle</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Like</md-button>
          <md-button>Comment</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
      }],
      projects: []
    }
  },
  mounted() {
    this.$ac.apis.Projects.get1()
      .then((req) => {
          this.projects = req.body
          console.log(this.projects)
      })
  },
  methods: {
    loadProject(id) {
      this.$router.push({name:'ProjectView', params: id})
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  .slide-img {
    max-width: 30%;
  }

  .md-title {
    text-align: center;
  }

  .featured-carousel {
    left: 10%;
    width: 80%;
  }

  .VueCarousel-slide {
    position: relative;
    background: #448aff;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }

    .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<template>
  <div class="md-layout md-gutter">
    <md-card class="md-layout-item md-size-100">
        <md-card-header>
            <div class="featured-title md-title"><b>Featured Projects</b></div>
            <p>{{ $t("home.welcome") }}</p>
        </md-card-header>

        <md-card-content>
            <div class="md-layout">
              <featured-carousel class="featured-carousel" :items=items></featured-carousel>                
            </div>
        </md-card-content>
    </md-card>
    <md-divider/>
    <br>
    <project-list class="md-layout-item md-size-100 md-small-size-80"></project-list>
  </div>
</template>

<script>
import FeaturedCarousel from '@/components/featured-carousel.vue';
import ProjectList from '@/components/project-list.vue';
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
          }
        ]
    }
  },
  components: {ProjectList: ProjectList, FeaturedCarousel: FeaturedCarousel},
  mounted() {
  },
  methods: {
    loadProject(id) {
      this.$router.push({name:'ProjectView', params: id})
    }
  }
}
</script>

<style scoped src='@/assets/styles/home/dashboard.scss'>
</style>

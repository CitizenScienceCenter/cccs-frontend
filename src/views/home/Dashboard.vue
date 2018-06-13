<template>
  <div class="md-layout md-gutter">
    <md-card class="md-layout-item md-size-100">
        <md-card-header>
            <div class="featured-title md-title"><b>Featured Projects</b></div>
        </md-card-header>

        <md-card-content>
            <div class="md-layout">
              <featured-carousel class="featured-carousel"></featured-carousel>                
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

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }

  .featured-carousel {
    left: 10%;
    width: 100%;
  }

  .md-title {
    text-align: center;
  }


</style>

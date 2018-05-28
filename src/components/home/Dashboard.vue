<template>
  <div class="md-layout md-gutter">
    <md-card class="md-layout-item md-size-100">
        <md-card-header>
            <div class="md-title">Featured Projects</div>
        </md-card-header>

        <md-card-content>
            <div class="md-layout">
                <carousel class="featured-carousel" :autoplay="true" :per-page="1" >
                    <slide :key="item.number" v-for="item in items">
                      <span class="label">{{ item.msg }}</span>
                    </slide>
                </carousel>
                
            </div>
        </md-card-content>
    </md-card>
    <md-divider/>
    <md-list class="md-layout-item md-size-66">
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Abbey Christansen</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">chat_bubble</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Alex Nelson</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">chat_bubble</md-icon>
        </md-button>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/6" alt="People">
        </md-avatar>

        <span class="md-list-item-text">Mary Johnson</span>

        <md-button class="md-icon-button md-list-action">
          <md-icon>chat_bubble</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      items: [{
          msg: 'hi',
          number: 1
      },
      {
          msg: 'Hey',
          number: 2
      },
      {
          msg: 'Sup',
          number: 3
      },
      {
          msg: 'Yo',
          number: 4
      }]
    }
  },
  methods: {
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

  .md-title {
    text-align: center;
  }

  .featured-carousel {
    left: 45%;
  }

  .VueCarousel-slide {
    position: relative;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

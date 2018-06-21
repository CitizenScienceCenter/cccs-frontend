 <template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import ViewProject from '@/views/project/View.vue' //component name should be in camel-case
  import ProjectList from '@/components/project-list.vue'
  export default {
    name: 'Root',
    data() {
      return {
        projects: [],
        userID: undefined
      }
    }
  }
</script>

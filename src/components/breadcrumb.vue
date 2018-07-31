<template>
<div>
<ul class="breadcrumbs" v-if="crumbs.length">
			<li v-for="(crumb, i) in crumbs" v-bind:key="i" style="display:inline-block">
				<router-link v-if="i < crumbs.length-1" :to="crumb.path">{{ crumb.name }}</router-link>
				<span class=last v-else style="cursor:default">{{ crumb.name }}</span>
			</li></ul>
<br>
</div>
</template>        
<script>
export default {
  name: "breadcrumbs",
  props: { root: String },
  computed: {
    crumbs: function() {
      var path = "",
        title = this.root || "home";

      var cs = [{ name: title, path: "/" }];
      if (!this.$route) return [];

      var r = this.$route.path.split("/");

      for (var i = 1; i < r.length; i++) {
        var name = r[i];
        if (r[i] == "") continue;

        title += " : " + name;
        path += "/" + name;

        cs.push({ name: name, path: path });
      }

      return cs;
    }
  }
};
</script>
<style scoped lang="scss">

.breadcrumbs {
  padding-left: 2%;
  list-style: none;
  margin: 0;
  display: inline-block;
}
.breadcrumbs a:after {
  padding: 0 12px;
  color: #888;
  content: "/";
}
</style>
	
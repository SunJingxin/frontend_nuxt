<template>
  <div>
    功能开发中～
    <nav-tab :select="0"></nav-tab>
  </div>
</template>

<script>
  import navTab   from  '~/components/cartoon/navTab.vue';
  export default {
    head () {
      return {
        title: `书架`,
      }
    },
    name: "index",
    components: {
      navTab
    }
  }
</script>

<style scoped>

</style>

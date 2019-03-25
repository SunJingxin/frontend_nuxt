<template>
    <div>
      <tab :select="1"></tab>
      <vertical-list></vertical-list>
      <nav-tab :select="1"></nav-tab>
    </div>
</template>

<script>
  import navTab   from  '~/components/cartoon/navTab.vue';
  import verticalList   from  '~/components/cartoon/homepage/verticalList.vue';
  import tab   from  '~/components/cartoon/homepage/tab.vue';

  export default {
    head () {
      return {
        title: `首页`,
      }
    },
    name: "index",
    components: {
      navTab,
      verticalList,
      tab
    }
  }
</script>

<style scoped>

</style>

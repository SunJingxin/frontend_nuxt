<template>
    <!--【推荐】-->
    <div>
      <tab :select="0"></tab>
      <p>原来我很爱你</p>
      <horizontal-list :horizontal-num="3"></horizontal-list>
      <!--<p>2</p>-->
      <!--<horizontal-list :horizontal-num="2"></horizontal-list>-->
      <!--<p>1</p>-->
      <!--<horizontal-list :horizontal-num="1"></horizontal-list>-->
      <nav-tab :select="1"></nav-tab>
    </div>
</template>

<script>
    import tab   from  '~/components/cartoon/homepage/tab.vue';
    import navTab   from  '~/components/cartoon/navTab.vue';
    import horizontalList   from  '~/components/cartoon/homepage/horizontalList.vue';

    export default {
      head () {
        return {
          title: `首页`,
        }
      },
      name: "recommend",
      components: {
        tab,
        horizontalList,
        navTab,
      },
      methods: {
        jump(param){

        }
      },
    }
</script>

<style scoped>

</style>

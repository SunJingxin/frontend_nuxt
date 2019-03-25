<template>
  <div>
    功能开发中～
    <nav-tab :select="2"></nav-tab>
  </div>

</template>

<script>
    import navTab   from  '~/components/cartoon/navTab.vue';
    export default {
      name: "index",
      components: {
        navTab
      },
      created(){
        // 可选地，上面的请求可以这样做
        this.$axios.get('/container/ocrhomework/share/report.vpage', {
          params: {
            ID: 12345
          }
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>

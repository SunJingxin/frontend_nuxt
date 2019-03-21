<template>
    <div>
        功能开发中～～
        <div class="box">
          <div class="f">12</div>
        </div>
      <nav-tab/>
    </div>
</template>

<script>
  import navTab   from  '~/components/cartoon/navTab.vue';
  export default {
      name: "mine",
      components: {
        navTab
      }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/function.scss";
  $baseFontSize: 40;
  $baseFontUnit: rem;
  .box{
    color: red;
    .f{
      color: yellowgreen;
      font-size: pxToRem(100);
    }
  }
</style>

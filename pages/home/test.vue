<template>
    <div>
      s 2312
        <div class="box">
          <div class="f">23123</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/function.scss";
.box{
  color: red;
  .f{
    color: fuchsia;
    font-size: pxToRem(30);
  }
}

</style>

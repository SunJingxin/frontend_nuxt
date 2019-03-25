<template>
    <!--切换-->
    <div class="warp">
      <div class="tab">
        <div :class="select==0?'on':''" @click="jump(0)">
          推荐
        </div>
        <div :class="select==1?'on':''" @click="jump(1)">
          分类
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "tab",
      props:{
        select:{
          type:Number,
          default:1,
        }
      },
      methods: {
        jump(param){
          if(param){//分类
            window.location.href = "/cartoon/homepage"
          }else{
            window.location.href = "/cartoon/homepage/recommend"
          }
        }
      },

    }
</script>

<style lang="scss" scoped>
  @import "~assets/css/function.scss";
  $baseFontSize: 40;
  $baseFontUnit: rem;
  .tab{
    font-size: 0;
    margin: 0 auto;
    text-align: center;
    padding-top: pxToRem(20);
    div{
      display: inline-block;
      font-size: pxToRem(40);
      padding: 0 pxToRem(20);
    }
    .on{
      color: #3496ef;

    }
  }

</style>

<template>
  <div class="wrap">
      <ul class="box">
        <li>
          <a :class="select==0?'on':''" href="/cartoon/bookrack">书架</a>
        </li>
        <li>
          <a :class="select==1?'on':''" href="/cartoon/homepage">首页</a>
        </li>
        <li>
          <a :class="select==2?'on':''" href="/cartoon/mine">我的</a>
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
      name: "navTab",
      props:{
        select:{
          type:Number,
          default:1,
        }
      },
    }
</script>

<style lang="scss" scoped>
  @import "~assets/css/function.scss";
  $baseFontSize: 40;
  $baseFontUnit: rem;
  .wrap{
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    background-color: #ffffff;
    .box{
      font-size: 0;
      border-top: 1px solid #eeeeee;
      padding: pxToRem(30) 0;
      li{
        display: inline-block;
        width: 33%;
        font-size: pxToRem(30);
        text-align: center;
        a{
          color: #666666;
        }
        a.on{
          color: #3496ef;
        }
      }
    }
  }

</style>

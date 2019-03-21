<template>
    <!--漫画的页面-->
    <div>
      <div v-for="car in dataArr" class="car-box">
        <img :src="car"/>
      </div>

    </div>
</template>

<script>
    export default {
        name: "cartoon",
        data : () => ({
          dataArr: [
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b3303b355b2a.jpg",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc629a72.jpg",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc89fe99.jpg","",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc89fe99.jpg",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc931497.jpg",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc931497.jpg",
            "https://p.qiremanhua.com/uploads/chapter/10407/201806/5b31efc989069.jpg",
          ]
        })
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/function.scss";
  .car-box{
    img{
      display: block;
      width: 100%;
    }

  }

</style>

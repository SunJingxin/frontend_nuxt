<template>
    <div>
      <div class="top">
         123
      </div>
    </div>
</template>

<script>
    export default {
        name: "details",
        data : () => ({
          resData:[{
            "id": 10504,
            "book_name": "原来我很爱你",
            "book_author": " 杭漫文化",
            "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5ba0fada232c4.jpg",
            "end_state": 0,
            "short_title": "一段晦暗的爱情是否能够开花结果",
            "popularity": 10707014
          }]
      }),
    }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/function.scss";
  .top{
    width: 100%;
    height: pxToRem(200);
    background-color: red;
  }

</style>

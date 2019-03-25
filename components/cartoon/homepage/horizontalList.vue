<template>
  <!--横向列表-->
  <div>
    <div>
      <div v-if="horizontalNum==3" class="warp warp3">
        <div v-for="item in resData" class="box">
          <img :src="item.book_cover"/>
          <p class="title">{{item.book_name}}</p>
        </div>
      </div>
      <div v-if="horizontalNum==2" class="warp warp2">
        <div v-for="item in resData" class="box">
          <img :src="item.book_cover"/>
          <p class="title">{{item.book_name}}</p>
        </div>
      </div>
      <div v-if="horizontalNum==1" class="warp warp1">
        <div v-for="item in resData" class="box">
          <img :src="item.book_cover"/>
          <p class="title">{{item.book_name}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "horizontalList",
      data : () => ({
        resData:[{
          "id": 10504,
          "book_name": "原来我很爱你",
          "book_author": " 杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5ba0fada232c4.jpg",
          "end_state": 0,
          "short_title": "一段晦暗的爱情是否能够开花结果",
          "popularity": 10707014
        }, {
          "id": 10498,
          "book_name": "万丈光芒不及你",
          "book_author": "杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5b9a07780ac54.jpg",
          "end_state": 0,
          "short_title": "为心爱的男人顶罪，出来后迎接她的却是......",
          "popularity": 27970997
        }, {
          "id": 10502,
          "book_name": "抱紧我的鬼夫君",
          "book_author": "杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201812\/5c09f74adf128.jpg",
          "end_state": 0,
          "short_title": "我被一只鬼缠上，并要求我为他生猴子",
          "popularity": 16904047
        }, {
          "id": 10428,
          "book_name": "我不在故宫修文物",
          "book_author": "神鱼漫社",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201902\/5c651efdde390.jpg",
          "end_state": 1,
          "short_title": "一个钟表匠修男朋友（不是）的故事",
          "popularity": 2941587
        }, {
          "id": 10505,
          "book_name": "国民少帅爱上我",
          "book_author": "杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5ba1add11a8d3.jpg",
          "end_state": 0,
          "short_title": "这一次你逃不掉了！",
          "popularity": 7645246
        }, {
          "id": 10487,
          "book_name": "萌妻有点皮",
          "book_author": " 闻源文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201808\/5b87a411d8860.jpg",
          "end_state": 0,
          "short_title": "一场始于真心话大冒险的乌龙邂逅，双面总裁非要赖上你",
          "popularity": 20522163
        }, {
          "id": 10499,
          "book_name": "冥王老公萌萌哒",
          "book_author": "杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5b98dfd356a75.jpg",
          "end_state": 0,
          "short_title": "一场意外我成了冥王夫人，我这是还没睡醒吗？",
          "popularity": 4041132
        }, {
          "id": 10407,
          "book_name": "那个被我活埋的人",
          "book_author": "神鱼漫社",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201902\/5c63d7720228f.jpg",
          "end_state": 1,
          "short_title": "扭曲疯狂的病症该如何医治？",
          "popularity": 14222111
        }, {
          "id": 10509,
          "book_name": "王牌校草：爱的三分线",
          "book_author": "杭漫文化",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5ba21ca119ccf.jpg",
          "end_state": 0,
          "short_title": "当他遇上她，全世界我只喜欢你！",
          "popularity": 15218322
        }, {
          "id": 10460,
          "book_name": "王爷的小兔妖",
          "book_author": "触漫",
          "book_cover": "https:\/\/p.qiremanhua.com\/uploads\/book\/201809\/5b95cd119d91b.jpg",
          "end_state": 1,
          "short_title": "呆萌小兔妖报恩，对方居然要她以身相许？！",
          "popularity": 26216408
        }]
      }),
      props:{
        horizontalNum:{//
          type:Number,
          default:3,
        }
      },
    }
</script>

<style lang="scss" scoped>
  @import "~assets/css/function.scss";
  $baseFontSize: 40;
  $baseFontUnit: rem;
  .warp{
    padding-top: pxToRem(10);
  }
  .warp3{
    font-size: 0;
    text-align: left;
    padding-bottom: pxToRem(140);
    div{
      font-size: pxToRem(30);
      display: inline-block;
      width: 33.3%;
    }
    div:nth-of-type(3n+1){
      text-align: left;
    }
    div:nth-of-type(3n+2){
      text-align: center;
    }
    div:nth-of-type(3n+3){
      text-align: right;
    }
    .box{
      img{
        display: inline-block;
        width: 98%;
      }
      .title{
        text-align: center;
        font-size: pxToRem(28);
        color: #333333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        padding: pxToRem(10) 0;

      }
    }
  }
  .warp2{
    font-size: 0;
    text-align: left;
    padding-bottom: pxToRem(140);
    div{
      font-size: pxToRem(30);
      display: inline-block;
      width: 50%;
    }
    div:nth-of-type(2n+1){
      float: left;
    }
    div:nth-of-type(2n+2){
      text-align: right;
    }
    .box{
      img{
        display: inline-block;
        width: 99%;
      }
      .title{
        text-align: center;
        font-size: pxToRem(28);
        color: #333333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        padding: pxToRem(10) 0;

      }
    }
  }
  .warp1{
    font-size: 0;
    text-align: left;
    padding-bottom: pxToRem(140);
    div{
      font-size: pxToRem(30);
      display: inline-block;
      width: 100%;
    }
    .box{
      img{
        display: inline-block;
        width: 100%;
      }
      .title{
        text-align: center;
        font-size: pxToRem(28);
        color: #333333;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        padding: pxToRem(10) 0;

      }
    }
  }
</style>

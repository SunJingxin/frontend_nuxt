<template>
    <div>
        <!--头部导航-->
      <div class="top">
        <a-radio-group v-model="tabPosition" class="select">
          <a-radio-button value="left" @click="selectCard(0)">推荐</a-radio-button>
          <a-radio-button value="right" @click="selectCard(1)">分类</a-radio-button>
        </a-radio-group>
      </div>
      <recommend v-if="tab == 0"></recommend>
      <category  v-else></category>
        <!--底部导航-->
        <nav-tab/>
    </div>
</template>

<script>
  import navTab    from '~/components/cartoon/navTab.vue'
  import recommend from '~/components/cartoon/homepage/recommend.vue'
  import category  from '~/components/cartoon/homepage/category.vue'
  import common    from '~/assets/js/common.js'
  export default {
    name: "index",
    data () {
      return {
        tabPosition: 'right',
        tab:1, //默认分类
      }
    },
    components: {
      navTab,
      recommend,
      category,
    },
    methods: {
      selectCard (val) {
        let vm = this;
        vm.tab = val;
        if(val){//1
          localStorage.setItem("tab","category");
          vm.tabPosition = "right"
        }else{
          localStorage.setItem("tab","recommend");
          vm.tabPosition = "left"
        }
      }
    },
    created(){
      let vm = this;
    },
    mounted(){
      let vm = this;
      let tab = localStorage.getItem("tab");
      if(tab == "recommend"){
        vm.tabPosition = "left";
        vm.tab = 0;
      }
    }
  }
</script>

<style scoped>
  .top{
    padding: 6px 0;
    border-bottom: 1px solid #eeeeee;
  }
  .select{
    display: block;
    margin-left: 34%;

  }

</style>

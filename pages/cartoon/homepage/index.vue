<template>
    <div>
        <!--头部导航-->
      <div class="top">
        <a-radio-group v-model="tabPosition" class="select">
          <a-radio-button value="top" @click="selectCard(0)">推荐</a-radio-button>
          <a-radio-button value="bottom" @click="selectCard(1)">分类</a-radio-button>
        </a-radio-group>
      </div>
      <recommend v-if="tab == 0"></recommend>
      <category  v-else></category>







        <!--底部导航-->
        <nav-tab/>
    </div>
</template>

<script>
  import navTab from '~/components/cartoon/navTab.vue'
  import recommend from '~/components/cartoon/homepage/recommend.vue'
  import category from '~/components/cartoon/homepage/category.vue'
  export default {
    name: "index",
    data () {
      return {
        tabPosition: 'top',
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
        console.log(val)
      }
    },
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

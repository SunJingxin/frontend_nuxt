<template>
    <!--分类-->
    <div>
      <div class="top">
        <a-row type="flex" justify="start">
          <a-col :span="3" v-for="(item,index) in catalog">
            {{item}}
          </a-col>
        </a-row>
      </div>
    </div>
</template>

<script>
    export default {
      name: "category",
      data () {
        return {
          catalog:[
            "全部","全部","全部","全部","全部","全部","全部","全部",
            "全部","全部","全部","全部","全部","全部","全部"
          ]

        }
      },
    }
</script>

<style scoped>
  .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00A0E9;
    padding: 5px 0;
  }
  .top{
    padding:10px;
  }
</style>

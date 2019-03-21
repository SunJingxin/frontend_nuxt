<template>
    <div class="box">
      <a-row type="flex" justify="space-around" align="top">
        <a-col :span="4" @click="jump(1)">
            <a-icon type="book"  style="fontSize: 24px" />
            <span class="txt">书架</span>
        </a-col>
        <a-col :span="4" @click="jump(2)">
            <a-icon type="home"   style="fontSize: 24px"  />
            <span class="txt">首页</span>
        </a-col>
        <a-col :span="4" @click="jump(3)">
            <a-icon type="user" theme="outlined"  style="fontSize: 24px" />
            <span class="txt" >我的</span>
        </a-col>
      </a-row>
    </div>
</template>
<script>
    export default {
        name: "navTab",
        props:{
          select:{
            type:Number,
            default:2,
          }
        },
        methods: {
          jump(param){
            if(param == "1"){
              window.location.href = "/cartoon/bookrack";
            }else if(param == "2"){
              window.location.href = "/cartoon/homepage";
            }else{
              window.location.href = "/cartoon/mine";
            }
          }
        },

    }
</script>

<style  scoped>

.box{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 14px 0;
  border-top:1px solid #eeeeee;

}
.txt{
  display:inline-block;
  vertical-align: middle;
  color: #666666;
}
.txt-select{
  color: #4169ed;
}
/*组件重写*/
.anticon{
  vertical-align: middle;
  color: #666666;
}
.anticon-book{

}
.anticon-home{

}
.anticon-user{

}

</style>

<template>
  <div>
        <div class="MCNO-banner">

        </div>
        <p class="MCNO-tips">您还没有租用车位，<span>前往租用</span></p>
        <div class="MC-histroy"> 
            <span>租用记录</span>
            <i></i>
        </div>
        <fbtn @click.native="Returns">返回</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn";
export default {
  components: { fbtn },
  data() {
    return {};
  },
  methods:{
    Returns(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./MyCarport.less";
</style>

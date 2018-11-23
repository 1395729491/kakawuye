<template>
  <div>
     <div class="MRHD-carinfo">
        <div class="MRHD-carinfo-title">车位信息</div>
        <div class="MRHD-carinfo-content">
            <div class="MRHD-carinfo-item">
                <span>租用车位</span>
                <p>A去022</p>
            </div>
            <div class="MRHD-carinfo-item">
                <span>租用方式</span>
                <p>季租</p>
            </div>
            <div class="MRHD-carinfo-item">
                <span>租用费用</span>
                <p>20.00元</p>
            </div>
            <div class="MRHD-carinfo-item">
                <span>开始租用时间</span>
                <p>2018年12月10号</p>
            </div>
            <div class="MRHD-carinfo-item">
                <span>结束租用时间</span>
                <p>2019年2月10号</p>
            </div>
        </div>
      </div>
       <div class="MRHD-info">
            <div class="MRHD-info-np">
                  <div class="MRHD-info-np-name">
                      <span>姓名</span>
                      <p>胡曦格</p>
                  </div>
                    <div class="MRHD-info-np-name">
                      <span>电话</span>
                      <p>12943474756</p>
                  </div>
            </div>
            <div class="MRHD-info-carpai"> 
                <span>车牌</span> 
                <p>贵A8888</p>
            </div>
        </div>
        <fbtn @click.native="Returns">返回</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn";
export default {
  components: { fbtn },
  data(){
    return{

    }
  },
  methods:{
      Returns(){
          this.$router.go(-1);
      }
  }
}
</script>
<style lang="less" scoped> 
@import "./MyCarport.less";
</style>


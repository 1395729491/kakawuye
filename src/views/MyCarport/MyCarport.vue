<template>
  <div>
        <div class="MC-info">
            <div class="MC-info-np">
                  <div class="MC-info-np-name">
                      <span>姓名</span>
                      <p>胡曦格</p>
                  </div>
                    <div class="MC-info-np-name">
                      <span>电话</span>
                      <p>12943474756</p>
                  </div>
            </div>
            <div class="MC-info-carpai"> 
                <span>车牌</span> 
                <p>贵A8888</p>
            </div>
        </div>
        <div class="MC-carinfo">
          <div class="MC-carinfo-title">车位信息</div>
          <div class="MC-carinfo-content">
              <div class="MC-carinfo-item">
                  <span>租用车位</span>
                  <p>A去022</p>
              </div>
              <div class="MC-carinfo-item">
                  <span>租用方式</span>
                  <p>季租</p>
              </div>
              <div class="MC-carinfo-item">
                  <span>租用费用</span>
                  <p>20.00元</p>
              </div>
              <div class="MC-carinfo-item">
                  <span>开始租用时间</span>
                  <p>2018年12月10号</p>
              </div>
              <div class="MC-carinfo-item">
                  <span>结束租用时间</span>
                  <p>2019年2月10号</p>
              </div>
          </div>
        </div>
        <div class="MC-histroy"> 
            <span>租用记录</span>
            <i></i>
        </div>
        <fbtn>返回</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn";
export default {
  components: { fbtn },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "./MyCarport.less";
</style>

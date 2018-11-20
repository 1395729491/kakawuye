<template>
  <div>
      <div class="HS-info">
        <div class="HS-info-box">
            <div class="HS-info-name">
                <span>姓名</span>
                <p>胡曦格</p>
            </div>
            <div class="HS-info-name">
                <span>电话</span>
                <p>12943474756</p>
            </div>
        </div>
        <div class="HS-info-adress">
            <span>地址</span>
            <p>贵安新区数字经济行业园5栋4楼10号54410</p>
         </div>
      </div>
      <div class="HS-orderinfo">
          <div class="HS-orderinfo-title">订单信息</div>
          <div class="HS-orderinfo-content">
              <div class="HS-orderinfo-item">
                  <span>服务人员</span>
                  <p>张月嫂</p>
              </div>
              <div class="HS-orderinfo-item">
                  <span>服务时间</span>
                  <p>3个月</p>
              </div>
              <div class="HS-orderinfo-item">
                  <span>服务费用</span>
                  <p>1700元X3/月</p>
              </div>
              <div class="HS-orderinfo-item">
                  <span>总价</span>
                  <p>5300元</p>
              </div>
          </div>
      </div>
      <div class="HO-way">
          <span>支付方式</span>
          <div class="HO-way-wx">
              <p>微信支付</p>
              <i></i>
          </div>
      </div>
      <ftbtn>
          <div slot="left">总价:￥5300.00</div>
          <div slot="right">立即支付</div>
      </ftbtn>
  </div>
</template>
<script>
import ftbtn from "@/components/ftbtn.vue";
export default {
  components: { ftbtn },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "./Housewifery.less";
</style>

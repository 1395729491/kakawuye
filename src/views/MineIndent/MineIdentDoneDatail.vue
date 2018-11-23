<template>
  <div class="MIDD-bg">
      <div class="MIDD-info">
          <div class="MIDD-info-title">
                寄件人信息
          </div>
          <div class="MIDD-info-np">
                <p>
                    姓名:<span>胡曦格</span>
                </p>
                <p>
                    电话:<span>12345808754</span> 
                </p>
          </div>
          <div class="MIDD-info-adress">
              <span>寄件地址</span>
              <p>贵州省贵阳市花果园购物中心2楼</p>
          </div>
      </div>
       <div class="MIDD-info">
          <div class="MIDD-info-title">
                收件人信息
          </div>
          <div class="MIDD-info-np">
                <p>
                    姓名:<span>胡曦格</span>
                </p>
                <p>
                    电话:<span>12345808754</span> 
                </p>
          </div>
          <div class="MIDD-info-adress">
              <span>收件地址</span>
              <p>贵州省贵阳市花果园购物中心2楼</p>
          </div>
      </div>
      <div class="MIDD-orderInfo">
          <div class="MIDD-orderInfo-item">
            <span>订单编号:</span>
            <p>1245578888909</p>
          </div>
           <div class="MIDD-orderInfo-item">
            <span>订单时间:</span>
            <p>2018-07-12 14:00</p>
          </div>
           <div class="MIDD-orderInfo-item">
            <span>订单金额:</span>
            <p>12元</p>
          </div>
           <div class="MIDD-orderInfo-item">
            <span>订单状态:</span>
            <p>已发件</p>
          </div>
      </div>
      <btn @click.native="returns">返回</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue";
export default {
  components: { btn },
  data() {
    return {};
  },
  methods:{
    returns(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./MineIndent.less";
</style>

<template>
  <div>
      <div class="HO-time">
          <span>选择服务时间</span>
          <div class="HO-time-select">
              <p>3个月</p>
              <i></i>
          </div>
      </div>
      <div class="HO-from">
          <div class="HO-from-np">
            <span>姓名</span>
            <input type="text">
          </div>
          <div class="HO-from-np">
            <span>电话</span>
            <input type="text">
          </div>
          <div class="HO-from-np">
            <span>地址</span>
            <input type="text" class="HO-radius">
          </div>
      </div>
      <div class="HO-way">
          <span>支付方式</span>
          <div class="HO-way-wx">
              <p>微信支付</p>
              <i></i>
          </div>
      </div>
      <fbtn @click.native="GoHouseSure">立即支付</fbtn>
  </div>
</template>
<script>
import fbtn from "@/components/fiexbtn.vue";
export default {
  components: { fbtn },
  data() {
    return {};
  },
  methods:{
    GoHouseSure(){
      this.$router.push({name:'housersure'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./Housewifery.less";
</style>

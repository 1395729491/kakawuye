<template>
  <div class="PayS-bg">
        <div class="PayS-banner">
            <slot name="PaysBanner"></slot>
        </div>
        <p class="PayS-tips">{{ mestip }}! <span>{{ mesNum }}</span> </p>
        <btn @click.native="returnHome">返回</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue";
export default {
  components: { btn },
  props:{
    mestip:{
      default:'支付成功'
    },
    mesNum:{
      default:' '
    }
  },
  data() {
    return {};
  },
  methods:{
    returnHome(){
      this.$router.push({name:'myhome'});
    }
  }
};
</script>
<style lang="less" scoped>
@import "./pay-suc.less";
</style>

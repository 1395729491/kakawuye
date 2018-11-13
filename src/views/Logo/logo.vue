<template>
  <div class="LogoBg">
      <div class="LogoInput">
          <i></i>
          <input type="text" value="请输入您的身份证号码"> 
      </div>
      <btn @click.native="BeginUse">开始使用</btn>
  </div>
</template>
<script>
import btn from "@/components/button.vue"
export default {
  components:{btn},
  data(){
    return{
     
    }
  },
  methods:{
    BeginUse(){
      this.$router.push({name:'myhome'});
    }
  }
}
</script>
<style lang="less" scoped>
@import "./logo.less";
</style>

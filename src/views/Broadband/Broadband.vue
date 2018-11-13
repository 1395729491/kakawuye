<template>
  <div>
      <div class="BDBanner">

      </div>
      <div class="BDUser">
          <div class="BDUser-title">
              <i></i>
              用户信息
          </div>
          <ul>
            <li>
              宽带账号 : 1235676655
            </li>
            <li>
              用户姓名 : 胡曦格
            </li>
          </ul>
      </div>
      <div class="BDCombo">
          <div class="BDUser-title">
              <i></i>
              办理套餐信息
          </div>
          <ul>
            <li>
              套餐名称 : 中国电信超值豪华套餐
            </li>
            <li>
              套餐期限 : 2018年6月18-2019年6月18
            </li>
            <li>
              套餐价格 :<span>1790 / 年</span>
            </li>
             <li>
              套餐状态 :<span>已经到期</span>
            </li>
          </ul>
      </div>
      <div class="BDChange" @click="ChangCombo">
          <p>更换套餐</p>
          <i></i>
      </div>
      <div class="BDBtn">
          立即续缴
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    ChangCombo(){
       this.$router.push({name:'broadlist'});
    }
  }
}
</script>

<style lang="less" scoped>
@import "./Broadband.less";
</style>
